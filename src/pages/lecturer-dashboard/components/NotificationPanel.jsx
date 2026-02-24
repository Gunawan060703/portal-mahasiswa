import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const NotificationPanel = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: "submission",
      title: "Tugas Baru Dikumpulkan",
      message: "5 mahasiswa telah mengumpulkan Tugas 2 - Pemrograman Web",
      time: "10 menit yang lalu",
      read: false,
      icon: "FileText",
      color: "text-primary",
    },
    {
      id: 2,
      type: "question",
      title: "Pertanyaan dari Mahasiswa",
      message: "Ahmad Rizki bertanya tentang materi JavaScript Async/Await",
      time: "1 jam yang lalu",
      read: false,
      icon: "MessageCircle",
      color: "text-warning",
    },
    {
      id: 3,
      type: "deadline",
      title: "Deadline Penilaian",
      message: "Batas waktu input nilai UTS: 2 hari lagi",
      time: "3 jam yang lalu",
      read: true,
      icon: "Clock",
      color: "text-destructive",
    },
    {
      id: 4,
      type: "announcement",
      title: "Pengumuman Akademik",
      message: "Rapat koordinasi dosen Fakultas Teknik - 26 Februari 2026",
      time: "5 jam yang lalu",
      read: true,
      icon: "Bell",
      color: "text-accent",
    },
    {
      id: 5,
      type: "attendance",
      title: "Reminder Absensi",
      message: "Jangan lupa mengisi absensi kelas Pemrograman Web hari ini",
      time: "1 hari yang lalu",
      read: true,
      icon: "CheckCircle",
      color: "text-success",
    },
  ]);

  const unreadCount = notifications?.filter((n) => !n?.read)?.length;

  return (
    <div className="bg-card border border-border rounded-xl shadow-warm overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Bell" size={24} className="text-primary" />
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                Notifikasi
              </h2>
              {unreadCount > 0 && (
                <p className="text-sm text-muted-foreground">
                  {unreadCount} notifikasi belum dibaca
                </p>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" iconName="Settings" iconSize={18}>
            Pengaturan
          </Button>
        </div>
      </div>
      <div className="divide-y divide-border max-h-[500px] overflow-y-auto">
        {notifications?.map((notification) => (
          <div
            key={notification?.id}
            className={`p-4 hover:bg-muted/50 transition-colors cursor-pointer ${
              !notification?.read ? "bg-primary/5" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 ${notification?.color}`}
              >
                <Icon name={notification?.icon} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-1">
                    {notification?.title}
                  </h3>
                  {!notification?.read && (
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {notification?.message}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {notification?.time}
                  </span>
                  {!notification?.read && (
                    <Button variant="ghost" size="xs">
                      Tandai Dibaca
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border">
        <Button variant="outline" fullWidth iconName="Eye" iconPosition="left">
          Lihat Semua Notifikasi
        </Button>
      </div>
    </div>
  );
};

export default NotificationPanel;
