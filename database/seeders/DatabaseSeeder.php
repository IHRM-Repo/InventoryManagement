<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Unit;
use App\Models\StoreItem;
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

        $storeItem = StoreItem::factory()
                                ->count(10)
                                ->has(StoreItemDates::factory()->count(2))
                                ->create();
        $items = Unit::factory()
                        ->count(5)
                        ->create();
    }
}
