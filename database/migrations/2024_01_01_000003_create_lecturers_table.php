<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lecturers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Full name of the lecturer');
            $table->string('nidn')->unique()->nullable()->comment('Nomor Induk Dosen Nasional');
            $table->string('nuptk')->unique()->nullable()->comment('Nomor Unik Pendidik dan Tenaga Kependidikan');
            $table->string('study_program')->comment('Program studi/jurusan');
            $table->enum('education_level', ['S1', 'S2', 'S3'])->comment('Highest education level');
            $table->string('education_institution')->nullable()->comment('Institution where highest degree was obtained');
            $table->string('education_major')->nullable()->comment('Major/field of study');
            $table->year('education_year')->nullable()->comment('Year of graduation');
            $table->enum('functional_position', ['Asisten Ahli', 'Lektor', 'Lektor Kepala', 'Profesor'])->nullable()->comment('Jabatan fungsional');
            $table->string('rank')->nullable()->comment('Kepangkatan/golongan');
            $table->enum('status', ['Tetap', 'Tidak Tetap', 'Kontrak'])->default('Tetap')->comment('Employment status');
            $table->text('teaching_subjects')->nullable()->comment('Mata kuliah yang diajar');
            $table->text('publications')->nullable()->comment('List of publications');
            $table->text('community_service')->nullable()->comment('Pengabdian kepada masyarakat');
            $table->string('phone')->nullable()->comment('Phone number');
            $table->string('email')->unique()->nullable()->comment('Email address');
            $table->text('address')->nullable()->comment('Full address');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('name');
            $table->index('nidn');
            $table->index('nuptk');
            $table->index('study_program');
            $table->index('education_level');
            $table->index('functional_position');
            $table->index('status');
            $table->index(['status', 'study_program']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lecturers');
    }
};