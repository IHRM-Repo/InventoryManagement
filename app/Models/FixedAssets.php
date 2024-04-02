<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FixedAssets extends Model
{
    use HasFactory;

    protected $fillable = ['asset_id','location', 'serial_no', 'purchase_price', 'depreciation_rate', 'condition', 'asset_code', 'sub_category', 'acquired', 'quantity'];
    
    protected $guarded = ['id'];
    public $timestamps = false;
}
