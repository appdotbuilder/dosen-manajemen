import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';
import { 
    Users, 
    GraduationCap, 
    Award, 
    BookOpen, 
    Plus, 
    Search,
    TrendingUp,
    Mail
} from 'lucide-react';

export default function Dashboard() {
    return (
        <AppShell>
            <div className="p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">👋 Dashboard</h1>
                        <p className="text-gray-600 mt-1">
                            Selamat datang di sistem manajemen dosen
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

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Dosen</p>
                                <p className="text-2xl font-bold text-gray-900">27</p>
                                <p className="text-xs text-green-600 flex items-center mt-1">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    +5 bulan ini
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                                <Award className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Dosen Tetap</p>
                                <p className="text-2xl font-bold text-gray-900">20</p>
                                <p className="text-xs text-gray-500 mt-1">74% dari total</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                                <GraduationCap className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Program Studi</p>
                                <p className="text-2xl font-bold text-gray-900">15</p>
                                <p className="text-xs text-blue-600 mt-1">Aktif semua</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="flex items-center p-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mr-4">
                                <BookOpen className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Profesor</p>
                                <p className="text-2xl font-bold text-gray-900">2</p>
                                <p className="text-xs text-gray-500 mt-1">7% dari total</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Plus className="w-5 h-5 mr-2" />
                                    Aksi Cepat
                                </CardTitle>
                                <CardDescription>
                                    Kelola data dosen dengan mudah
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Button 
                                        variant="outline" 
                                        className="h-auto p-4 flex flex-col items-start text-left"
                                        onClick={() => router.visit(route('lecturers.create'))}
                                    >
                                        <div className="flex items-center w-full mb-2">
                                            <Plus className="w-5 h-5 text-blue-600 mr-2" />
                                            <span className="font-semibold">Tambah Dosen</span>
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            Daftarkan dosen baru dengan data lengkap
                                        </span>
                                    </Button>

                                    <Button 
                                        variant="outline" 
                                        className="h-auto p-4 flex flex-col items-start text-left"
                                        onClick={() => router.visit(route('lecturers.index'))}
                                    >
                                        <div className="flex items-center w-full mb-2">
                                            <Search className="w-5 h-5 text-green-600 mr-2" />
                                            <span className="font-semibold">Lihat Semua</span>
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            Jelajahi database dosen yang tersimpan
                                        </span>
                                    </Button>

                                    <Button 
                                        variant="outline" 
                                        className="h-auto p-4 flex flex-col items-start text-left"
                                        onClick={() => router.visit(route('lecturers.index', { status: 'Tetap' }))}
                                    >
                                        <div className="flex items-center w-full mb-2">
                                            <Award className="w-5 h-5 text-purple-600 mr-2" />
                                            <span className="font-semibold">Dosen Tetap</span>
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            Filter dosen berdasarkan status kepegawaian
                                        </span>
                                    </Button>

                                    <Button 
                                        variant="outline" 
                                        className="h-auto p-4 flex flex-col items-start text-left"
                                        onClick={() => router.visit(route('lecturers.index', { functional_position: 'Profesor' }))}
                                    >
                                        <div className="flex items-center w-full mb-2">
                                            <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                                            <span className="font-semibold">Profesor</span>
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            Lihat dosen dengan jabatan fungsional tertinggi
                                        </span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* System Features */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2" />
                                    Fitur Sistem
                                </CardTitle>
                                <CardDescription>
                                    Apa yang bisa Anda lakukan dengan DosenKu
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Users className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Data Lengkap</h4>
                                            <p className="text-sm text-gray-600">
                                                NIDN, NUPTK, riwayat pendidikan, jabatan fungsional
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <Search className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Pencarian Canggih</h4>
                                            <p className="text-sm text-gray-600">
                                                Cari berdasarkan nama, NIDN, atau program studi
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-purple-50 border border-purple-100">
                                        <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <BookOpen className="w-4 h-4 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Aktivitas Akademik</h4>
                                            <p className="text-sm text-gray-600">
                                                Mata kuliah, publikasi, pengabdian masyarakat
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                            <Mail className="w-4 h-4 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Kontak Lengkap</h4>
                                            <p className="text-sm text-gray-600">
                                                Email, telepon, alamat untuk komunikasi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Status Distribution */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">📊 Distribusi Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <Badge className="bg-green-100 text-green-800 border-green-200">
                                                Tetap
                                            </Badge>
                                            <span className="text-sm text-gray-600">74%</span>
                                        </div>
                                        <span className="text-sm font-medium">20 dosen</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                                Tidak Tetap
                                            </Badge>
                                            <span className="text-sm text-gray-600">19%</span>
                                        </div>
                                        <span className="text-sm font-medium">5 dosen</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                                Kontrak
                                            </Badge>
                                            <span className="text-sm text-gray-600">7%</span>
                                        </div>
                                        <span className="text-sm font-medium">2 dosen</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Functional Positions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">🎓 Jabatan Fungsional</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                                            Profesor
                                        </Badge>
                                        <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">
                                            Lektor Kepala
                                        </Badge>
                                        <span className="text-sm font-medium">5</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                            Lektor
                                        </Badge>
                                        <span className="text-sm font-medium">8</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">
                                            Asisten Ahli
                                        </Badge>
                                        <span className="text-sm font-medium">7</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                                            Belum Ada
                                        </Badge>
                                        <span className="text-sm font-medium">5</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">⏰ Aktivitas Terbaru</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-gray-900">Dr. Ahmad Wijaya ditambahkan</p>
                                            <p className="text-gray-500 text-xs">2 jam yang lalu</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-gray-900">Prof. Siti Nurhaliza diperbarui</p>
                                            <p className="text-gray-500 text-xs">5 jam yang lalu</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-gray-900">Data publikasi diupdate</p>
                                            <p className="text-gray-500 text-xs">1 hari yang lalu</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-gray-900">5 dosen baru ditambahkan</p>
                                            <p className="text-gray-500 text-xs">3 hari yang lalu</p>
                                        </div>
                                    </div>
                                </div>
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="w-full mt-4"
                                    onClick={() => router.visit(route('lecturers.index'))}
                                >
                                    Lihat Semua Data
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}