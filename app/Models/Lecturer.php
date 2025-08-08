<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Lecturer
 *
 * @property int $id
 * @property string $name
 * @property string|null $nidn
 * @property string|null $nuptk
 * @property string $study_program
 * @property string $education_level
 * @property string|null $education_institution
 * @property string|null $education_major
 * @property int|null $education_year
 * @property string|null $functional_position
 * @property string|null $rank
 * @property string $status
 * @property string|null $teaching_subjects
 * @property string|null $publications
 * @property string|null $community_service
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $address
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer query()
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereCommunityService($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereEducationInstitution($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereEducationLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereEducationMajor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereEducationYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereFunctionalPosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereNidn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereNuptk($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer wherePublications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereRank($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereStudyProgram($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereTeachingSubjects($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lecturer active()
 * @method static \Database\Factories\LecturerFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Lecturer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'nidn',
        'nuptk',
        'study_program',
        'education_level',
        'education_institution',
        'education_major',
        'education_year',
        'functional_position',
        'rank',
        'status',
        'teaching_subjects',
        'publications',
        'community_service',
        'phone',
        'email',
        'address',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'education_year' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active lecturers.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'Tetap');
    }

    /**
     * Scope a query to filter by study program.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $program
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByStudyProgram($query, $program)
    {
        return $query->where('study_program', $program);
    }

    /**
     * Scope a query to filter by functional position.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $position
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByFunctionalPosition($query, $position)
    {
        return $query->where('functional_position', $position);
    }

    /**
     * Get the lecturer's full identification.
     *
     * @return string
     */
    public function getFullIdentificationAttribute()
    {
        $ids = array_filter([$this->nidn, $this->nuptk]);
        return empty($ids) ? 'No ID' : implode(' / ', $ids);
    }
}