<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class FixedAssets extends Model
{
    use HasFactory;

    protected $fillable = ['item_name', 'location', 'description', 'serial_no', 'purchase_price', 'depreciation_rate', 'condition', 'asset_code', 'acquired', 'quantity', 'category_id'];
    
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
}
