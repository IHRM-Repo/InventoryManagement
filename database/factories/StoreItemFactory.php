<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StoreItem>
 */
class StoreItemFactory extends Factory
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
            'category' => fake()->randomElement(['stationery', 'kitchen', 'technology', 'furniture', 'others']),
            'quantity' => fake()->randomNumber(2, true),
            'depreciation_rate' => fake()->randomFloat('2', 0, 2),
            'returnable' => fake()->boolean(),
            'serial_no' => fake()->regexify('[A-Za-z0-9]{10}'),
        ];
    }
}
