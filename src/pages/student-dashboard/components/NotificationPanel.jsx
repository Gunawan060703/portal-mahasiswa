import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const NotificationPanel = ({ notifications }) => {
  const [filter, setFilter] = useState("all");

  const getNotificationIcon = (type) => {
    switch (type) {
      case "grade":
        return { name: "Award", color: "text-success" };
      case "assignment":
        return { name: "FileText", color: "text-warning" };
      case "announcement":
        return { name: "Megaphone", color: "text-primary" };
      case "schedule":
        return { name: "Calendar", color: "text-accent" };
      default:
        return { name: "Bell", color: "text-muted-foreground" };
    }
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const notifTime = new Date(timestamp);
    const diffMinutes = Math.floor((now - notifTime) / (1000 * 60));

    if (diffMinutes < 1) return "Baru saja";
    if (diffMinutes < 60) return `${diffMinutes} menit yang lalu`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} jam yang lalu`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} hari yang lalu`;

    return notifTime?.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
    });
  };

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications?.filter((n) => n?.type === filter);

  const unreadCount = notifications?.filter((n) => !n?.isRead)?.length;

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
          <Icon name="Bell" size={24} />
          Notifikasi
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
              {unreadCount}
            </span>
          )}
        </h3>
      </div>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {["all", "grade", "assignment", "announcement", "schedule"]?.map(
          (type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                filter === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {type === "all" && "Semua"}
              {type === "grade" && "Nilai"}
              {type === "assignment" && "Tugas"}
              {type === "announcement" && "Pengumuman"}
              {type === "schedule" && "Jadwal"}
            </button>
          ),
        )}
      </div>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredNotifications?.length === 0 ? (
          <div className="text-center py-8">
            <Icon
              name="BellOff"
              size={48}
              className="mx-auto text-muted-foreground mb-3"
            />
            <p className="text-muted-foreground">Tidak ada notifikasi</p>
          </div>
        ) : (
          filteredNotifications?.map((notification) => {
            const iconConfig = getNotificationIcon(notification?.type);

            return (
              <div
                key={notification?.id}
                className={`p-3 md:p-4 rounded-lg border transition-all cursor-pointer hover:shadow-warm-sm ${
                  notification?.isRead
                    ? "bg-card border-border"
                    : "bg-primary/5 border-primary/20"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center ${iconConfig?.color}`}
                  >
                    <Icon name={iconConfig?.name} size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-foreground text-sm md:text-base line-clamp-2">
                        {notification?.title}
                      </h4>
                      {!notification?.isRead && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-2">
                      {notification?.message}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Clock" size={12} />
                      <span>{getTimeAgo(notification?.timestamp)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
