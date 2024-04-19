<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class AssetDate extends Model
{
    use HasFactory;
    public $fillable = ['delivery_date', 'asset_id', 'issue_date', 'return_date', 'remarks', 'issue_amount', 'issued_to'];
    
    public $timestamps = false;

    /**    
     * Get the asset associated with the AssetDate
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }
}
