import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';
import { 
    GraduationCap, 
    Users, 
    Search, 
    Award, 
    BookOpen, 
    Mail, 
    Database,
    Filter,
    PlusCircle,
    Edit3,
    Eye,
    CheckCircle
} from 'lucide-react';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">DosenKu</h1>
                                <p className="text-xs text-gray-600">Sistem Manajemen Dosen</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Button
                                variant="outline"
                                onClick={() => router.visit(route('login'))}
                                className="hidden sm:inline-flex"
                            >
                                Masuk
                            </Button>
                            <Button
                                onClick={() => router.visit(route('register'))}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                            >
                                Daftar Sekarang
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-200">
                            <GraduationCap className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">
                                Sistem Manajemen Dosen Perguruan Tinggi
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            👨‍🏫 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                DosenKu
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Platform terpadu untuk mengelola data lengkap dosen perguruan tinggi dengan fitur 
                            pencarian canggih, filtering komprehensif, dan manajemen informasi akademik.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={() => router.visit(route('register'))}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg"
                            >
                                <PlusCircle className="w-5 h-5 mr-2" />
                                Mulai Sekarang
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => router.visit(route('login'))}
                                className="px-8 py-4 text-lg border-gray-300"
                            >
                                <Eye className="w-5 h-5 mr-2" />
                                Lihat Demo
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-20 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>
            </section>

            {/* Features Overview */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            🚀 Fitur Unggulan
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Kelola data dosen dengan lebih efisien dan terorganisir
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <Card className="hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <Database className="w-6 h-6 text-blue-600" />
                                </div>
                                <CardTitle className="text-xl">Data Lengkap Dosen</CardTitle>
                                <CardDescription>
                                    Simpan informasi detail setiap dosen termasuk NIDN, NUPTK, riwayat pendidikan, dan jabatan fungsional
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs">NIDN/NUPTK</Badge>
                                    <Badge variant="secondary" className="text-xs">Riwayat Pendidikan</Badge>
                                    <Badge variant="secondary" className="text-xs">Jabatan Fungsional</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <Search className="w-6 h-6 text-purple-600" />
                                </div>
                                <CardTitle className="text-xl">Pencarian Canggih</CardTitle>
                                <CardDescription>
                                    Cari dosen berdasarkan nama, NIDN, NUPTK, atau program studi dengan hasil yang akurat dan cepat
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs">Multi-kriteria</Badge>
                                    <Badge variant="secondary" className="text-xs">Real-time</Badge>
                                    <Badge variant="secondary" className="text-xs">Hasil Akurat</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Filter className="w-6 h-6 text-green-600" />
                                </div>
                                <CardTitle className="text-xl">Filter Komprehensif</CardTitle>
                                <CardDescription>
                                    Saring data berdasarkan program studi, status, jabatan fungsional, dan tingkat pendidikan
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs">Program Studi</Badge>
                                    <Badge variant="secondary" className="text-xs">Status Dosen</Badge>
                                    <Badge variant="secondary" className="text-xs">Jenjang Pendidikan</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature 4 */}
                        <Card className="hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="w-6 h-6 text-yellow-600" />
                                </div>
                                <CardTitle className="text-xl">Aktivitas Akademik</CardTitle>
                                <CardDescription>
                                    Kelola data pengajaran, publikasi, dan pengabdian masyarakat setiap dosen
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs">Mata Kuliah</Badge>
                                    <Badge variant="secondary" className="text-xs">Publikasi</Badge>
                                    <Badge variant="secondary" className="text-xs">Pengabdian</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature 5 */}
                        <Card className="hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Edit3 className="w-6 h-6 text-indigo-600" />
                                </div>
                                <CardTitle className="text-xl">Manajemen CRUD</CardTitle>
                                <CardDescription>
                                    Tambah, edit, hapus, dan lihat detail data dosen dengan antarmuka yang intuitif
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs">Create</Badge>
                                    <Badge variant="secondary" className="text-xs">Read</Badge>
                                    <Badge variant="secondary" className="text-xs">Update</Badge>
                                    <Badge variant="secondary" className="text-xs">Delete</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature 6 */}
                        <Card className="hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-red-600" />
                                </div>
                                <CardTitle className="text-xl">Informasi Kontak</CardTitle>
                                <CardDescription>
                                    Simpan dan kelola informasi kontak lengkap termasuk email, telepon, dan alamat
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs">Email</Badge>
                                    <Badge variant="secondary" className="text-xs">Telepon</Badge>
                                    <Badge variant="secondary" className="text-xs">Alamat</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Preview Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            📊 Dashboard Preview
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Lihat bagaimana sistem bekerja dalam mengelola data dosen
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                        <Card className="text-center bg-white/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">150+</p>
                                <p className="text-sm text-gray-600">Total Dosen</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center bg-white/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">95+</p>
                                <p className="text-sm text-gray-600">Dosen Tetap</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center bg-white/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                                <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">12</p>
                                <p className="text-sm text-gray-600">Program Studi</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center bg-white/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                                <BookOpen className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-900">25</p>
                                <p className="text-sm text-gray-600">Profesor</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-center">🎯 Fitur Utama Sistem</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Tambah data dosen baru dengan form lengkap</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Edit dan update informasi dosen existing</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Lihat detail lengkap profil dosen</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Hapus data dosen dengan konfirmasi</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Pencarian multi-kriteria yang powerful</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Filter berdasarkan berbagai kategori</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Manajemen publikasi dan pengabdian</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>Interface responsif untuk semua device</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        🎓 Siap Mengelola Data Dosen?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Bergabunglah sekarang dan rasakan kemudahan mengelola data dosen perguruan tinggi Anda
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => router.visit(route('register'))}
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                        >
                            <PlusCircle className="w-5 h-5 mr-2" />
                            Daftar Gratis Sekarang
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => router.visit(route('login'))}
                            className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                        >
                            <Eye className="w-5 h-5 mr-2" />
                            Login Sekarang
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-3 mb-4 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">DosenKu</h3>
                                <p className="text-sm text-gray-400">Sistem Manajemen Dosen</p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-sm text-gray-400">
                                © 2024 DosenKu. Semua hak dilindungi.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Dibuat untuk mengelola data dosen perguruan tinggi
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}