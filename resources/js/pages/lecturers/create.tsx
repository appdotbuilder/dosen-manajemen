import React from 'react';
import { useForm } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, User, GraduationCap, Briefcase, Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { router } from '@inertiajs/react';

interface LecturerFormData {
    name: string;
    nidn: string;
    nuptk: string;
    study_program: string;
    education_level: string;
    education_institution: string;
    education_major: string;
    education_year: string;
    functional_position: string;
    rank: string;
    status: string;
    teaching_subjects: string;
    publications: string;
    community_service: string;
    phone: string;
    email: string;
    address: string;
    [key: string]: string;
}

export default function CreateLecturer() {
    const { data, setData, post, processing, errors } = useForm<LecturerFormData>({
        name: '',
        nidn: '',
        nuptk: '',
        study_program: '',
        education_level: '',
        education_institution: '',
        education_major: '',
        education_year: '',
        functional_position: '',
        rank: '',
        status: 'Tetap',
        teaching_subjects: '',
        publications: '',
        community_service: '',
        phone: '',
        email: '',
        address: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('lecturers.store'));
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
                            <h1 className="text-3xl font-bold text-gray-900">👨‍🏫 Tambah Dosen Baru</h1>
                            <p className="text-gray-600 mt-1">
                                Lengkapi informasi dosen dengan detail
                            </p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Basic Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <User className="w-5 h-5 mr-2" />
                                        Informasi Dasar
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <Label htmlFor="name" className="required">Nama Lengkap</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Dr. Nama Lengkap, S.Kom., M.T."
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="nidn">NIDN</Label>
                                            <Input
                                                id="nidn"
                                                type="text"
                                                value={data.nidn}
                                                onChange={(e) => setData('nidn', e.target.value)}
                                                placeholder="1234567890"
                                                className={errors.nidn ? 'border-red-500' : ''}
                                            />
                                            {errors.nidn && <p className="text-red-500 text-sm mt-1">{errors.nidn}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="nuptk">NUPTK</Label>
                                            <Input
                                                id="nuptk"
                                                type="text"
                                                value={data.nuptk}
                                                onChange={(e) => setData('nuptk', e.target.value)}
                                                placeholder="1234567890123456"
                                                className={errors.nuptk ? 'border-red-500' : ''}
                                            />
                                            {errors.nuptk && <p className="text-red-500 text-sm mt-1">{errors.nuptk}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="study_program" className="required">Program Studi</Label>
                                            <Input
                                                id="study_program"
                                                type="text"
                                                value={data.study_program}
                                                onChange={(e) => setData('study_program', e.target.value)}
                                                placeholder="Teknik Informatika"
                                                className={errors.study_program ? 'border-red-500' : ''}
                                            />
                                            {errors.study_program && <p className="text-red-500 text-sm mt-1">{errors.study_program}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="status" className="required">Status Dosen</Label>
                                            <Select value={data.status} onValueChange={(value) => setData('status', value)}>
                                                <SelectTrigger className={errors.status ? 'border-red-500' : ''}>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Tetap">Tetap</SelectItem>
                                                    <SelectItem value="Tidak Tetap">Tidak Tetap</SelectItem>
                                                    <SelectItem value="Kontrak">Kontrak</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Education Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <GraduationCap className="w-5 h-5 mr-2" />
                                        Riwayat Pendidikan
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="education_level" className="required">Jenjang Pendidikan Tertinggi</Label>
                                            <Select value={data.education_level} onValueChange={(value) => setData('education_level', value)}>
                                                <SelectTrigger className={errors.education_level ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Pilih jenjang" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="S1">S1</SelectItem>
                                                    <SelectItem value="S2">S2</SelectItem>
                                                    <SelectItem value="S3">S3</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors.education_level && <p className="text-red-500 text-sm mt-1">{errors.education_level}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="education_year">Tahun Lulus</Label>
                                            <Input
                                                id="education_year"
                                                type="number"
                                                min="1970"
                                                max={new Date().getFullYear()}
                                                value={data.education_year}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('education_year', e.target.value)}
                                                placeholder="2020"
                                                className={errors.education_year ? 'border-red-500' : ''}
                                            />
                                            {errors.education_year && <p className="text-red-500 text-sm mt-1">{errors.education_year}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="education_institution">Institusi Pendidikan</Label>
                                            <Input
                                                id="education_institution"
                                                type="text"
                                                value={data.education_institution}
                                                onChange={(e) => setData('education_institution', e.target.value)}
                                                placeholder="Universitas Indonesia"
                                                className={errors.education_institution ? 'border-red-500' : ''}
                                            />
                                            {errors.education_institution && <p className="text-red-500 text-sm mt-1">{errors.education_institution}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="education_major">Bidang Studi</Label>
                                            <Input
                                                id="education_major"
                                                type="text"
                                                value={data.education_major}
                                                onChange={(e) => setData('education_major', e.target.value)}
                                                placeholder="Teknik Informatika"
                                                className={errors.education_major ? 'border-red-500' : ''}
                                            />
                                            {errors.education_major && <p className="text-red-500 text-sm mt-1">{errors.education_major}</p>}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Career Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Briefcase className="w-5 h-5 mr-2" />
                                        Informasi Karir
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="functional_position">Jabatan Fungsional</Label>
                                            <Select value={data.functional_position} onValueChange={(value) => setData('functional_position', value)}>
                                                <SelectTrigger className={errors.functional_position ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Pilih jabatan fungsional" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="">Tidak Ada</SelectItem>
                                                    <SelectItem value="Asisten Ahli">Asisten Ahli</SelectItem>
                                                    <SelectItem value="Lektor">Lektor</SelectItem>
                                                    <SelectItem value="Lektor Kepala">Lektor Kepala</SelectItem>
                                                    <SelectItem value="Profesor">Profesor</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors.functional_position && <p className="text-red-500 text-sm mt-1">{errors.functional_position}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="rank">Kepangkatan/Golongan</Label>
                                            <Input
                                                id="rank"
                                                type="text"
                                                value={data.rank}
                                                onChange={(e) => setData('rank', e.target.value)}
                                                placeholder="III/c, IV/a, dst."
                                                className={errors.rank ? 'border-red-500' : ''}
                                            />
                                            {errors.rank && <p className="text-red-500 text-sm mt-1">{errors.rank}</p>}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Academic Activities */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        Aktivitas Akademik
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="teaching_subjects">Mata Kuliah yang Diajar</Label>
                                        <Textarea
                                            id="teaching_subjects"
                                            value={data.teaching_subjects}
                                            onChange={(e) => setData('teaching_subjects', e.target.value)}
                                            placeholder="Pemrograman Web, Basis Data, Algoritma dan Struktur Data, ..."
                                            rows={3}
                                            className={errors.teaching_subjects ? 'border-red-500' : ''}
                                        />
                                        {errors.teaching_subjects && <p className="text-red-500 text-sm mt-1">{errors.teaching_subjects}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="publications">Publikasi</Label>
                                        <Textarea
                                            id="publications"
                                            value={data.publications}
                                            onChange={(e) => setData('publications', e.target.value)}
                                            placeholder="Daftar publikasi ilmiah, jurnal, prosiding, buku, dll."
                                            rows={3}
                                            className={errors.publications ? 'border-red-500' : ''}
                                        />
                                        {errors.publications && <p className="text-red-500 text-sm mt-1">{errors.publications}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="community_service">Pengabdian Kepada Masyarakat</Label>
                                        <Textarea
                                            id="community_service"
                                            value={data.community_service}
                                            onChange={(e) => setData('community_service', e.target.value)}
                                            placeholder="Kegiatan pengabdian masyarakat, pelatihan, konsultasi, dll."
                                            rows={3}
                                            className={errors.community_service ? 'border-red-500' : ''}
                                        />
                                        {errors.community_service && <p className="text-red-500 text-sm mt-1">{errors.community_service}</p>}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Contact Information */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Informasi Kontak
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="email" className="flex items-center">
                                            <Mail className="w-4 h-4 mr-1" />
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="nama.dosen@university.ac.id"
                                            className={errors.email ? 'border-red-500' : ''}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="phone" className="flex items-center">
                                            <Phone className="w-4 h-4 mr-1" />
                                            Nomor Telepon
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            placeholder="08123456789"
                                            className={errors.phone ? 'border-red-500' : ''}
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="address" className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            Alamat
                                        </Label>
                                        <Textarea
                                            id="address"
                                            value={data.address}
                                            onChange={(e) => setData('address', e.target.value)}
                                            placeholder="Jl. Contoh No. 123, Kota, Provinsi"
                                            rows={3}
                                            className={errors.address ? 'border-red-500' : ''}
                                        />
                                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Submit Actions */}
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        <Button 
                                            type="submit" 
                                            className="w-full bg-blue-600 hover:bg-blue-700"
                                            disabled={processing}
                                        >
                                            <Save className="w-4 h-4 mr-2" />
                                            {processing ? 'Menyimpan...' : 'Simpan Data Dosen'}
                                        </Button>
                                        
                                        <Button 
                                            type="button" 
                                            variant="outline" 
                                            className="w-full"
                                            onClick={() => router.visit(route('lecturers.index'))}
                                            disabled={processing}
                                        >
                                            Batal
                                        </Button>
                                    </div>
                                    
                                    <div className="text-xs text-gray-500 mt-4">
                                        <p>* Field wajib diisi</p>
                                        <p>Pastikan data yang dimasukkan akurat dan lengkap.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </div>
        </AppShell>
    );
}