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
            $table->string('item_name')->nullable();
            $table->string('category')->nullable();
            $table->string('asset_code')->nullable();
            $table->float('depreciation_rate')->nullable();
            $table->decimal('purchase_amount')->nullable(); 
            $table->string('location')->nullable();         
            $table->boolean('acquired')->nullable()->default(true);
            $table->decimal('quantity')->nullable();
            $table->string('type')->nullable();
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
