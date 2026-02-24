import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const AttendanceTracker = () => {
  const [attendanceData] = useState([
    {
      id: 1,
      courseName: "Algoritma dan Struktur Data",
      courseCode: "TIF001",
      students: 35,
      present: 30,
      absent: 3,
      late: 2,
    },
    {
      id: 2,
      courseName: "Pemrograman Web",
      courseCode: "TIF002",
      students: 28,
      present: 25,
      absent: 2,
      late: 1,
    },
    {
      id: 3,
      courseName: "Basis Data",
      courseCode: "TIF003",
      students: 32,
      present: 28,
      absent: 3,
      late: 1,
    },
  ]);

  const getAttendanceRate = (present, total) => {
    return ((present / total) * 100).toFixed(1);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
        <Icon name="Users" size={24} />
        Absensi Mahasiswa
      </h3>

      <div className="space-y-4">
        {attendanceData.map((course) => (
          <div
            key={course.id}
            className="p-4 rounded-lg border border-border bg-muted/30"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">
                  {course.courseName}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {course.courseCode}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">
                  {getAttendanceRate(course.present, course.students)}%
                </p>
                <p className="text-xs text-muted-foreground">
                  Tingkat Kehadiran
                </p>
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-foreground">
                  Hadir: {course.present}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-foreground">Terlambat: {course.late}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-foreground">
                  Tidak Hadir: {course.absent}
                </span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border">
              <Button variant="outline" size="sm" className="w-full">
                Lihat Detail
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceTracker;
