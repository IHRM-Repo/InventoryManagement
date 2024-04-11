<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Unit;
use App\Models\FixedAssets;
use App\Models\LiquidAssets;
use App\Models\SubCategory;
use App\Models\StoreItemCategory;
use App\Models\StoreItemDates;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        FixedAssets::factory()
                    ->count(10)
                    ->has(StoreItemDates::factory()->count(2))
                    ->has(StoreItemCategory::factory()->count(2))
                    ->create();
        LiquidAssets::factory()
                    ->count(5)
                    ->has(StoreItemDates::factory()->count(3))
                    ->has(StoreItemCategory::factory->count(2))
                    ->has(Unit::factory->count(3))
                    ->create();
        StoreItemCategory::factory()
                    ->count(3)
                    ->has(SubCategory::factory()->count(2))
                    ->create();
    }
}
