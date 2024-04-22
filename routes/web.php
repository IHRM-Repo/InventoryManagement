<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ExcelFileImportController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\AssetController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::group([], function () {
//    Route::get('/', [AssetController::class, 'index'])->name('item.home');
//    Route::post('/', [AssetController::class, 'store'])->name('item.store');
//    Route::get('{id}/view', [AssetController::class, 'show'])->name('item.show');
//    Route::get('{id}/edit', [AssetController::class, 'edit'])->name('item.edit');
//    Route::patch('{id}', [AssetController::class, 'update'])->name('item.update');
//    Route::delete('/delete/{id}', [AssetController::class, 'destroy'])->name('item.destroy');
//}); 
// Route::get('/reports', [ReportsController::class, 'index'])->name('report');
// Route::get('/dead-stock', [ReportsController::class, 'depreciatedStock'])->name('dead-stock');
// Route::get('/export/dead-stock', [ReportsController::class, 'exportDeadStock'])->name('exportDeadStock');

// Route::post('/import-excel', [ExcelFileImportController::class, 'upload'])->name('excel.upload');
// Route::resource('/dashboard', StoreItemController::class);

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::group([], function () {
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');   
});



//Route::get('/', function () {
  //  return Inertia::render('Welcome', [
    //    'canLogin' => Route::has('login'),
      //  'canRegister' => Route::has('register'),
    //]);
//  }); 


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
