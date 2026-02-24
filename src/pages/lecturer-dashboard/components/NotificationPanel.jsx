import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const NotificationPanel = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "Tugas Baru Dikumpulkan",
      message: "Mahasiswa telah mengumpulkan tugas Algoritma dan Struktur Data",
      time: "2 jam yang lalu",
      type: "info",
    },
    {
      id: 2,
      title: "Pemberitahuan Nilai",
      message: "Nilai Pemrograman Web telah diupdate",
      time: "5 jam yang lalu",
      type: "success",
    },
    {
      id: 3,
      title: "Reminder Absensi",
      message: "Jangan lupa mengisi absensi hari ini",
      time: "1 hari yang lalu",
      type: "warning",
    },
  ]);

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
          <Icon name="Bell" size={24} />
          Notifikasi
        </h3>
        <button className="text-sm text-primary hover:underline">
          Tandai semua dibaca
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  notif.type === "success"
                    ? "bg-success/10 text-success"
                    : notif.type === "warning"
                      ? "bg-warning/10 text-warning"
                      : "bg-primary/10 text-primary"
                }`}
              >
                <Icon
                  name={
                    notif.type === "success"
                      ? "CheckCircle"
                      : notif.type === "warning"
                        ? "AlertTriangle"
                        : "Info"
                  }
                  size={20}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {notif.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {notif.message}
                </p>
                <p className="text-xs text-muted-foreground">{notif.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <Button variant="outline" className="w-full">
          Lihat Semua Notifikasi
        </Button>
      </div>
    </div>
  );
};

export default NotificationPanel;
