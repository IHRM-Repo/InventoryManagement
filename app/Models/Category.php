<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public $fillable = ['category_name'];

    public $timestamps = false;

    /**
     * Get the asset associated with the Category
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the subCategory associated with the Category
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function subCategory(): HasOne
    {
        return $this->hasOne(SubCategory::class);
    }
}
