<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    Route::post('auth/login', [AuthController::class, 'login']);
    Route::post('auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('auth/register', [AuthController::class, 'register']);
    Route::get('auth/abilities', [AuthController::class, 'abilities'])->middleware('auth:sanctum');
    Route::get('auth/user-profile', [AuthController::class, 'userProfile'])->middleware('auth:sanctum');

});
