<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('store_items', function (Blueprint $table) {
            $table->id();
            $table->string('serial_no')->nullable();
            $table->string('item_name');
            $table->string('category');
            $table->string('asset_code');
            // $table->integer('quantity');
            // $table->float('depreciation_rate'); 
            $table->string('location');         
            $table->boolean('acquired')->default(true);
            $table->string('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('store_items');
    }
};
