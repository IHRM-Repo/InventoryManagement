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
            'delivery_date' =>  fake()->dateTimeThisDecade(),
            'asset_id'      =>  Asset::factory(),
            'issue_date'    =>  fake()->dateTimeThisDecade(),
            'return_date'   =>  fake()->dateTimeThisDecade(),
            'remarks'       =>  fake()->sentence(),
            'issue_amount'  =>  fake()->randomDigitNotNull(),
            'returned_by'   =>  fake()->name(),
            'issued_to'     =>  fake()->name(),            
        ];
    }
}
