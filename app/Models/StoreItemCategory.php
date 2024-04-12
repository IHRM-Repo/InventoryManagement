<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class StoreItemCategory extends Model
{
    use HasFactory;

    protected $fillable = ['category_name'];
    protected $guarded = ['id'];

    public function fixedAsset(): HasOne
    {
        return $this->hasOne(FixedAsset::class, 'category_id');
    }

    public function liquidAsset(): HasOne
    {
        return $this->hasOne(LiquidAsset::class, 'category_id');
    }

    public function subcategory(): HasMany
    {
        return $this->hasMany(SubCategory::class, 'category_id');
    }


    public $timestamps = false;
}
