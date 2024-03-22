<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use App\Models\StoreItem;
use App\Models\StoreItemDates;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Home', [
            'storeItems' => StoreItem::select('id','item_name', 'category', 'location')
                                        
                                        ->get(),
            // 'lowStoreItems' => StoreItem::select('id','item_name', 'category', 'location')
            //                                 ->orderBy('quantity', 'asc')
            //                                 ->where('quantity', '<', '30')
            //                                 ->get(),
            // 'units' => Unit::select('unit', 'unit_size')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'itemName' => ['required'],
            'category' => ['required'],
            'quantity' => ['required', 'numeric'],
            'depreciationRate' => ['required', 'numeric'],
            'deliveryDate' => ['required', 'before_or_equal:' .  Date('Y-m-d')]
        ]);

        $depreciationRateDivideBy100 = $request->depreciationRate/100;
        
        $storedItem = StoreItem::create([
            'serial_no' =>$request->serialNo,
            'item_name' =>$request->itemName,
            'quantity' =>$request->quantity,
            'category' =>$request->category,
            'depreciation_rate'=>$depreciationRateDivideBy100
        ]);
       
        StoreItemDates::create([
            'store_item_id' => $storedItem->id,
            'delivery_date' => $request->deliveryDate,
            'remarks' => $request->remarks
        ]);

        
        return redirect('/')->with('message', 'Successfully added new item');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $items = StoreItem::findOrFail($id);
        $storeDates = StoreItemDates::select('delivery_date', 'issue_date', 'return_date', 'issue_amount', 'issued_to', 'remarks', 'returned_by')->where('store_item_id', $id)->get();
        $unit = Unit::where('store_item_id', $id)->get();
               
        return Inertia::render('Actions/View', [
            'item' => $items,
            'dates' => $storeDates,
            'unit' => $unit           
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {   
        $items = StoreItem::findOrFail($id);
        $storeDates = StoreItemDates::where('store_item_id', $id)->get();
        $selectedUnit = Unit::where('store_item_id', $id)->get();
               
        return Inertia::render('Actions/Edit', [
            'item' => $items,
            'dates' => $storeDates,
            'units' => Unit::select('unit', 'unit_size')->get(),
            'unit' => $selectedUnit      
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
       
        $storeItem = StoreItem::findOrFail($id);
        $storeItem->update([
            'item_name' => $request->itemName,
            'serial_no' => $request->serialNo,
            'depreciation_rate' => $request->depreciationRate,
            'remarks' => $request->remarks,
            'quantity' => $request->quantity,
        ]);

        $storeItemDate = StoreItemDate::where('store_item_id', $id)
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
        $storeItem = StoreItem::findOrFail($id);
        $storeItem->delete();
        
        $storeItemDate = StoreItemDates::where('store_item_id', $id)->delete();

        return redirect('/')->with('message', 'Successfully deleted item');
    }
}
