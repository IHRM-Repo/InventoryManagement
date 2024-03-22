<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;
    protected $fillable = ['unit','unit_size', 'store_item_id'];
    protected $guarded = ['id'];

    public function storeItem(): HasOne
    {
        return $this->hasOne(StoreItem::class);
    }
    
    public $timestamps = false;
}
