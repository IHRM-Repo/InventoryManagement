<?php

namespace App\Http\Controllers;

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
                                 ->select('assets.id','assets.item_name', 'asset_dates.issue_amount', 'asset_dates.issue_date')
                                 ->orderBy('asset_dates.issue_date', 'ASC')->get(),
         'returnedStock'   => DB::table('assets')
                                 ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                 ->select('assets.id','assets.item_name', 'asset_dates.issue_amount', 'asset_dates.return_date')
                                 ->orderBy('asset_dates.return_date', 'ASC')->get(),
         'purchasedStock'  => DB::table('assets')
                                 ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                 ->select('assets.id','assets.item_name', 'asset_dates.issue_amount', 'asset_dates.purchase_date')
                                 ->orderBy('asset_dates.purchase_date', 'ASC')->get(),
         'damagedStock'    => Asset::select('id','item_name','serial_no', 'condition')->where('condition', '=', 'damaged')->get(),
        ]);
   }

   public function depreciatedStock ()
   {
      $calculateDepreciation = DB::table('assets')
                                    ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                    ->select('assets.id','assets.item_name','assets.purchase_price', 'assets.depreciation_rate', 'asset_dates.purchase_date')
                                    ->whereNotNull('assets.serial_no')
                                    ->orderBy('asset_dates.purchase_date', 'ASC')
                                    ->get();
      $deadStock = $calculateDepreciation->map(function($item) {
         $date = DateTime::createFromFormat("Y-m-d", $item->purchase_date);
         $depreciatedValue = pow((1 - ($item->depreciation_rate)/100), date('Y') - $date->format('Y')) * $item->purchase_price;
         return [
            'id' => $item->id,
            'item_name' => $item->item_name,
            'purchase_price' => round($item->purchase_price, 2),
            'depreciation_rate' => round($item->depreciation_rate, 2),
            'purchase_date' => $item->purchase_date,
            'depreciated_value' => round($depreciatedValue, 2),
         ];
      });

      return Inertia::render('Reports/DeadStockReport', [
         'deadStock'  => $deadStock,
      ]);
   }
}
