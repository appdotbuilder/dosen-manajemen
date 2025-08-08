<?php

namespace Database\Seeders;

use App\Models\Lecturer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LecturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample lecturers with realistic Indonesian data
        Lecturer::factory()->count(25)->create();

        // Create some specific example lecturers
        Lecturer::create([
            'name' => 'Dr. Ahmad Wijaya, S.Kom., M.T.',
            'nidn' => '0123456789',
            'nuptk' => '1234567890123456',
            'study_program' => 'Teknik Informatika',
            'education_level' => 'S3',
            'education_institution' => 'Institut Teknologi Bandung',
            'education_major' => 'Teknik Informatika',
            'education_year' => 2018,
            'functional_position' => 'Lektor',
            'rank' => 'III/c',
            'status' => 'Tetap',
            'teaching_subjects' => 'Pemrograman Web, Basis Data, Sistem Informasi Manajemen',
            'publications' => 'Pengembangan Sistem E-Learning Berbasis Web (2022), Implementasi Machine Learning untuk Prediksi Nilai Mahasiswa (2021)',
            'community_service' => 'Pelatihan Website untuk UMKM (2023), Workshop Literasi Digital untuk Guru (2022)',
            'phone' => '08123456789',
            'email' => 'ahmad.wijaya@university.ac.id',
            'address' => 'Jl. Merdeka No. 123, Jakarta Pusat',
        ]);

        Lecturer::create([
            'name' => 'Prof. Dr. Siti Nurhaliza, S.E., M.M.',
            'nidn' => '0987654321',
            'study_program' => 'Manajemen',
            'education_level' => 'S3',
            'education_institution' => 'Universitas Indonesia',
            'education_major' => 'Manajemen',
            'education_year' => 2015,
            'functional_position' => 'Profesor',
            'rank' => 'IV/b',
            'status' => 'Tetap',
            'teaching_subjects' => 'Manajemen Strategis, Kepemimpinan, Manajemen SDM',
            'publications' => 'Strategic Management in Digital Era (2023), Leadership Development in Indonesian Context (2021)',
            'community_service' => 'Konsultan Strategi Bisnis UMKM (2023), Pelatihan Kepemimpinan untuk Kepala Desa (2022)',
            'phone' => '08987654321',
            'email' => 'siti.nurhaliza@university.ac.id',
            'address' => 'Jl. Sudirman No. 456, Jakarta Selatan',
        ]);
    }
}