<?php

namespace Database\Factories;

use App\Models\StoreItemCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FixedAssets>
 */
class FixedAssetsFactory extends Factory
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
            'serial_no' => fake()->isbn10(),
            'purchase_amount' => fake()->randomFloat(),
            'depreciation_rate' => fake()->randomFloat(),
            'location' => fake()->word(),
            'description' => fake()->text(),
            'condition' => fake()->randomElement(['good', 'new', 'damaged']),
            'acquired' => fake()->boolean(),
            'asset_code' => fake()->text(),
            'quantity' => fake()->randomDigit(),
            'category_id' => StoreItemCategory::factory(),
        ];
    }
}
