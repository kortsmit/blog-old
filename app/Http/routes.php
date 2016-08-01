<?php

Route::get('/', function () {
    return view('index');
});

Route::group(['prefix' => 'api', 'middleware' => ['api']], function () {
    
    Route::resource('/posts', '\Blog\Http\Controllers\PostsController');

    Route::resource('/categories', '\Blog\Http\Controllers\CategoriesController');

    Route::resource('/photos', '\Blog\Http\Controllers\PhotosController');

    Route::resource('/users', '\Blog\Http\Controllers\UsersController');
    
});