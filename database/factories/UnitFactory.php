<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Unit>
 */
class UnitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'unit' => fake()->randomElement(['kilograms', 'grams', 'rims', 'millilitres', 'litres']),
            'unit_size' => fake()->randomNumber(2, true),
        ];
    }
}
