<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\FixedAssets;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StoreItemDates>
 */
class StoreItemDatesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'delivery_date' => fake()->dateTimeBetween('-2 week', '+1 week'),
            'return_date' => fake()->dateTimeBetween('-2 week', '+1 week'),
            'issue_date' => fake()->dateTimeBetween('-2 week', '+1 week'),
            'issued_to' => fake()->name(),
            'issue_amount' => fake()->randomNumber(2, true),
            'returned_by' => fake()->name(), 
            'remarks' => fake()->text(30),
            'asset_id' => FixedAssets::factory(),
        ];
    }
}
