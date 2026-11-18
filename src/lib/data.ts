export type Project = {
	title: string;
	category: string;
	description: string;
	highlight: string;
	stack: string;
	year: number;
	coord: string;
	href?: string;
};

export const projects: Project[] = [
	{
		title: 'Sistem Absensi Kelas',
		category: 'Aplikasi Web — Presensi',
		description:
			'Aplikasi pencatatan kehadiran siswa harian dengan validasi otomatis dan rekap kehadiran bulan berbasis kelas.',
		highlight: 'Rekap otomatis per bulan & laporan siap cetak',
		stack: 'SvelteKit · TypeScript',
		year: 2026,
		coord: 'C1:R1',
		href: 'https://github.com/rosaarani/absensi'
	},
	{
		title: 'Jokotubies',
		category: 'Game Development',
		description:
			'Game interaktif berbasis Unity yang menghadirkan tantangan seru dengan mekanik permainan yang responsif dan visual yang menarik.',
		highlight: 'Mekanik gameplay interaktif & kontrol responsif',
		stack: 'Unity · C#',
		year: 2026,
		coord: 'C6:R3',
		href: 'https://github.com/zakyinul/gembut.git'
	},
	{
		title: 'Sitemu',
		category: 'Sistem Informasi — Lost & Found',
		description:
			'Platform pemantauan dan pelaporan mengenai barang yang hilang dan ditemukan di lingkungan sekolah secara real-time.',
		highlight: 'Pencatatan real-time barang hilang & ditemukan',
		stack: 'TypeScript · SvelteKit',
		year: 2026,
		coord: 'C2:R3',
		href: 'https://github.com/rosaarani/dashboard'
	},
	{
		title: 'PMR 08',
		category: 'Portal Resmi — Kesehatan & Relawan',
		description:
			'Portal resmi yang menyajikan panduan pertolongan pertama, profil organisasi relawan, dan dokumentasi kegiatan PMR.',
		highlight: 'Panduan pertolongan pertama & arsip kegiatan',
		stack: 'TypeScript · Tailwind',
		year: 2026,
		coord: 'C5:R4',
		href: 'https://github.com/rosaarani/dashboard'
	}
];

export const services = [
	{
		code: 'S.01 — FE',
		title: 'Frontend & SvelteKit',
		method:
			'Membangun antarmuka web modern dengan komponen reaktif SvelteKit 5, manajemen state bersih, performa ringan, dan transisi halus.'
	},
	{
		code: 'S.02 — SI',
		title: 'Sistem Informasi Sekolah',
		method:
			'Pengolahan alur data dengan TypeScript aman (type-safe), formulir terintegrasi, serta arsitektur pencatatan presensi dan inventaris yang siap pakai.'
	},
	{
		code: 'S.03 — DS',
		title: 'Desain UI & Tipografi Presisi',
		method:
			'Penerapan tata letak 12-kolom yang disiplin, hierarki tipografi tegas (Fraunces & IBM Plex Mono), serta micro-interaction halus bernuansa editorial.'
	}
];

export const profile = {
	name: 'Maharani Rosyadah Najah',
	role: 'Siswa SMK — PPLG',
	location: 'Semarang, Indonesia',
	email: 'rossaa2810@gmail.com',
	github: 'https://github.com/rossaarani',
	bio: 'Saya suka membangun hal yang berguna, fungsional, dan terlihat rapi dari baris kode hingga antarmuka pengguna.',
	fullBio:
		'Saya seorang siswi SMK Negeri 8 Semarang jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Sehari-hari mendalami SvelteKit, TypeScript, dan Tailwind CSS, sembari mengerjakan berbagai proyek nyata untuk kebutuhan sekolah, organisasi, dan komunitas.',
	facts: [
		{ label: 'FOKUS', value: 'Antarmuka web & sistem informasi' },
		{ label: 'STACK', value: 'SvelteKit · TypeScript · Tailwind CSS' },
		{ label: 'SEKOLAH', value: 'SMK Negeri 8 Semarang (PPLG)' },
		{ label: 'STATUS', value: 'Terbuka untuk kolaborasi proyek' }
	],
	skills: ['HTML5', 'CSS3', 'TypeScript', 'SvelteKit 5', 'Tailwind CSS', 'Git / GitHub', 'Figma UI']
};
