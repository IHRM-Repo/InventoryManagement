<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
use App\Models\Unit;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asset>
 */
class AssetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'item_name'         =>  fake()->word(),
            'serial_no'         =>  fake()->regexify('[A-Z]{5}[0-4]{3}'),
            'purchase_price'    =>  fake()->randomNumber(),
            'depreciation_rate' =>  fake()->randomFloat(1, 20, 30),
            'returnable'        =>  fake()->boolean(),
            'quantity'          =>  fake()->randomDigitNotNull(),
            'unit_id'           =>  Unit::factory(),
            'category_id'       =>  Category::factory(),
            'description'       =>  fake()->sentence(),
            'condition'         =>  fake()->randomElement(['new', 'damaged', 'expired', 'used']),
            'asset_code'        =>  fake()->randomElement(['tangible', 'intangible']),
            'acquired'          =>  fake()->boolean(), 
        ];
    }
}
