<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\StoreItem;
use Inertia\Inertia;

class ReportsController extends Controller
{
   public function index()
   {
        return Inertia::render('Reports/Index', [
         'issuedStock' => DB::table('assets')
                              ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                              ->select('assets.id','assets.item_name', 'asset_dates.issue_amount', 'asset_dates.issue_date')
                              ->orderBy('asset_dates.issue_date', 'ASC')->get(),
         'returnedStock' => DB::table('assets')
                                 ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                 ->select('assets.id','assets.item_name', 'asset_dates.issue_amount', 'asset_dates.return_date')
                                 ->orderBy('asset_dates.return_date', 'ASC')->get(),
         'purchasedStock' => DB::table('assets')
                                 ->join('asset_dates', 'assets.id', '=', 'asset_dates.asset_id')
                                 ->select('assets.id','assets.item_name', 'asset_dates.issue_amount', 'asset_dates.purchase_date')
                                 ->orderBy('asset_dates.purchase_date', 'ASC')->get(),
        ]);

   }
}
