import { Project, Organization, Skill, Course } from './types';

export const personalData = {
  name: "Nadia Anatashiva", // Professional name inspired by user's email prefix or elegant formatting
  title: "Mahasiswa Teknik Informatika",
  semester: 6,
  university: "Universitas Pembangunan Nasional",
  city: "Lampung, Indonesia",
  bio: "Mahasiswa Semester 6 Teknik Informatika yang berfokus pada Pengambangan Web Fullstack & Rekayasa Sistem. Memiliki pengalaman sebagai Asisten Praktikum Basis Data serta kepemimpinan aktif di Himpunan Mahasiswa. Selalu antusias memecahkan masalah kompleks lewat baris kode yang bersih dan terstruktur.",
  email: "nadiantshva31@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  phone: "+62 812-3456-7890",
  address: "Bandung, Jawa Barat, Indonesia",
  gpa: "3.82 / 4.00",
  currentFocus: "Cloud Architecture, Web Scalability, and Preparations for Final Year Project (Tugas Akhir)."
};

export const coursesData: Course[] = [
  { code: "IF-3201", name: "Rekayasa Perangkat Lunak Lunak", grade: "A", semester: 5 },
  { code: "IF-3204", name: "Sistem Terdistribusi", grade: "A-", semester: 6 },
  { code: "IF-3105", name: "Kecerdasan Artifisial", grade: "A", semester: 5 },
  { code: "IF-2204", name: "Sistem Basis Data", grade: "A", semester: 4 },
  { code: "IF-3202", name: "Pemrograman Mobile lanjutan", grade: "A", semester: 6 },
  { code: "IF-3203", name: "Keamanan Informasi & Jaringan", grade: "B+", semester: 6 }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "SIMTA - Sistem Informasi Manajemen Tugas Akhir",
    category: "Web Dev",
    semester: 6,
    description: "Platform berbasis kustomisasi alur Kanban untuk manajemen pengajuan judul, bimbingan, hingga pendaftaran sidang Tugas Akhir di lingkup departemen.",
    longDescription: "SIMTA adalah solusi digital di rancang untuk memotong rantai birokrasi bimbingan manual. Mahasiswa dapat mengunggah draf bab, melakukan coretan revisi dari dosen secara online, dan melihat kemajuan penyelesaian skripsi secara real-time melalui papan Kanban interaktif.",
    role: "Fullstack Developer & Database Designer",
    techStack: ["React.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    features: [
      "Papan Kanban interaktif untuk pemantauan draf bab Tugas Akhir",
      "Notifikasi instan bimbingan baru menggunakan WebSocket (Socket.io)",
      "Ekspor laporan kartu bimbingan otomatis dalam format PDF",
      "Sistem otentikasi peran ganda (Mahasiswa, Dosen, Admin Prodi)"
    ],
    metrics: "Menghemat 65% waktu administrasi pendaftaran sidang",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "proj-2",
    title: "MedisCAN - Aplikasi Mobile Deteksi Dini Kanker Kulit",
    category: "Data Science",
    semester: 5,
    description: "Prototipe aplikasi mobile healthcare untuk mendeteksi potensi lesi kanker kulit menggunakan Convolutional Neural Network (CNN).",
    longDescription: "Dikembangkan sebagai proyek kolaboratif mata kuliah Kecerdasan Artifisial. Model Machine Learning dilatih menggunakan dataset ISIC dengan arsitektur MobileNetV2 dan ditransformasikan menjadi format TensorFlow Lite, kemudian dideploy ke aplikasi mobile untuk inspeksi visual instan.",
    role: "Machine Learning Engineer",
    techStack: ["TensorFlow", "React Native", "Flask API", "Python", "Cloud Storage"],
    features: [
      "Pengambilan gambar langsung via kamera smartphone atau unggah galeri",
      "Klasifikasi 3 jenis lesi kanker kulit dengan tingkat keyakinan tinggi",
      "Artikel edukasi kesehatan kulit terintegrasi",
      "Penyimpanan enkripsi hasil riwayat diagnosa lokal"
    ],
    metrics: "Akurasi validasi model mencapai 93.4%",
    githubUrl: "https://github.com"
  },
  {
    id: "proj-3",
    title: "CampGo - Aplikasi Penyewaan Alat Outdoor",
    category: "Mobile Dev",
    semester: 5,
    description: "Aplikasi mobile e-commerce khusus persewaan alat perkemahan dan petualangan dengan sistem check-in terintegrasi peta.",
    longDescription: "Aplikasi yang dirancang guna mempermudah pecinta alam untuk menemukan gerai rental terdekat, membandingkan harga paket mendaki, serta melakukan pembayaran aman. Dilengkapi visualisasi ketersediaan alat lewat diagram interaktif.",
    role: "UI/UX & Lead Flutter Developer",
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Maps SDK", "Midtrans Core API"],
    features: [
      "Integrasi visual peta lokasi gerai outdoor terdekat di sekitar pengguna",
      "Pencarian real-time dengan filter kategori produk dan tanggal ketersediaan",
      "Gerbang pembayaran (Midtrans sandbox) yang mendukung scan QRIS",
      "Pemberitahuan push otomatis saat batas pengembalian alat mendekati H-1"
    ],
    metrics: "Transaksi dummy lancar dengan respon checkout < 1.2 detik",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "proj-4",
    title: "ScaleStore - Arsitektur Microservices E-Commerce",
    category: "UI/UX & SysDev",
    semester: 6,
    description: "Implementasi desain RESTful API dengan arsitektur mikroservis berkinerja tinggi menggunakan Go dan protokol komunikasi gRPC.",
    longDescription: "Proyek kuliah Sistem Terdistribusi untuk mengeksplorasi efisiensi pertukaran data internal antar service mikro. Mengeksplorasi pembagian domain dari Auth Service, Inventory Service, dan Order Service dengan sinkronisasi basis data asinkronus.",
    role: "Backend Architect",
    techStack: ["Golang", "gRPC", "Docker", "RabbitMQ", "Redis Cache", "PostgreSQL"],
    features: [
      "Komunikasi RPC privat berkecepatan tinggi dengan Protobuf",
      "Penerapan message broker RabbitMQ untuk pemrosesan order secara asinkron",
      "Penyimpanan cache inventori instan menggunakan Redis",
      "Containerisasi lengkap menggunakan Docker Compose untuk deployment lokal"
    ],
    metrics: "Mengurangi latency overhead sebesar 45% dibanding HTTP standar REST",
    githubUrl: "https://github.com"
  }
];

export const organizationData: Organization[] = [
  {
    id: "org-1",
    organizationName: "Himpunan Mahasiswa Informatika (HMIF)",
    role: "Staff Divisi Kerohanian",
    period: "Sep 2024 - Sekarang",
    description: "Divisi yang fokus pada pengembangan spiritualitas dan kegiatan keagamaan seluruh mahasiswa Informatika.",
    achievements: [
      "Mengadakan dan memfasilitasi kegiatan keagamaan rutin bagi mahasiswa informatika.",
    ],
    isActive: true
  },
  {
    id: "org-2",
    organizationName: "Developer Student Clubs (GDSC)",
    role: "Core Team Developer - Mobile & Web Department",
    period: "Okt 2023 - Agu 2024",
    description: "Mengadakan dan berkontribusi langsung pada kegiatan lokakarya pengenalan pemrograman di seluruh lingkup universitas, serta membangun aplikasi/situs web kepanitiaan.",
    achievements: [
      "Menjadi pembicara utama (Speaker) pada sesi 'Getting Started with Tailwind & React' yang dihadiri oleh 80+ peserta junior.",
      "Bagian dari tim pengembang website Hackathon GDSC 2024, mengoptimalkan rendering komponen web sehingga skor WebVitals mencapai 95+.",
      "Mengajarkan dasar-dasar Git & Collaboration menggunakan GitHub kepada mahasiswa baru."
    ],
    isActive: false
  },
  {
    id: "org-3",
    organizationName: "Laboratorium Basis Data & Rekayasa Perangkat Lunak",
    role: "Asisten Praktikum (Lab Assistant)",
    period: "Feb 2024 - Sekarang",
    description: "Membantu dosen pengampu dalam menyelenggarakan modul praktikum basis data (SQL Server / PostgreSQL) dan pemrograman web modern untuk semester 3 & 4.",
    achievements: [
      "Merancang draf studi kasus ujian basis data bertopik optimasi query indexing yang dipakai oleh seluruh kelas paralel tahun ajaran 24/25.",
      "Mengajar konsep query kompleks (Joins, CTE, Subqueries, Transaction blocks) serta integrasi ORM (Prisma/Drizzle) ke NodeJS.",
      "Melakukan penilaian objektif berupa code review tugas individu secara transparan kepada total 95 mahasiswa bimbingan."
    ],
    isActive: true
  }
];

export const skillsData: Skill[] = [
  { name: "React.js / Next.js", category: "Frontend", percentage: 90, iconName: "React" },
  { name: "Tailwind CSS", category: "Frontend", percentage: 95, iconName: "Css" },
  { name: "TypeScript", category: "Frontend", percentage: 85, iconName: "Code" },

  { name: "Node.js / Express.js", category: "Backend", percentage: 88, iconName: "Server" },
  { name: "Go / Golang", category: "Backend", percentage: 75, iconName: "Cpu" },
  { name: "PostgreSQL / Prisma", category: "Backend", percentage: 85, iconName: "Database" },

  { name: "Flutter & Dart", category: "Mobile & DevOps", percentage: 80, iconName: "Smartphone" },
  { name: "Git & GitHub", category: "Mobile & DevOps", percentage: 90, iconName: "Workflow" },
  { name: "Docker Container", category: "Mobile & DevOps", percentage: 70, iconName: "Layers" },

  { name: "Python / TensorFlow", category: "Data Science", percentage: 78, iconName: "Binary" },
  { name: "Data Preprocessing", category: "Data Science", percentage: 82, iconName: "LineChart" },
  { name: "SQL Query Optimization", category: "Data Science", percentage: 86, iconName: "Table" }
];
