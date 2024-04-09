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
       return $this->hasMany(StoreItemDates::class); 
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class);
    }
}
