<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    public $fillable = ['location_name', 'description', 'asset_id'];

    public $timestamps = false;

    /**
     * Get the asset associated with the Location
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }
}
