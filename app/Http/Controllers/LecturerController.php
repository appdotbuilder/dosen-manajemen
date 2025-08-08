<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLecturerRequest;
use App\Http\Requests\UpdateLecturerRequest;
use App\Models\Lecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LecturerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Lecturer::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('nidn', 'like', "%{$search}%")
                  ->orWhere('nuptk', 'like', "%{$search}%")
                  ->orWhere('study_program', 'like', "%{$search}%");
            });
        }

        // Filter by study program
        if ($request->filled('study_program')) {
            $query->where('study_program', $request->study_program);
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Filter by functional position
        if ($request->filled('functional_position')) {
            $query->where('functional_position', $request->functional_position);
        }

        // Filter by education level
        if ($request->filled('education_level')) {
            $query->where('education_level', $request->education_level);
        }

        $lecturers = $query->latest()->paginate(12)->withQueryString();

        // Get unique values for filters
        $studyPrograms = Lecturer::distinct()->pluck('study_program')->sort()->values();
        $functionalPositions = ['Asisten Ahli', 'Lektor', 'Lektor Kepala', 'Profesor'];

        return Inertia::render('lecturers/index', [
            'lecturers' => $lecturers,
            'filters' => [
                'search' => $request->search,
                'study_program' => $request->study_program,
                'status' => $request->status,
                'functional_position' => $request->functional_position,
                'education_level' => $request->education_level,
            ],
            'studyPrograms' => $studyPrograms,
            'functionalPositions' => $functionalPositions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('lecturers/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLecturerRequest $request)
    {
        $lecturer = Lecturer::create($request->validated());

        return redirect()->route('lecturers.show', $lecturer)
            ->with('success', 'Data dosen berhasil disimpan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Lecturer $lecturer)
    {
        return Inertia::render('lecturers/show', [
            'lecturer' => $lecturer
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lecturer $lecturer)
    {
        return Inertia::render('lecturers/edit', [
            'lecturer' => $lecturer
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLecturerRequest $request, Lecturer $lecturer)
    {
        $lecturer->update($request->validated());

        return redirect()->route('lecturers.show', $lecturer)
            ->with('success', 'Data dosen berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lecturer $lecturer)
    {
        $lecturer->delete();

        return redirect()->route('lecturers.index')
            ->with('success', 'Data dosen berhasil dihapus.');
    }
}