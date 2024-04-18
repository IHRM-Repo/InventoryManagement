<?php

namespace App\Http\Controllers;

use App\Exports\DepreciatedStockExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Asset;
use Inertia\Inertia;
use DateTime;


class ReportsController extends Controller
{
   public function index()
   {
      return Inertia::render('Reports/Index', [

         'issuedStock'     => DB::table('assets')
                                 ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                 ->select(
                                             'assets.id',
                                             'assets.item_name',
                                             'asset_dates.issue_amount',
                                             'asset_dates.issue_date'
                                          )
                                 ->orderBy('asset_dates.issue_date', 'ASC')
                                 ->get(),

         'returnedStock'   => DB::table('assets')
                                 ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                 ->select(
                                             'assets.id',
                                             'assets.item_name',
                                             'asset_dates.issue_amount',
                                             'asset_dates.return_date'
                                          )
                                 ->orderBy('asset_dates.return_date', 'ASC')
                                 ->get(),

         'purchasedStock'  => DB::table('assets')
                                 ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                 ->select(
                                             'assets.id',
                                             'assets.item_name',
                                             'asset_dates.issue_amount',
                                             'asset_dates.purchase_date'
                                          )
                                 ->orderBy('asset_dates.purchase_date', 'ASC')
                                 ->get(),

         'damagedStock'    => Asset::select('id','item_name','serial_no', 'condition')
                                    ->where('condition', '=', 'damaged')
                                    ->get(),
        ]);
   }

   public function depreciatedStock ()
   {
      $assets     = DB::table('assets')
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

      $deadStock  = $assets->map(function($item) {
         $assetDate                    =  DateTime::createFromFormat("Y-m-d", $item->purchase_date);

         // calculated depreciation value that is the depreciation rate to the power of the number of 
         // years between current year and the purchase date multiplied by the purchase price
         $depreciatedValue             =  pow(
                                                (1 - ($item->depreciation_rate)/100),
                                                date('Y') - $assetDate->format('Y')
                                             ) *
                                          $item->purchase_price;
         
        

         return [
            'id'                 => $item->id,
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

      return Inertia::render('Reports/DeadStockReport', [
         'deadStock'  => $depreciatedAssets,
      ]);
   }

   public function exportDeadStock()
   {
      return Excel::download(new DepreciatedStockExport, 'dead-stock.xlsx');
   }
}
