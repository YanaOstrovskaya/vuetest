<?php

use Faker\Generator as Faker;

$factory->define(App\Citation::class, function (Faker $faker) {
    return [
        'author' => $faker->name,
        'quote' => $faker->text($maxNbChars = 200)
    ];
});
