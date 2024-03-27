<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreItemCategory extends Model
{
    use HasFactory;

    protected $fillable = ['category_name','store_item_id','sub_category_name'];
    protected $guarded = ['id'];

    public function storeItem(): HasOne
    {
        return $this->hasOne(StoreItem::class);
    }

    public $timestamps = false;
}
