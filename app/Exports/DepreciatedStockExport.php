<?php

namespace App\Exports;

use DateTime;
use App\Models\Asset;
use App\Models\Location;
use App\Models\AssetDate;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;

class DepreciatedStockExport implements FromCollection,  WithHeadings
{
    public function headings(): array
    {
        return [
            'Item Name',
            'Purchase Price',
            'Depreciation Rate',
            'Purchase Date',
            'Depreciation Value'
        ];
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $assets     =   DB::table('assets')
                            ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                            // ->join('locations', 'assets.id', '=', 'locations.asset_id')
                            ->select(
                                        'assets.id',
                                        'assets.item_name',
                                        'assets.purchase_price',
                                        'assets.depreciation_rate',
                                        'asset_dates.purchase_date',
                                        // 'locations.location_name'
                                    )
                            ->whereNotNull('assets.serial_no')
                            ->orderBy('asset_dates.purchase_date', 'ASC')
                            ->get();

        $deadStock  =   $assets->map(function($item) {
            $assetDate          =  DateTime::createFromFormat("Y-m-d", $item->purchase_date);

            // calculated depreciation value that is the depreciation rate to the power of the number of 
            // years between current year and the purchase date multiplied by the purchase price
            $depreciatedValue   =   pow(
                                            (1 - ($item->depreciation_rate)/100),
                                            date('Y') - $assetDate->format('Y')
                                        ) *
                                    $item->purchase_price;



            return [
                'item_name'          => $item->item_name,
                'purchase_price'     => round($item->purchase_price, 2),
                'depreciation_rate'  => round($item->depreciation_rate, 2),
                'purchase_date'      => $item->purchase_date,
                'depreciated_value'  => round($depreciatedValue, 2),
                // 'location'           => $item->location_name
            ];
        });

        $depreciatedAssets = $deadStock->filter(function($item) {
            return $item['depreciated_value'] <= 1000;
        });  

        return $depreciatedAssets;
    }
}
