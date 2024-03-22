<?php

namespace App\Imports;

use App\Models\StoreItem;
use App\Models\StoreItemDates;
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
            $item = StoreItem::create([
                'serial_no'   => $row[0],
                'item_name'   => $row[1],
                'asset_code'  => $row[2],
                'category'    => $row[3],
                'location'    => $row[4],
                'description' => $row[5],
                'acquired'    => $row[6],
            ]);
            
            StoreItemDates::create([
                'store_item_id' => $item->id,
                'remarks'       => $row[7]
            ]);
        }
      
    }
}
