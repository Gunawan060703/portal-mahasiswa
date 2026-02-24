import React, { useState } from "react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const GradeEntryModal = ({ isOpen, onClose, course, students }) => {
  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [grades, setGrades] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const assessmentOptions = [
    { value: "uts", label: "Ujian Tengah Semester (UTS)" },
    { value: "uas", label: "Ujian Akhir Semester (UAS)" },
    { value: "tugas1", label: "Tugas 1" },
    { value: "tugas2", label: "Tugas 2" },
    { value: "quiz", label: "Kuis" },
    { value: "praktikum", label: "Praktikum" },
  ];

  const handleGradeChange = (studentId, value) => {
    setGrades((prev) => ({
      ...prev,
      [studentId]: value,
    }));
  };

  const handleSaveGrades = () => {
    console.log("Saving grades:", { assessment: selectedAssessment, grades });
    onClose();
  };

  const filteredStudents = students?.filter(
    (student) =>
      student?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      student?.nim?.includes(searchQuery),
  );

  const calculateGPA = (score) => {
    if (score >= 85) return "A";
    if (score >= 80) return "A-";
    if (score >= 75) return "B+";
    if (score >= 70) return "B";
    if (score >= 65) return "B-";
    if (score >= 60) return "C+";
    if (score >= 55) return "C";
    if (score >= 50) return "D";
    return "E";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-xl shadow-warm-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Input Nilai
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
            <Select
              label="Jenis Penilaian"
              placeholder="Pilih jenis penilaian"
              options={assessmentOptions}
              value={selectedAssessment}
              onChange={setSelectedAssessment}
              required
            />
            <Input
              label="Cari Mahasiswa"
              type="search"
              placeholder="Nama atau NIM"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              className="mb-0"
            />
          </div>

          {selectedAssessment && (
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                        NIM
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                        Nama Mahasiswa
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                        Nilai
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredStudents?.map((student) => {
                      const score = grades?.[student?.id] || "";
                      const grade = score
                        ? calculateGPA(parseFloat(score))
                        : "-";

                      return (
                        <tr
                          key={student?.id}
                          className="hover:bg-muted/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-sm text-foreground whitespace-nowrap">
                            {student?.nim}
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            {student?.name}
                          </td>
                          <td className="px-4 py-3">
                            <Input
                              type="number"
                              placeholder="0-100"
                              min="0"
                              max="100"
                              value={score}
                              onChange={(e) =>
                                handleGradeChange(student?.id, e?.target?.value)
                              }
                              className="max-w-[100px] mx-auto"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`inline-flex items-center justify-center w-10 h-10 rounded-lg font-semibold ${
                                grade === "A" || grade === "A-"
                                  ? "bg-success/10 text-success"
                                  : grade === "B+" ||
                                      grade === "B" ||
                                      grade === "B-"
                                    ? "bg-primary/10 text-primary"
                                    : grade === "C+" || grade === "C"
                                      ? "bg-warning/10 text-warning"
                                      : grade === "D" || grade === "E"
                                        ? "bg-destructive/10 text-destructive"
                                        : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {grade}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 p-4 md:p-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {Object.keys(grades)?.length} dari {students?.length} mahasiswa
            dinilai
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button
              variant="default"
              onClick={handleSaveGrades}
              disabled={
                !selectedAssessment || Object.keys(grades)?.length === 0
              }
              iconName="Save"
              iconPosition="left"
            >
              Simpan Nilai
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeEntryModal;
