<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Asset;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AssetDate>
 */
class AssetDateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'purchase_date' => fake()->dateTimeBetween('-2 week', '+2 week'),
            'asset_id' => Asset::factory(),
            'issue_date' => fake()->dateTimeBetween('-2 week', '+2 week'),
            'return_date' => fake()->dateTimeBetween('-1 week', '+1 week'),
            'remarks' => fake()->sentence(),
            'issue_amount' => fake()->randomDigitNotNull(),
            'issued_to' => fake()->name(),            
        ];
    }
}
