<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Model;

class StoreItem extends Model
{
    use HasFactory;

    protected $fillable = ['serial_no','item_name','asset_code','category', 'location', 'acquired'];
    protected $guarded = ['id'];
    
    public function storeItemDates(): HasMany
    {
        return $this->hasMany(StoreItemDates::class);
    }

    public function storeItemUnits(): HasOne
    {
        return $this->hasOne(Unit::class);
    }
    
    public $timestamps = false;
}
