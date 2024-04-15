<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Unit;
use App\Models\Location;
use App\Models\AssetDate;
use App\Models\SubCategory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        AssetDate::factory()
                ->count(10)
                ->create();
        SubCategory::factory()
                    ->count(5)
                    ->create();
        Location::factory()
                    ->count(5)
                    ->create();
    }
}
