import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const NotificationPanel = ({ notifications }) => {
  const [filter, setFilter] = useState("all");

  const filteredNotifications = notifications?.filter((notif) => {
    if (filter === "all") return true;
    return notif?.type === filter;
  });

  const getIconColor = (type) => {
    switch (type) {
      case "success":
        return "bg-success/10 text-success";
      case "warning":
        return "bg-warning/10 text-warning";
      case "error":
        return "bg-destructive/10 text-destructive";
      case "info":
      default:
        return "bg-primary/10 text-primary";
    }
  };

  const getIconName = (type) => {
    switch (type) {
      case "success":
        return "CheckCircle";
      case "warning":
        return "AlertTriangle";
      case "error":
        return "XCircle";
      case "info":
      default:
        return "Info";
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
          <Icon name="Bell" size={24} />
          Notifikasi
        </h3>
        <span className="text-xs md:text-sm text-muted-foreground">
          {filteredNotifications?.length} notifikasi
        </span>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
            filter === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Semua
        </button>
        <button
          onClick={() => setFilter("info")}
          className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
            filter === "info"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Info
        </button>
        <button
          onClick={() => setFilter("success")}
          className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
            filter === "success"
              ? "bg-success text-success-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Sukses
        </button>
        <button
          onClick={() => setFilter("warning")}
          className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
            filter === "warning"
              ? "bg-warning text-warning-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Peringatan
        </button>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto">
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
          filteredNotifications?.map((notif, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getIconColor(
                    notif?.type,
                  )}`}
                >
                  <Icon name={getIconName(notif?.type)} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">
                    {notif?.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-2">
                    {notif?.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(notif?.timestamp)?.toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {!notif?.read && (
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
