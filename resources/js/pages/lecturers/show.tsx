import React from 'react';
import { router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Edit, Trash2, ArrowLeft, GraduationCap, User, Mail, Phone, MapPin, BookOpen, Award, Users } from 'lucide-react';

interface Lecturer {
    id: number;
    name: string;
    nidn: string | null;
    nuptk: string | null;
    study_program: string;
    education_level: string;
    education_institution: string | null;
    education_major: string | null;
    education_year: number | null;
    functional_position: string | null;
    rank: string | null;
    status: string;
    teaching_subjects: string | null;
    publications: string | null;
    community_service: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface Props {
    lecturer: Lecturer;
    [key: string]: unknown;
}

export default function LecturerShow({ lecturer }: Props) {
    const handleDelete = () => {
        if (confirm('Apakah Anda yakin ingin menghapus data dosen ini?')) {
            router.delete(route('lecturers.destroy', lecturer.id), {
                onSuccess: () => {
                    router.visit(route('lecturers.index'));
                }
            });
        }
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
                    <div className="flex items-center space-x-4">
                        <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => router.visit(route('lecturers.index'))}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Kembali
                        </Button>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">👨‍🏫 Detail Dosen</h1>
                            <p className="text-gray-600 mt-1">
                                Informasi lengkap data dosen
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Button 
                            variant="outline"
                            onClick={() => router.visit(route('lecturers.edit', lecturer.id))}
                        >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                        </Button>
                        <Button 
                            variant="destructive"
                            onClick={handleDelete}
                        >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Hapus
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <User className="w-5 h-5 mr-2" />
                                    Informasi Dasar
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            {lecturer.name}
                                        </h2>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className={getStatusColor(lecturer.status)}>
                                                {lecturer.status}
                                            </Badge>
                                            {lecturer.functional_position && (
                                                <Badge className={getFunctionalPositionColor(lecturer.functional_position)}>
                                                    {lecturer.functional_position}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {lecturer.nidn && (
                                            <div>
                                                <label className="text-sm font-medium text-gray-600">NIDN</label>
                                                <p className="text-gray-900 font-mono">{lecturer.nidn}</p>
                                            </div>
                                        )}
                                        {lecturer.nuptk && (
                                            <div>
                                                <label className="text-sm font-medium text-gray-600">NUPTK</label>
                                                <p className="text-gray-900 font-mono">{lecturer.nuptk}</p>
                                            </div>
                                        )}
                                        <div>
                                            <label className="text-sm font-medium text-gray-600">Program Studi</label>
                                            <p className="text-gray-900">{lecturer.study_program}</p>
                                        </div>
                                        {lecturer.rank && (
                                            <div>
                                                <label className="text-sm font-medium text-gray-600">Kepangkatan</label>
                                                <p className="text-gray-900">{lecturer.rank}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Education */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <GraduationCap className="w-5 h-5 mr-2" />
                                    Riwayat Pendidikan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <GraduationCap className="w-5 h-5 text-blue-600" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className="font-semibold text-gray-900">
                                                    {lecturer.education_level}
                                                </span>
                                                {lecturer.education_year && (
                                                    <Badge variant="secondary">
                                                        {lecturer.education_year}
                                                    </Badge>
                                                )}
                                            </div>
                                            {lecturer.education_major && (
                                                <p className="text-gray-600 text-sm mb-1">
                                                    {lecturer.education_major}
                                                </p>
                                            )}
                                            {lecturer.education_institution && (
                                                <p className="text-gray-500 text-sm">
                                                    {lecturer.education_institution}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Teaching & Research */}
                        {(lecturer.teaching_subjects || lecturer.publications || lecturer.community_service) && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        Aktivitas Akademik
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {lecturer.teaching_subjects && (
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">📚 Mata Kuliah yang Diajar</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {lecturer.teaching_subjects}
                                            </p>
                                        </div>
                                    )}

                                    {lecturer.publications && (
                                        <>
                                            <Separator />
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">📝 Publikasi</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {lecturer.publications}
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {lecturer.community_service && (
                                        <>
                                            <Separator />
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">🤝 Pengabdian Masyarakat</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {lecturer.community_service}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Right Column - Contact & Additional Info */}
                    <div className="space-y-6">
                        {/* Contact Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Informasi Kontak
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {lecturer.email && (
                                    <div className="flex items-start space-x-3">
                                        <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Email</p>
                                            <a href={`mailto:${lecturer.email}`} 
                                               className="text-blue-600 hover:text-blue-800 text-sm break-all">
                                                {lecturer.email}
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {lecturer.phone && (
                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Telepon</p>
                                            <a href={`tel:${lecturer.phone}`} 
                                               className="text-blue-600 hover:text-blue-800 text-sm">
                                                {lecturer.phone}
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {lecturer.address && (
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Alamat</p>
                                            <p className="text-gray-900 text-sm leading-relaxed">
                                                {lecturer.address}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {!lecturer.email && !lecturer.phone && !lecturer.address && (
                                    <p className="text-gray-500 text-sm italic">
                                        Informasi kontak tidak tersedia
                                    </p>
                                )}
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Award className="w-5 h-5 mr-2" />
                                    Aksi Cepat
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-start"
                                    onClick={() => router.visit(route('lecturers.edit', lecturer.id))}
                                >
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Data Dosen
                                </Button>
                                
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-start"
                                    onClick={() => router.visit(route('lecturers.index', { 
                                        study_program: lecturer.study_program 
                                    }))}
                                >
                                    <Users className="w-4 h-4 mr-2" />
                                    Lihat Dosen Se-Prodi
                                </Button>

                                {lecturer.functional_position && (
                                    <Button 
                                        variant="outline" 
                                        className="w-full justify-start"
                                        onClick={() => router.visit(route('lecturers.index', { 
                                            functional_position: lecturer.functional_position 
                                        }))}
                                    >
                                        <Award className="w-4 h-4 mr-2" />
                                        Lihat {lecturer.functional_position} Lain
                                    </Button>
                                )}
                            </CardContent>
                        </Card>

                        {/* Metadata */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="text-xs text-gray-500 space-y-1">
                                    <p>Dibuat: {new Date(lecturer.created_at).toLocaleDateString('id-ID', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</p>
                                    <p>Diperbarui: {new Date(lecturer.updated_at).toLocaleDateString('id-ID', {
                                        year: 'numeric',
                                        month: 'long', 
                                        day: 'numeric'
                                    })}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}