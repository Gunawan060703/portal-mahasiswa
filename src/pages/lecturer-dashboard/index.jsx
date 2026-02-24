import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import NavigationHeader from "../../components/navigation/NavigationHeader";
import AcademicCalendarWidget from "../../components/navigation/AcademicCalendarWidget";
import CourseCard from "./components/CourseCard";
import GradeEntryModal from "./components/GradeEntryModal";
import AssignmentCreationPanel from "./components/AssignmentCreationPanel";
import AttendanceTracker from "./components/AttendanceTracker";
import StudentProgressChart from "./components/StudentProgressChart";
import MaterialUploadSection from "./components/MaterialUploadSection";
import NotificationPanel from "./components/NotificationPanel";

const LecturerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [isAssignmentPanelOpen, setIsAssignmentPanelOpen] = useState(false);
  const [isAttendanceTrackerOpen, setIsAttendanceTrackerOpen] = useState(false);
  const [isMaterialUploadOpen, setIsMaterialUploadOpen] = useState(false);

  const lecturerData = {
    name: "Dr. Budi Santoso",
    nip: "198503152010121001",
    department: "Teknik Informatika",
    email: "budi.santoso@university.ac.id",
  };

  const courses = [
    {
      id: 1,
      name: "Pemrograman Web",
      code: "TIF301",
      image: "https://images.unsplash.com/photo-1632910605645-7a2e40713db1",
      imageAlt:
        "Modern laptop displaying colorful web development code on screen with coffee cup on wooden desk",
      status: "active",
      enrolledStudents: 42,
      credits: 3,
      schedule: "Senin, 08:00-10:30",
      recentActivity: [
        "Tugas 2 dikumpulkan oleh 38 mahasiswa",
        "5 mahasiswa belum mengumpulkan tugas",
        "Rata-rata nilai UTS: 78.5",
      ],

      materialsCount: 15,
    },
    {
      id: 2,
      name: "Basis Data",
      code: "TIF302",
      image: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a",
      imageAlt:
        "Database server room with rows of blue illuminated data storage racks and network cables",
      status: "active",
      enrolledStudents: 38,
      credits: 3,
      schedule: "Rabu, 13:00-15:30",
      recentActivity: [
        "Materi SQL Advanced telah diupload",
        "Quiz 3 dijadwalkan untuk minggu depan",
        "Tingkat kehadiran: 95%",
      ],

      materialsCount: 12,
    },
    {
      id: 3,
      name: "Algoritma dan Struktur Data",
      code: "TIF201",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_18abd7637-1771898015259.png",
      imageAlt:
        "Whiteboard filled with algorithm flowcharts and data structure diagrams with colorful markers",
      status: "active",
      enrolledStudents: 45,
      credits: 4,
      schedule: "Selasa, 10:00-12:30",
      recentActivity: [
        "Praktikum sorting algorithms selesai",
        "3 mahasiswa memerlukan bimbingan tambahan",
        "Assignment completion rate: 88%",
      ],

      materialsCount: 18,
    },
    {
      id: 4,
      name: "Rekayasa Perangkat Lunak",
      code: "TIF401",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_10dab81f6-1766741797189.png",
      imageAlt:
        "Team of software engineers collaborating around computer screens in modern office workspace",
      status: "upcoming",
      enrolledStudents: 35,
      credits: 3,
      schedule: "Kamis, 08:00-10:30",
      recentActivity: [
        "Persiapan materi semester baru",
        "Silabus telah disetujui",
        "Enrollment dibuka",
      ],

      materialsCount: 8,
    },
  ];

  const students = [
    {
      id: 1,
      name: "Ahmad Rizki Pratama",
      nim: "2021110001",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1305c4cf3-1763295107941.png",
      avatarAlt:
        "Professional headshot of young Indonesian male student with short black hair wearing white shirt",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      nim: "2021110002",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1ae9c563d-1763298931009.png",
      avatarAlt:
        "Professional headshot of young Indonesian female student with hijab wearing blue blouse",
    },
    {
      id: 3,
      name: "Budi Setiawan",
      nim: "2021110003",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1e1689f6a-1763296087380.png",
      avatarAlt:
        "Professional headshot of young Indonesian male student with glasses wearing formal shirt",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      nim: "2021110004",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1ae9c563d-1763298931009.png",
      avatarAlt:
        "Professional headshot of young Indonesian female student with long black hair wearing red top",
    },
    {
      id: 5,
      name: "Eko Prasetyo",
      nim: "2021110005",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1b43a9a75-1763293741541.png",
      avatarAlt:
        "Professional headshot of young Indonesian male student with neat hairstyle wearing navy shirt",
    },
  ];

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setActiveTab("analytics");
  };

  const handleManageGrades = (course) => {
    setSelectedCourse(course);
    setIsGradeModalOpen(true);
  };

  const handleUploadMaterial = (course) => {
    setSelectedCourse(course);
    setIsMaterialUploadOpen(true);
  };

  const handleCreateAssignment = () => {
    if (courses?.length > 0) {
      setSelectedCourse(courses?.[0]);
      setIsAssignmentPanelOpen(true);
    }
  };

  const handleMarkAttendance = () => {
    if (courses?.length > 0) {
      setSelectedCourse(courses?.[0]);
      setIsAttendanceTrackerOpen(true);
    }
  };

  const tabs = [
    { id: "overview", label: "Ringkasan", icon: "LayoutDashboard" },
    { id: "courses", label: "Mata Kuliah", icon: "BookOpen" },
    { id: "analytics", label: "Analitik", icon: "BarChart3" },
    { id: "calendar", label: "Kalender", icon: "Calendar" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader
        userRole="lecturer"
        userName={lecturerData?.name}
        isAuthenticated={true}
      />

      <main className="main-content max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Dashboard Dosen
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Selamat datang kembali, {lecturerData?.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Mata Kuliah Aktif
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  3
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              1 mata kuliah akan datang
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Mahasiswa</p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  125
                </p>
              </div>
            </div>
            <p className="text-xs text-success">+8 dari semester lalu</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Icon name="FileText" size={24} className="text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tugas Pending</p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  12
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Perlu dinilai</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rata-rata Nilai</p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  78.5
                </p>
              </div>
            </div>
            <p className="text-xs text-success">+2.3 dari semester lalu</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            onClick={handleCreateAssignment}
          >
            Buat Tugas Baru
          </Button>
          <Button
            variant="outline"
            iconName="CheckCircle"
            iconPosition="left"
            onClick={handleMarkAttendance}
          >
            Isi Absensi
          </Button>
          <Button
            variant="secondary"
            iconName="Upload"
            iconPosition="left"
            onClick={() => setIsMaterialUploadOpen(true)}
          >
            Upload Materi
          </Button>
        </div>

        <div className="mb-6 md:mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab?.id
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "bg-card text-foreground hover:bg-muted border border-border"
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6">
            {activeTab === "overview" && (
              <>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Icon name="BookOpen" size={24} />
                    Mata Kuliah Aktif
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    {courses
                      ?.filter((c) => c?.status === "active")
                      ?.slice(0, 2)
                      ?.map((course) => (
                        <CourseCard
                          key={course?.id}
                          course={course}
                          onViewDetails={handleViewDetails}
                          onManageGrades={handleManageGrades}
                          onUploadMaterial={handleUploadMaterial}
                        />
                      ))}
                  </div>
                </div>

                <NotificationPanel />
              </>
            )}

            {activeTab === "courses" && (
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Semua Mata Kuliah
                </h2>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {courses?.map((course) => (
                    <CourseCard
                      key={course?.id}
                      course={course}
                      onViewDetails={handleViewDetails}
                      onManageGrades={handleManageGrades}
                      onUploadMaterial={handleUploadMaterial}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="BarChart3" size={24} />
                  Analitik & Progress Mahasiswa
                </h2>
                <StudentProgressChart courseData={selectedCourse} />
              </div>
            )}

            {activeTab === "calendar" && (
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Calendar" size={24} />
                  Kalender Akademik
                </h2>
                <AcademicCalendarWidget userRole="lecturer" />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="User" size={20} />
                Profil Dosen
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Nama</p>
                  <p className="text-sm font-medium text-foreground">
                    {lecturerData?.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">NIP</p>
                  <p className="text-sm font-medium text-foreground">
                    {lecturerData?.nip}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Program Studi</p>
                  <p className="text-sm font-medium text-foreground">
                    {lecturerData?.department}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">
                    {lecturerData?.email}
                  </p>
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Edit"
                  iconPosition="left"
                  onClick={() => navigate("/profile")}
                >
                  Edit Profil
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} />
                Jadwal Hari Ini
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">
                      08:00 - 10:30
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Pemrograman Web
                  </p>
                  <p className="text-xs text-muted-foreground">Ruang Lab 301</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon
                      name="Clock"
                      size={16}
                      className="text-muted-foreground"
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                      13:00 - 15:30
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Basis Data
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ruang Kelas 205
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="AlertCircle" size={20} />
                Aksi Cepat
              </h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="FileText"
                  iconPosition="left"
                  onClick={handleCreateAssignment}
                >
                  Buat Tugas
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Edit"
                  iconPosition="left"
                  onClick={() => setIsGradeModalOpen(true)}
                >
                  Input Nilai
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="CheckCircle"
                  iconPosition="left"
                  onClick={handleMarkAttendance}
                >
                  Isi Absensi
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Upload"
                  iconPosition="left"
                  onClick={() => setIsMaterialUploadOpen(true)}
                >
                  Upload Materi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <GradeEntryModal
        isOpen={isGradeModalOpen}
        onClose={() => setIsGradeModalOpen(false)}
        course={selectedCourse}
        students={students}
      />

      <AssignmentCreationPanel
        isOpen={isAssignmentPanelOpen}
        onClose={() => setIsAssignmentPanelOpen(false)}
        course={selectedCourse}
      />

      <AttendanceTracker
        isOpen={isAttendanceTrackerOpen}
        onClose={() => setIsAttendanceTrackerOpen(false)}
        course={selectedCourse}
        students={students}
      />

      <MaterialUploadSection
        isOpen={isMaterialUploadOpen}
        onClose={() => setIsMaterialUploadOpen(false)}
        course={selectedCourse}
      />
    </div>
  );
};

export default LecturerDashboard;
