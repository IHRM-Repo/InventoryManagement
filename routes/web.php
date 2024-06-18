<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
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


//Login and Logout
Route::get('', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::post('', [AuthenticatedSessionController::class, 'store'])->name('login');
Route::delete('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');


Route::get('/registration', [RegisteredUserController::class, 'create'])->name('register');
Route::post('/registration', [RegisteredUserController::class, 'store']);

Route::get('/dashboard', [AssetController::class, 'index'])->name('dashboard')->middleware('auth');
Route::post('/dashboard', [AssetController::class, 'store'])->name('item.store')->middleware('auth');
Route::get('{id}/view', [AssetController::class, 'show'])->name('item.show')->middleware('auth');
Route::get('{id}/edit', [AssetController::class, 'edit'])->name('item.edit')->middleware('auth');
Route::patch('{id}', [AssetController::class, 'update'])->name('item.update')->middleware('auth');
Route::delete('/delete/{id}', [AssetController::class, 'destroy'])->name('item.destroy')->middleware('auth');

Route::get('/reports', [ReportsController::class, 'index'])->name('report')->middleware('auth');
Route::get('/dead-stock', [ReportsController::class, 'depreciatedStock'])->name('dead-stock')->middleware('auth');
Route::get('/export/dead-stock', [ReportsController::class, 'exportDeadStock'])->name('exportDeadStock')->middleware('auth');

Route::post('/import-excel', [ExcelFileImportController::class, 'upload'])->name('excel.upload')->middleware('auth');



require __DIR__.'/auth.php';
