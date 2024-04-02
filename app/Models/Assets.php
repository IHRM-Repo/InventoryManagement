<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assets extends Model
{
    use HasFactory;
    protected $fillable = ['item_name','category_id', 'location', 'asset_type'];
    
    protected $guarded = ['id'];
    public $timestamps = false;
}
