<?php

namespace Database\Factories;

use App\Models\StoreItemCategory;
use App\Models\Unit;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LiquidAssets>
 */
class LiquidAssetsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'item_name' => fake()->word(),
            'unit_id' => Unit::factory(),
            'quantity' => fake()->randomNumber(3, true),
            'category_id' => StoreItemCategory::factory(),
        ];
    }
}
