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
        Schema::create('fixed_assets', function (Blueprint $table) {
            $table->id();
            $table->string('item_name');
            $table->string('location');
            $table->string('serial_no');
            $table->string('description');
            $table->decimal('purchase_amount');
            $table->decimal('depreciation_rate');
            $table->enum('condition', ['new', 'repaired', 'good', 'damaged']);
            $table->boolean('acquired')->default(true);
            $table->string('asset_code');
            $table->integer('category_id');
            $table->decimal('quantity');           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fixed_assets');
    }
};
