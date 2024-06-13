<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\SubCategory;
use App\Models\AssetDate;
use App\Models\Category;
use App\Models\Asset;
use App\Models\Unit;
use Inertia\Inertia;


class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Home', [
            'assets'                    => DB::table('assets')
                                                    ->join('categories', 'assets.category_id', '=', 'categories.id')
                                                    ->select(
                                                                'assets.id',   
                                                                'assets.item_name',
                                                                'assets.serial_no',
                                                                'assets.purchase_price', 
                                                                'assets.depreciation_rate', 
                                                                'assets.quantity',
                                                                'categories.category_name'
                                                            )
                                                    ->orderBy('quantity', 'DESC')
                                                    ->get(),

            'categories'                => Category::select('id','category_name')->get(),
            'subCategories'             => SubCategory::select('id', 'sub_category_name', 'category_id')->get(),
            
            'assetQuantiesByCategory'   => DB::table('assets')
                                                ->join('categories', 'assets.category_id', '=', 'categories.id')
                                                ->select('assets.quantity', 'categories.category_name')
                                                ->orderBy('quantity', 'DESC')
                                                ->get(),

            'lowAssets'                 => Asset::select('id','item_name', 'quantity')
                                                    -> where('quantity', '<=', '4')
                                                    ->orderBy('quantity', 'ASC')
                                                    ->get(),
           
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'itemName'          => ['required'],
            'category'          => ['required'],
            'quantity'          => ['required', 'numeric'],
            'depreciationRate'  => ['required', 'numeric'],
            'deliveryDate'      => ['required', 'before_or_equal:' .  Date('Y-m-d')]
        ]);

        $depreciationRateDivideBy100 = $request->depreciationRate/100;

        $assetCategory  =   Category::create([
            'category_name'     =>  $request->category,
        ]);

        // SubCategory::create([
        //     'sub_category_name' 
        // ])
        
        $storedItem =   Asset::create([
            'serial_no'         =>  $request->serialNo,
            'item_name'         =>  $request->itemName,
            'quantity'          =>  $request->quantity,
            'category_id'       =>  $assetCategory->id,            
            'depreciation_rate' =>  $depreciationRateDivideBy100
        ]);
       
        AssetDate::create([
            'asset_id'          =>  $storedItem->id,
            'delivery_date'     =>  $request->deliveryDate,
            'remarks'           =>  $request->remarks
        ]);

        
        return redirect('/')->with('message', 'Successfully added new item');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $items      =   DB::table('assets')
                            ->join('categories', 'assets.category_id', '=', 'categories.id')
                            ->join('units', 'assets.unit_id', '=', 'units.id')
                            ->select(
                                        'assets.item_name',
                                        'assets.serial_no',
                                        'assets.purchase_price',
                                        'assets.depreciation_rate',
                                        'assets.quantity',
                                        'assets.asset_code',
                                        'assets.condition',
                                        'categories.category_name',
                                        'units.unit_name',
                                        'units.unit_measure',
                                    )
                            ->where('assets.id', '=', $id)
                            ->get();
        $storeDates =   AssetDate::select(
                                            'delivery_date',
                                            'issue_date',
                                            'return_date',
                                            'issue_amount',
                                            'issued_to',
                                            'remarks',
                                            'returned_by'
                                        )
                                    ->where('asset_id', $id)
                                    ->get();
               
        return Inertia::render('Actions/View', [
            'item'  => $items,
            'dates' => $storeDates,        
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $asset          =   DB::table('assets')
                                ->join('categories', 'assets.category_id', '=', 'categories.id')
                                ->join('units', 'assets.unit_id', '=', 'units.id')
                                ->select(
                                            'assets.item_name',
                                            'assets.serial_no',
                                            'assets.purchase_price',
                                            'assets.depreciation_rate',
                                            'assets.quantity',
                                            'assets.asset_code',
                                            'assets.condition',
                                            'assets.returnable',
                                            'categories.category_name',
                                            'units.unit_name'
                                        )
                                ->where('assets.id', '=', $id)
                                ->get();
        $storeDates     =   AssetDate::where('asset_id', $id)->get();
               
        return Inertia::render('Actions/Edit', [
            'item'  =>  $asset,
            'dates' =>  $storeDates,
            'units' =>  Unit::select('unit_name', 'unit_measure')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $storeItem  =   Asset::findOrFail($id);

        $storeItem  ->  update([
            'item_name'         =>  $request->itemName,
            'serial_no'         =>  $request->serialNo,
            'depreciation_rate' =>  $request->depreciationRate,
            'remarks'           =>  $request->remarks,
            'quantity'          =>  $request->quantity,
        ]);

        $storeItemDate = AssetDate::where('asset_id', $id)
                                    ->update([
                                        'delivery_date' => $request->deliveryDate,
                                        'issue_date' => $request->issueDate,
                                        'return_date' => $request->returnDate,
                                        'remarks' => $request->remarks
                                    ]);

        return redirect('/')->with('message', 'Successfully updated item');;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $storeItem      =   Asset::findOrFail($id);
        $storeItem      ->  delete();
        
        $storeItemDate  =    AssetDate::where('asset_id', $id)->delete();

        return redirect('/')->with('message', 'Successfully deleted item');
    }
}
