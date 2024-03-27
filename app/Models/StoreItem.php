<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Model;

class StoreItem extends Model
{
    use HasFactory;

    protected $fillable = ['serial_no','item_name','asset_code','category', 'location', 'acquired', 'quantity', 'sub_category_name'];
    protected $attributes = [
        'acquired' => true,
    ];
    protected $guarded = ['id'];
    
    public function storeItemDates(): HasMany
    {
        return $this->hasMany(StoreItemDates::class);
    }

    public function storeItemCategory(): HasOne
    {
        return $this->hasOne(StoreItemCategory::class);
    }
    
    public $timestamps = false;
}
