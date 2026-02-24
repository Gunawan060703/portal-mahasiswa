import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const ScheduleWidget = ({ schedule }) => {
  const [viewMode, setViewMode] = useState("today");

  const getTodaySchedule = () => {
    const today = new Date()?.toLocaleDateString("id-ID", { weekday: "long" });
    return schedule?.filter((item) => item?.day === today);
  };

  const getTimeStatus = (startTime) => {
    const now = new Date();
    const [hours, minutes] = startTime?.split(":");
    const classTime = new Date();
    classTime?.setHours(parseInt(hours), parseInt(minutes), 0);

    const diffMinutes = (classTime - now) / (1000 * 60);

    if (diffMinutes < -60)
      return {
        status: "completed",
        text: "Selesai",
        color: "text-muted-foreground",
      };
    if (diffMinutes < 0)
      return {
        status: "ongoing",
        text: "Sedang Berlangsung",
        color: "text-success",
      };
    if (diffMinutes < 30)
      return { status: "soon", text: "Segera Dimulai", color: "text-warning" };
    return { status: "upcoming", text: "Akan Datang", color: "text-primary" };
  };

  const displaySchedule = viewMode === "today" ? getTodaySchedule() : schedule;

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
          <Icon name="Calendar" size={24} />
          Jadwal Kuliah
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("today")}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
              viewMode === "today"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Hari Ini
          </button>
          <button
            onClick={() => setViewMode("week")}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
              viewMode === "week"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Minggu Ini
          </button>
        </div>
      </div>
      <div className="space-y-3">
        {displaySchedule?.length === 0 ? (
          <div className="text-center py-8">
            <Icon
              name="CalendarOff"
              size={48}
              className="mx-auto text-muted-foreground mb-3"
            />
            <p className="text-muted-foreground">
              Tidak ada jadwal untuk hari ini
            </p>
          </div>
        ) : (
          displaySchedule?.map((item, index) => {
            const timeStatus =
              viewMode === "today" ? getTimeStatus(item?.startTime) : null;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all ${
                  timeStatus?.status === "ongoing"
                    ? "bg-success/5 border-success"
                    : timeStatus?.status === "soon"
                      ? "bg-warning/5 border-warning"
                      : "bg-muted/50 border-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-16 md:w-20 text-center">
                    <div className="text-lg md:text-xl font-bold text-foreground">
                      {item?.startTime}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item?.endTime}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm md:text-base line-clamp-2 mb-1">
                      {item?.courseName}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Icon name="User" size={14} className="flex-shrink-0" />
                        <span className="line-clamp-1">{item?.lecturer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Icon
                          name="MapPin"
                          size={14}
                          className="flex-shrink-0"
                        />
                        <span className="line-clamp-1">{item?.location}</span>
                      </div>
                      {viewMode === "week" && (
                        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                          <Icon
                            name="Calendar"
                            size={14}
                            className="flex-shrink-0"
                          />
                          <span>{item?.day}</span>
                        </div>
                      )}
                    </div>
                    {timeStatus && (
                      <div className="mt-2">
                        <span
                          className={`text-xs font-medium ${timeStatus?.color}`}
                        >
                          {timeStatus?.text}
                        </span>
                      </div>
                    )}
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

export default ScheduleWidget;
