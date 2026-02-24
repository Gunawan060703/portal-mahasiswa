import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const GradeEntryModal = ({ isOpen, onClose, student }) => {
  const [gradeData, setGradeData] = useState({
    assignment: "",
    score: "",
    grade: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting grade:", gradeData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card rounded-xl shadow-lg w-full max-w-md mx-4 p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Entry Nilai - {student?.name}
          </h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Select
            label="Tugas"
            value={gradeData.assignment}
            onChange={(e) =>
              setGradeData({ ...gradeData, assignment: e.target.value })
            }
            options={[
              { value: "tugas1", label: "Tugas 1" },
              { value: "tugas2", label: "Tugas 2" },
              { value: "uts", label: "UTS" },
              { value: "uas", label: "UAS" },
            ]}
            required
          />

          <Input
            label="Skor (0-100)"
            type="number"
            min="0"
            max="100"
            value={gradeData.score}
            onChange={(e) =>
              setGradeData({ ...gradeData, score: e.target.value })
            }
            required
          />

          <Select
            label="Grade"
            value={gradeData.grade}
            onChange={(e) =>
              setGradeData({ ...gradeData, grade: e.target.value })
            }
            options={[
              { value: "A", label: "A" },
              { value: "B+", label: "B+" },
              { value: "B", label: "B" },
              { value: "C+", label: "C+" },
              { value: "C", label: "C" },
              { value: "D", label: "D" },
              { value: "E", label: "E" },
            ]}
            required
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Catatan (Opsional)
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Tambahkan catatan..."
              value={gradeData.notes}
              onChange={(e) =>
                setGradeData({ ...gradeData, notes: e.target.value })
              }
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Batal
            </Button>
            <Button type="submit" className="flex-1">
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GradeEntryModal;
