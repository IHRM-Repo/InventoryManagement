<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class LiquidAssets extends Model
{
    use HasFactory;
    protected $fillable = ['item_name','category_id', 'unit_id', 'quantity'];
    
    protected $guarded = ['id'];
    public $timestamps = false;

    public function storeItemDates():hasMany
    {
       return $this->hasMany(StoreItemDates::class, 'asset_id'); 
    }

    public function storeItemCategory(): BelongsTo
    {
        return $this->belongsTo(StoreItemCategory::class, 'category_id');
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
}
