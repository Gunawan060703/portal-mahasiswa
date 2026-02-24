import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const AssignmentCreationPanel = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    course: "",
    dueDate: "",
    points: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating assignment:", formData);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
        <Icon name="PlusCircle" size={24} />
        Buat Tugas Baru
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Judul Tugas"
          placeholder="Masukkan judul tugas"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Deskripsi
          </label>
          <textarea
            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Masukkan deskripsi tugas"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <Input
          label="Mata Kuliah"
          placeholder="Pilih mata kuliah"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          required
        />

        <Input
          label="Tanggal Jatuh Tempo"
          type="date"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          required
        />

        <Input
          label="Poin"
          type="number"
          placeholder="Masukkan poin tugas"
          value={formData.points}
          onChange={(e) => setFormData({ ...formData, points: e.target.value })}
          required
        />

        <Button type="submit" className="w-full">
          Buat Tugas
        </Button>
      </form>
    </div>
  );
};

export default AssignmentCreationPanel;
