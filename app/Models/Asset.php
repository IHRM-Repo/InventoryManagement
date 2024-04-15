<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    public $fillable = ['item_name', 'serial_no', 'purchase_price', 'depreciation_rate', 'returnable', 'quantity', 'unit_id', 'category_id', 'description', 'condition', 'asset_code', 'acquired'];

    public $timestamps = false;

    /**    
     * Get all of the assetDates associated with the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function assetDate(): HasMany
    {
        return $this->hasMany(AssetDate::class);
    }

    /**
     * Get all of the locations for the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function location(): HasMany
    {
        return $this->hasMany(Location::class);
    }    

    /**    
     * Get the unit associated with the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function unit():HasOne
    {
        return $this->hasOne(Unit::class);
    }

    /**    
     * Get the category associated with the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function category(): HasOne
    {
        return $this->hasOne(Category::class);
    }
}
