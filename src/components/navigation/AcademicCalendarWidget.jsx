import React, { useState } from "react";
import Icon from "../AppIcon";

const AcademicCalendarWidget = ({ userRole = "student" }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const academicEvents = {
    student: [
      { date: "2026-02-28", title: "Ujian Tengah Semester", type: "exam" },
      {
        date: "2026-03-15",
        title: "Pengumpulan Tugas Akhir",
        type: "assignment",
      },
      { date: "2026-03-20", title: "Libur Semester", type: "holiday" },
    ],
    lecturer: [
      { date: "2026-02-28", title: "Ujian Tengah Semester", type: "exam" },
      { date: "2026-03-01", title: "Deadline Nilai UTS", type: "deadline" },
      { date: "2026-03-15", title: "Rapat Dosen", type: "meeting" },
      { date: "2026-03-20", title: "Libur Semester", type: "holiday" },
    ],
  };

  const events = academicEvents?.[userRole] || [];

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    return new Date(year, month + 1, 0)?.getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    return new Date(year, month, 1)?.getDay();
  };

  const hasEvent = (day) => {
    const year = currentDate?.getFullYear();
    const month = String(currentDate?.getMonth() + 1)?.padStart(2, "0");
    const dayStr = String(day)?.padStart(2, "0");
    const dateStr = `${year}-${month}-${dayStr}`;
    return events?.some((event) => event?.date === dateStr);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today?.getDate() &&
      currentDate?.getMonth() === today?.getMonth() &&
      currentDate?.getFullYear() === today?.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      const prevMonthDays = getDaysInMonth(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
      );
      let day = prevMonthDays - firstDay + i + 1;
      days?.push(
        <div key={`prev-${i}`} className="calendar-day other-month">
          {day}
        </div>,
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const hasEventClass = hasEvent(day) ? "has-event" : "";
      const todayClass = isToday(day) ? "today" : "";
      const selectedClass = selectedDate === day ? "ring-2 ring-primary" : "";

      days?.push(
        <div
          key={day}
          className={`calendar-day ${hasEventClass} ${todayClass} ${selectedClass}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </div>,
      );
    }

    const remainingDays = 42 - days?.length;
    for (let i = 1; i <= remainingDays; i++) {
      days?.push(
        <div key={`next-${i}`} className="calendar-day other-month">
          {i}
        </div>,
      );
    }

    return days;
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    const year = currentDate?.getFullYear();
    const month = String(currentDate?.getMonth() + 1)?.padStart(2, "0");
    const dayStr = String(selectedDate)?.padStart(2, "0");
    const dateStr = `${year}-${month}-${dayStr}`;
    return events?.filter((event) => event?.date === dateStr);
  };

  const selectedDateEvents = getEventsForSelectedDate();

  return (
    <div className="calendar-widget shadow-warm">
      <div className="calendar-header">
        <h3 className="calendar-title">
          {monthNames?.[currentDate?.getMonth()]} {currentDate?.getFullYear()}
        </h3>
        <div className="calendar-nav">
          <button
            className="calendar-nav-button"
            onClick={handlePrevMonth}
            aria-label="Previous month"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <button
            className="calendar-nav-button"
            onClick={handleNextMonth}
            aria-label="Next month"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
      <div className="calendar-grid">
        {dayNames?.map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
      {selectedDateEvents?.length > 0 && (
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Icon name="Calendar" size={18} />
            Acara pada {selectedDate} {monthNames?.[currentDate?.getMonth()]}
          </h4>
          <div className="space-y-2">
            {selectedDateEvents?.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-card rounded-md border border-border"
              >
                <div className="mt-0.5">
                  {event?.type === "exam" && (
                    <Icon name="FileText" size={16} className="text-error" />
                  )}
                  {event?.type === "assignment" && (
                    <Icon name="BookOpen" size={16} className="text-warning" />
                  )}
                  {event?.type === "deadline" && (
                    <Icon name="Clock" size={16} className="text-destructive" />
                  )}
                  {event?.type === "meeting" && (
                    <Icon name="Users" size={16} className="text-primary" />
                  )}
                  {event?.type === "holiday" && (
                    <Icon name="Sun" size={16} className="text-success" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {event?.title}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {event?.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span>Hari Ini</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span>Ada Acara</span>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarWidget;
