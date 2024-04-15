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
        Schema::create('asset_dates', function (Blueprint $table) {
            $table->id();
            $table->date('purchase_date')->nullable();
            $table->string('asset_id');
            $table->date('issue_date')->nullable();
            $table->date('return_date')->nullable();
            $table->text('remarks')->nullable();
            $table->decimal('issue_amount')->nullable();
            $table->string('issued_to')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_dates');
    }
};
