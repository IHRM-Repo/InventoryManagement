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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->string('item_name');
            $table->string('serial_no')->nullable();
            $table->double('purchase_price')->nullable();
            $table->decimal('depreciation_rate')->nullable();
            $table->boolean('returnable')->default(false);
            $table->decimal('quantity');
            $table->string('unit_id');
            $table->string('category_id');
            $table->text('description')->nullable();
            $table->enum('condition', ['new', 'damaged','expired', 'used']);
            $table->enum('asset_code', ['tangible', 'intangible'])->default('tangible');
            $table->boolean('acquired')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
