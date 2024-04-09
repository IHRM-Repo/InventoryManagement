<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;
    protected $fillable = ['unit','unit_size'];
    protected $guarded = ['id'];

    public function liquidAsset(): HasOne
    {
        return $this->hasOne(LiquidAsset::class);
    }

    public function storeItemDates(): HasOne
    {
        return $this->hasOne(StoreItemDates::class);
    }
    
    public $timestamps = false;
}
