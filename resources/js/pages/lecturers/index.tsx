import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Filter, GraduationCap, Users, Award, BookOpen } from 'lucide-react';

interface Lecturer {
    id: number;
    name: string;
    nidn: string | null;
    nuptk: string | null;
    study_program: string;
    education_level: string;
    education_institution: string | null;
    education_year: number | null;
    functional_position: string | null;
    status: string;
    phone: string | null;
    email: string | null;
    teaching_subjects: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface Props {
    lecturers: {
        data: Lecturer[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    filters: {
        search?: string;
        study_program?: string;
        status?: string;
        functional_position?: string;
        education_level?: string;
    };
    studyPrograms: string[];
    functionalPositions: string[];
    [key: string]: unknown;
}

export default function LecturersIndex({ lecturers, filters, studyPrograms, functionalPositions }: Props) {
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [showFilters, setShowFilters] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route('lecturers.index'), {
            ...filters,
            search: searchTerm,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleFilter = (key: string, value: string) => {
        router.get(route('lecturers.index'), {
            ...filters,
            [key]: value === 'all' ? '' : value,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        router.get(route('lecturers.index'));
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Tetap':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Tidak Tetap':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Kontrak':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getFunctionalPositionColor = (position: string | null) => {
        if (!position) return 'bg-gray-100 text-gray-800 border-gray-200';
        switch (position) {
            case 'Profesor':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'Lektor Kepala':
                return 'bg-indigo-100 text-indigo-800 border-indigo-200';
            case 'Lektor':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Asisten Ahli':
                return 'bg-cyan-100 text-cyan-800 border-cyan-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <AppShell>
            <div className="p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">👨‍🏫 Data Dosen</h1>
                        <p className="text-gray-600 mt-1">
                            Kelola data lengkap dosen perguruan tinggi
                        </p>
                    </div>
                    <Button 
                        onClick={() => router.visit(route('lecturers.create'))}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Tambah Dosen
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Card>
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Dosen</p>
                                <p className="text-2xl font-bold text-gray-900">{lecturers.total}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                                <Award className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Dosen Tetap</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {lecturers.data.filter(l => l.status === 'Tetap').length}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                                <GraduationCap className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Program Studi</p>
                                <p className="text-2xl font-bold text-gray-900">{studyPrograms.length}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mr-4">
                                <BookOpen className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Profesor</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {lecturers.data.filter(l => l.functional_position === 'Profesor').length}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Search and Filters */}
                <Card className="mb-6">
                    <CardContent className="p-6">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    type="text"
                                    placeholder="Cari nama, NIDN, NUPTK, atau program studi..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Button type="submit">
                                <Search className="w-4 h-4 mr-2" />
                                Cari
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <Filter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                        </form>

                        {showFilters && (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
                                <Select value={filters.study_program || 'all'} onValueChange={(value) => handleFilter('study_program', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Program Studi" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Semua Program Studi</SelectItem>
                                        {studyPrograms.map((program) => (
                                            <SelectItem key={program} value={program}>
                                                {program}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select value={filters.status || 'all'} onValueChange={(value) => handleFilter('status', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Semua Status</SelectItem>
                                        <SelectItem value="Tetap">Tetap</SelectItem>
                                        <SelectItem value="Tidak Tetap">Tidak Tetap</SelectItem>
                                        <SelectItem value="Kontrak">Kontrak</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select value={filters.functional_position || 'all'} onValueChange={(value) => handleFilter('functional_position', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Jabatan Fungsional" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Semua Jabatan</SelectItem>
                                        {functionalPositions.map((position) => (
                                            <SelectItem key={position} value={position}>
                                                {position}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select value={filters.education_level || 'all'} onValueChange={(value) => handleFilter('education_level', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pendidikan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Semua Pendidikan</SelectItem>
                                        <SelectItem value="S1">S1</SelectItem>
                                        <SelectItem value="S2">S2</SelectItem>
                                        <SelectItem value="S3">S3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        {Object.values(filters).some(f => f) && (
                            <div className="flex justify-end pt-4 border-t mt-4">
                                <Button variant="outline" size="sm" onClick={clearFilters}>
                                    Hapus Filter
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Lecturers Grid */}
                {lecturers.data.length === 0 ? (
                    <Card>
                        <CardContent className="text-center py-12">
                            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Tidak ada data dosen
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {filters.search || Object.values(filters).some(f => f) 
                                    ? 'Tidak ditemukan dosen dengan kriteria tersebut.'
                                    : 'Belum ada data dosen yang tersimpan.'
                                }
                            </p>
                            <Button onClick={() => router.visit(route('lecturers.create'))}>
                                <Plus className="w-4 h-4 mr-2" />
                                Tambah Dosen Pertama
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lecturers.data.map((lecturer) => (
                            <Card key={lecturer.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                                  onClick={() => router.visit(route('lecturers.show', lecturer.id))}>
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                                        {lecturer.name}
                                    </CardTitle>
                                    <div className="flex gap-2 mt-2">
                                        <Badge className={getStatusColor(lecturer.status)}>
                                            {lecturer.status}
                                        </Badge>
                                        {lecturer.functional_position && (
                                            <Badge className={getFunctionalPositionColor(lecturer.functional_position)}>
                                                {lecturer.functional_position}
                                            </Badge>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center text-gray-600">
                                            <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                                            <span className="line-clamp-1">{lecturer.study_program}</span>
                                        </div>
                                        {lecturer.nidn && (
                                            <div className="flex items-center text-gray-600">
                                                <span className="w-4 h-4 mr-2 flex-shrink-0 text-xs font-mono">ID</span>
                                                <span className="font-mono text-xs">NIDN: {lecturer.nidn}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center text-gray-600">
                                            <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
                                            <span>{lecturer.education_level}</span>
                                            {lecturer.education_institution && (
                                                <span className="text-gray-400"> • {lecturer.education_institution}</span>
                                            )}
                                        </div>
                                        {lecturer.email && (
                                            <div className="flex items-center text-gray-600">
                                                <span className="w-4 h-4 mr-2 flex-shrink-0">✉️</span>
                                                <span className="line-clamp-1 text-xs">{lecturer.email}</span>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {lecturers.last_page > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-8">
                        {Array.from({ length: lecturers.last_page }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={page === lecturers.current_page ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => router.get(route('lecturers.index'), { ...filters, page })}
                            >
                                {page}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </AppShell>
    );
}