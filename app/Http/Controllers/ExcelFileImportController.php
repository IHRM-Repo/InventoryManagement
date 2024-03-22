<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\StoreItemsImport;
use Maatwebsite\Excel\Facades\Excel;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;

class ExcelFileImportController extends Controller
{
    public function upload(Request $request)
    {      
           
        $request->validate(['file' => 'required|mimes:xlsx, xls']);    
    
        // $file = $request->files('file');
        $file = $request->file('file');
        
        Excel::import(new StoreItemsImport, $file);

        return redirect('/')->with('message', 'Successfully imported excel file');
    }
}
