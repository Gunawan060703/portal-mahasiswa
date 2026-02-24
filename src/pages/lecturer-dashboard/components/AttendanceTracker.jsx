import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { Checkbox } from "../../../components/ui/Checkbox";

const AttendanceTracker = ({ isOpen, onClose, course, students }) => {
  const [attendanceDate, setAttendanceDate] = useState(
    new Date()?.toISOString()?.split("T")?.[0],
  );
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  const handleAttendanceChange = (studentId, status) => {
    setAttendanceRecords((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    const newRecords = {};
    students?.forEach((student) => {
      newRecords[student.id] = checked ? "present" : "";
    });
    setAttendanceRecords(newRecords);
  };

  const handleSaveAttendance = () => {
    console.log("Saving attendance:", {
      date: attendanceDate,
      records: attendanceRecords,
    });
    onClose();
  };

  const filteredStudents = students?.filter(
    (student) =>
      student?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      student?.nim?.includes(searchQuery),
  );

  const getAttendanceStats = () => {
    const total = students?.length;
    const present = Object.values(attendanceRecords)?.filter(
      (status) => status === "present",
    )?.length;
    const absent = Object.values(attendanceRecords)?.filter(
      (status) => status === "absent",
    )?.length;
    const late = Object.values(attendanceRecords)?.filter(
      (status) => status === "late",
    )?.length;
    return { total, present, absent, late };
  };

  const stats = getAttendanceStats();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-xl shadow-warm-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Absensi Kelas
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{course?.name}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            iconSize={20}
          />
        </div>

        <div className="p-4 md:p-6 space-y-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Tanggal Pertemuan"
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e?.target?.value)}
              required
            />
            <Input
              label="Cari Mahasiswa"
              type="search"
              placeholder="Nama atau NIM"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Users" size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground">Total</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {stats?.total}
              </p>
            </div>
            <div className="bg-success/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="CheckCircle" size={18} className="text-success" />
                <span className="text-sm text-success">Hadir</span>
              </div>
              <p className="text-2xl font-bold text-success">
                {stats?.present}
              </p>
            </div>
            <div className="bg-destructive/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="XCircle" size={18} className="text-destructive" />
                <span className="text-sm text-destructive">Tidak Hadir</span>
              </div>
              <p className="text-2xl font-bold text-destructive">
                {stats?.absent}
              </p>
            </div>
            <div className="bg-warning/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Clock" size={18} className="text-warning" />
                <span className="text-sm text-warning">Terlambat</span>
              </div>
              <p className="text-2xl font-bold text-warning">{stats?.late}</p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-muted p-4 flex items-center gap-3 border-b border-border">
              <Checkbox
                checked={selectAll}
                onChange={(e) => handleSelectAll(e?.target?.checked)}
                label="Tandai Semua Hadir"
              />
            </div>

            <div className="divide-y divide-border max-h-[400px] overflow-y-auto">
              {filteredStudents?.map((student) => (
                <div
                  key={student?.id}
                  className="p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={student?.avatar}
                      alt={student?.avatarAlt}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground line-clamp-1">
                        {student?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {student?.nim}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={
                          attendanceRecords?.[student?.id] === "present"
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          handleAttendanceChange(student?.id, "present")
                        }
                        iconName="CheckCircle"
                        iconSize={16}
                      >
                        Hadir
                      </Button>
                      <Button
                        variant={
                          attendanceRecords?.[student?.id] === "late"
                            ? "warning"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          handleAttendanceChange(student?.id, "late")
                        }
                        iconName="Clock"
                        iconSize={16}
                      >
                        Terlambat
                      </Button>
                      <Button
                        variant={
                          attendanceRecords?.[student?.id] === "absent"
                            ? "destructive"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          handleAttendanceChange(student?.id, "absent")
                        }
                        iconName="XCircle"
                        iconSize={16}
                      >
                        Tidak Hadir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 p-4 md:p-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {Object.keys(attendanceRecords)?.length} dari {students?.length}{" "}
            mahasiswa tercatat
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button
              variant="default"
              onClick={handleSaveAttendance}
              disabled={Object.keys(attendanceRecords)?.length === 0}
              iconName="Save"
              iconPosition="left"
            >
              Simpan Absensi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;
