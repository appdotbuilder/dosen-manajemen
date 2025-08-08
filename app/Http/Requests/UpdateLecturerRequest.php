<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLecturerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'nidn' => 'nullable|string|max:20|unique:lecturers,nidn,' . $this->route('lecturer')->id,
            'nuptk' => 'nullable|string|max:20|unique:lecturers,nuptk,' . $this->route('lecturer')->id,
            'study_program' => 'required|string|max:255',
            'education_level' => 'required|in:S1,S2,S3',
            'education_institution' => 'nullable|string|max:255',
            'education_major' => 'nullable|string|max:255',
            'education_year' => 'nullable|integer|min:1970|max:' . date('Y'),
            'functional_position' => 'nullable|in:Asisten Ahli,Lektor,Lektor Kepala,Profesor',
            'rank' => 'nullable|string|max:100',
            'status' => 'required|in:Tetap,Tidak Tetap,Kontrak',
            'teaching_subjects' => 'nullable|string',
            'publications' => 'nullable|string',
            'community_service' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|unique:lecturers,email,' . $this->route('lecturer')->id,
            'address' => 'nullable|string',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Nama dosen wajib diisi.',
            'nidn.unique' => 'NIDN sudah terdaftar pada dosen lain.',
            'nuptk.unique' => 'NUPTK sudah terdaftar pada dosen lain.',
            'study_program.required' => 'Program studi wajib diisi.',
            'education_level.required' => 'Jenjang pendidikan wajib dipilih.',
            'education_level.in' => 'Jenjang pendidikan harus salah satu dari: S1, S2, S3.',
            'functional_position.in' => 'Jabatan fungsional tidak valid.',
            'status.required' => 'Status dosen wajib dipilih.',
            'status.in' => 'Status dosen harus salah satu dari: Tetap, Tidak Tetap, Kontrak.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email sudah terdaftar pada dosen lain.',
            'education_year.min' => 'Tahun lulus tidak valid.',
            'education_year.max' => 'Tahun lulus tidak boleh melebihi tahun saat ini.',
        ];
    }
}