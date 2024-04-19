<?php

namespace App\Imports;

use App\Models\Asset;
use App\Models\Location;
use App\Models\AssetDate;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;


class StoreItemsImport implements ToCollection
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {    
      
        foreach($rows as $row)
        {
            $itemCategory = Category::create([
                'category_name' => row[3], 
            ]);

            $item         = Asset::create([
                'serial_no'     => $row[0],
                'item_name'     => $row[1],
                'asset_code'    => $row[2],
                'category_id'   => $itemCategory->id,
                'description'   => $row[5],
                'acquired'      => $row[6],
                'quantity'      => $row[7],
            ]);

            Location::create([
                'asset_id'      => $item->id,
                'location_name' => $row[4],
            ]);
            
            AssetDate::create([
                'asset_id'      => $item->id,
                'remarks'       => $row[7]
            ]);
        }
      
    }
}
