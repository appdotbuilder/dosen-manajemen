<?php

namespace Database\Factories;

use App\Models\Lecturer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lecturer>
 */
class LecturerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Lecturer>
     */
    protected $model = Lecturer::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $studyPrograms = [
            'Teknik Informatika',
            'Sistem Informasi',
            'Teknik Elektro',
            'Teknik Mesin',
            'Teknik Sipil',
            'Manajemen',
            'Akuntansi',
            'Ekonomi',
            'Hukum',
            'Psikologi',
            'Kedokteran',
            'Keperawatan',
            'Farmasi',
            'Pendidikan Matematika',
            'Pendidikan Bahasa Inggris'
        ];

        $institutions = [
            'Universitas Indonesia',
            'Institut Teknologi Bandung',
            'Universitas Gadjah Mada',
            'Institut Teknologi Sepuluh Nopember',
            'Universitas Airlangga',
            'Universitas Padjadjaran',
            'Universitas Diponegoro',
            'Universitas Brawijaya',
            'Universitas Sebelas Maret',
            'Universitas Hasanuddin'
        ];

        $majors = [
            'Teknik Informatika',
            'Ilmu Komputer',
            'Sistem Informasi',
            'Teknik Elektro',
            'Teknik Mesin',
            'Manajemen',
            'Ekonomi',
            'Matematika',
            'Fisika',
            'Kimia',
            'Pendidikan'
        ];

        return [
            'name' => $this->faker->name(),
            'nidn' => $this->faker->optional(0.8)->numerify('##########'),
            'nuptk' => $this->faker->optional(0.6)->numerify('################'),
            'study_program' => $this->faker->randomElement($studyPrograms),
            'education_level' => $this->faker->randomElement(['S1', 'S2', 'S3']),
            'education_institution' => $this->faker->randomElement($institutions),
            'education_major' => $this->faker->randomElement($majors),
            'education_year' => $this->faker->numberBetween(1990, 2023),
            'functional_position' => $this->faker->optional(0.7)->randomElement(['Asisten Ahli', 'Lektor', 'Lektor Kepala', 'Profesor']),
            'rank' => $this->faker->optional(0.6)->randomElement(['III/a', 'III/b', 'III/c', 'III/d', 'IV/a', 'IV/b', 'IV/c', 'IV/d', 'IV/e']),
            'status' => $this->faker->randomElement(['Tetap', 'Tidak Tetap', 'Kontrak']),
            'teaching_subjects' => $this->faker->optional(0.8)->sentences(3, true),
            'publications' => $this->faker->optional(0.6)->sentences(2, true),
            'community_service' => $this->faker->optional(0.7)->sentences(2, true),
            'phone' => $this->faker->optional(0.8)->phoneNumber(),
            'email' => $this->faker->optional(0.9)->safeEmail(),
            'address' => $this->faker->optional(0.7)->address(),
        ];
    }
}