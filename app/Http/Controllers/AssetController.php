<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Asset;
use Inertia\Inertia;


class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Home', [
            'assets' => Asset::select('id','item_name', 'serial_no', 'purchase_price', 'depreciation_rate', 'quantity', 'category_id')->get(),
            'categories' => Category::select('id','category_name')->get(),
            
            'assetQuantiesByCategory' => DB::table('assets')
                                            ->join('categories', 'assets.category_id', '=', 'categories.id' )
                                            ->select('assets.quantity', 'categories.category_name')
                                            ->get(),
            'lowAssets' => Asset::select('id','item_name', 'quantity')-> where('quantity', '<=', '4')->get(),
           
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
