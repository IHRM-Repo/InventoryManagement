<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\ExcelFileImportController;
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

Route::group([], function () {
    Route::get('/', [AssetController::class, 'index'])->name('item.home');
    Route::post('/', [StoreItemController::class, 'store'])->name('item.store');
    Route::get('{id}/view', [StoreItemController::class, 'show'])->name('item.show');
    Route::get('{id}/edit', [StoreItemController::class, 'edit'])->name('item.edit');
    Route::patch('{id}', [StoreItemController::class, 'update'])->name('item.update');
    Route::delete('/delete/{id}', [StoreItemController::class, 'destroy'])->name('item.destroy');
});
Route::get('/reports', [ReportsController::class, 'index'])->name('report');

Route::post('/import-excel', [ExcelFileImportController::class, 'upload'])->name('excel.upload');
// Route::resource('/dashboard', StoreItemController::class);


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
