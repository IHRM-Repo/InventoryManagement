<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\StoreItemCategory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SubCategory>
 */
class SubCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'category_id' => StoreItemCategory::factory(),
           'sub_category' => fake()->randomElement(['laptop', 'phone', 'chair', 'table', 'printer']),
        ];
    }
}
