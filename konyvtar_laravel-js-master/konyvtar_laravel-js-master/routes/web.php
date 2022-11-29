<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KonyvController;

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

Route::get('/', function () {
    return view('index');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/konyvek', [KonyvController::class, 'index']);
Route::post('/konyvek', [KonyvController::class, 'store']);
Route::put('/konyvek/{id}', [KonyvController::class, 'update']);
Route::delete('/konyvek/{id}', [KonyvController::class, 'destroy']);

require __DIR__ . '/auth.php';
