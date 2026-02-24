import React from "react";
import NavigationHeader from "../../components/navigation/NavigationHeader";
import AcademicCalendarWidget from "../../components/navigation/AcademicCalendarWidget";
import CourseCard from "./components/CourseCard";
import AssignmentCard from "./components/AssignmentCard";
import GradeTable from "./components/GradeTable";
import ScheduleWidget from "./components/ScheduleWidget";
import NotificationPanel from "./components/NotificationPanel";
import QuickActions from "./components/QuickActions";
import Icon from "../../components/AppIcon";

const StudentDashboard = () => {
  const studentName = "Anj*ng";

  const enrolledCourses = [
    {
      name: "Pemrograman Web Lanjut",
      code: "CS301",
      lecturer: "Dr. Siti Nurhaliza",
      nextClass: "Senin, 08:00 - 10:00",
      location: "Lab Komputer 3",
      recentGrade: "85",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1e0956208-1765233620317.png",
      imageAlt:
        "Modern computer laboratory with rows of desktop computers and large windows showing natural lighting",
    },
    {
      name: "Basis Data Terdistribusi",
      code: "CS302",
      lecturer: "Prof. Ahmad Dahlan",
      nextClass: "Selasa, 10:00 - 12:00",
      location: "Ruang 205",
      recentGrade: "78",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_124655aea-1768620997507.png",
      imageAlt:
        "Database server room with organized network cables and modern server racks with blue LED indicators",
    },
    {
      name: "Kecerdasan Buatan",
      code: "CS303",
      lecturer: "Dr. Rina Wijaya",
      nextClass: "Rabu, 13:00 - 15:00",
      location: "Auditorium A",
      recentGrade: "92",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1a25c38be-1764647529359.png",
      imageAlt:
        "Futuristic artificial intelligence concept with glowing neural network visualization on digital screens",
    },
    {
      name: "Keamanan Jaringan",
      code: "CS304",
      lecturer: "Ir. Bambang Suryanto",
      nextClass: "Kamis, 08:00 - 10:00",
      location: "Lab Jaringan 1",
      recentGrade: "88",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1082962de-1767061961306.png",
      imageAlt:
        "Network security concept showing digital padlock icon with binary code and firewall protection visualization",
    },
  ];

  const assignments = [
    {
      title: "Implementasi RESTful API dengan Node.js",
      courseName: "Pemrograman Web Lanjut",
      dueDate: "2026-02-26",
      status: "pending",
      description:
        "Buat RESTful API menggunakan Node.js dan Express untuk sistem manajemen perpustakaan. API harus mencakup operasi CRUD untuk buku, anggota, dan peminjaman.",
    },
    {
      title: "Analisis Performa Query Database",
      courseName: "Basis Data Terdistribusi",
      dueDate: "2026-02-28",
      status: "pending",
      description:
        "Lakukan analisis performa berbagai jenis query pada database terdistribusi. Bandingkan waktu eksekusi dan resource usage untuk query sederhana vs kompleks.",
    },
    {
      title: "Implementasi Algoritma Machine Learning",
      courseName: "Kecerdasan Buatan",
      dueDate: "2026-02-25",
      status: "submitted",
      submittedDate: "2026-02-23",
      description:
        "Implementasikan algoritma klasifikasi menggunakan Decision Tree dan Random Forest. Bandingkan akurasi kedua algoritma menggunakan dataset Iris.",
    },
    {
      title: "Konfigurasi Firewall dan IDS",
      courseName: "Keamanan Jaringan",
      dueDate: "2026-03-05",
      status: "pending",
      description:
        "Konfigurasikan firewall menggunakan iptables dan setup Intrusion Detection System (IDS) menggunakan Snort. Dokumentasikan setiap langkah konfigurasi.",
    },
  ];

  const grades = [
    {
      courseName: "Pemrograman Web Lanjut",
      courseCode: "CS301",
      credits: 3,
      score: 85,
      grade: "A",
    },
    {
      courseName: "Basis Data Terdistribusi",
      courseCode: "CS302",
      credits: 3,
      score: 78,
      grade: "B+",
    },
    {
      courseName: "Kecerdasan Buatan",
      courseCode: "CS303",
      credits: 4,
      score: 92,
      grade: "A",
    },
    {
      courseName: "Keamanan Jaringan",
      courseCode: "CS304",
      credits: 3,
      score: 88,
      grade: "A",
    },
    {
      courseName: "Manajemen Proyek TI",
      courseCode: "CS305",
      credits: 2,
      score: 82,
      grade: "A",
    },
  ];

  const currentGPA = 3.68;

  const schedule = [
    {
      day: "Senin",
      courseName: "Pemrograman Web Lanjut",
      lecturer: "Dr. Siti Nurhaliza",
      startTime: "08:00",
      endTime: "10:00",
      location: "Lab Komputer 3",
    },
    {
      day: "Senin",
      courseName: "Manajemen Proyek TI",
      lecturer: "Dr. Hendra Kusuma",
      startTime: "13:00",
      endTime: "15:00",
      location: "Ruang 301",
    },
    {
      day: "Selasa",
      courseName: "Basis Data Terdistribusi",
      lecturer: "Prof. Ahmad Dahlan",
      startTime: "10:00",
      endTime: "12:00",
      location: "Ruang 205",
    },
    {
      day: "Rabu",
      courseName: "Kecerdasan Buatan",
      lecturer: "Dr. Rina Wijaya",
      startTime: "13:00",
      endTime: "15:00",
      location: "Auditorium A",
    },
    {
      day: "Kamis",
      courseName: "Keamanan Jaringan",
      lecturer: "Ir. Bambang Suryanto",
      startTime: "08:00",
      endTime: "10:00",
      location: "Lab Jaringan 1",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "grade",
      title: "Nilai Baru Tersedia",
      message:
        "Nilai untuk tugas \'Implementasi Algoritma Machine Learning\' telah diupload: 92",
      timestamp: new Date(Date.now() - 1800000),
      isRead: false,
    },
    {
      id: 2,
      type: "assignment",
      title: "Pengingat Deadline Tugas",
      message:
        "Tugas \'Implementasi RESTful API\' akan jatuh tempo dalam 2 hari",
      timestamp: new Date(Date.now() - 3600000),
      isRead: false,
    },
    {
      id: 3,
      type: "announcement",
      title: "Pengumuman Penting",
      message:
        "Jadwal kuliah untuk minggu depan mengalami perubahan. Silakan cek jadwal terbaru.",
      timestamp: new Date(Date.now() - 7200000),
      isRead: true,
    },
    {
      id: 4,
      type: "schedule",
      title: "Perubahan Jadwal",
      message: "Kuliah Pemrograman Web Lanjut dipindah ke Lab Komputer 5",
      timestamp: new Date(Date.now() - 86400000),
      isRead: true,
    },
    {
      id: 5,
      type: "grade",
      title: "Nilai UTS Diumumkan",
      message:
        "Nilai Ujian Tengah Semester untuk Basis Data Terdistribusi sudah dapat dilihat",
      timestamp: new Date(Date.now() - 172800000),
      isRead: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader
        userRole="student"
        userName={studentName}
        isAuthenticated={true}
      />

      <main className="main-content">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Selamat Datang, {studentName}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Kelola aktivitas akademik Anda dengan mudah
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 md:p-6 text-primary-foreground shadow-warm">
              <div className="flex items-center justify-between mb-3">
                <Icon name="BookOpen" size={32} />
                <span className="text-3xl md:text-4xl font-bold">
                  {enrolledCourses?.length}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                Mata Kuliah Aktif
              </h3>
              <p className="text-xs md:text-sm opacity-90">Semester ini</p>
            </div>

            <div className="bg-gradient-to-br from-warning to-warning/80 rounded-xl p-4 md:p-6 text-warning-foreground shadow-warm">
              <div className="flex items-center justify-between mb-3">
                <Icon name="FileText" size={32} />
                <span className="text-3xl md:text-4xl font-bold">
                  {assignments?.filter((a) => a?.status === "pending")?.length}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                Tugas Pending
              </h3>
              <p className="text-xs md:text-sm opacity-90">Belum dikumpulkan</p>
            </div>

            <div className="bg-gradient-to-br from-success to-success/80 rounded-xl p-4 md:p-6 text-success-foreground shadow-warm">
              <div className="flex items-center justify-between mb-3">
                <Icon name="Award" size={32} />
                <span className="text-3xl md:text-4xl font-bold">
                  {currentGPA?.toFixed(2)}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                IPK Semester
              </h3>
              <p className="text-xs md:text-sm opacity-90">
                Indeks Prestasi Kumulatif
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Mata Kuliah Saya
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {enrolledCourses?.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="FileText" size={24} />
                  Tugas & Pengumpulan
                </h2>
                <div className="space-y-3">
                  {assignments?.map((assignment, index) => (
                    <AssignmentCard key={index} assignment={assignment} />
                  ))}
                </div>
              </section>

              <GradeTable grades={grades} gpa={currentGPA} />

              <QuickActions />
            </div>

            <div className="space-y-4 md:space-y-6">
              <ScheduleWidget schedule={schedule} />

              <AcademicCalendarWidget userRole="student" />

              <NotificationPanel notifications={notifications} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
