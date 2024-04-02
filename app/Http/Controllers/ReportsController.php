<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StoreItem;
use Inertia\Inertia;

class ReportsController extends Controller
{
   public function index()
   {

        return Inertia::render('Reports/InventoryReport');

   }
}
