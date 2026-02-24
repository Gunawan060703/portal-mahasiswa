import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const AssignmentCreationPanel = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    maxScore: "100",
    type: "",
    attachments: [],
  });

  const assignmentTypes = [
    { value: "individual", label: "Tugas Individual" },
    { value: "group", label: "Tugas Kelompok" },
    { value: "quiz", label: "Kuis" },
    { value: "project", label: "Proyek" },
    { value: "presentation", label: "Presentasi" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e?.target?.files);
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev?.attachments, ...files],
    }));
  };

  const removeAttachment = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev?.attachments?.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log("Creating assignment:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-xl shadow-warm-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Buat Tugas Baru
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

        <form
          onSubmit={handleSubmit}
          className="p-4 md:p-6 space-y-4 overflow-y-auto flex-1"
        >
          <Input
            label="Judul Tugas"
            type="text"
            placeholder="Masukkan judul tugas"
            value={formData?.title}
            onChange={(e) => handleInputChange("title", e?.target?.value)}
            required
          />

          <Select
            label="Jenis Tugas"
            placeholder="Pilih jenis tugas"
            options={assignmentTypes}
            value={formData?.type}
            onChange={(value) => handleInputChange("type", value)}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Deskripsi Tugas
            </label>
            <textarea
              className="w-full min-h-[120px] px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Jelaskan detail tugas, kriteria penilaian, dan instruksi pengerjaan..."
              value={formData?.description}
              onChange={(e) =>
                handleInputChange("description", e?.target?.value)
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Tanggal Deadline"
              type="date"
              value={formData?.dueDate}
              onChange={(e) => handleInputChange("dueDate", e?.target?.value)}
              required
            />
            <Input
              label="Waktu Deadline"
              type="time"
              value={formData?.dueTime}
              onChange={(e) => handleInputChange("dueTime", e?.target?.value)}
              required
            />
            <Input
              label="Nilai Maksimal"
              type="number"
              placeholder="100"
              value={formData?.maxScore}
              onChange={(e) => handleInputChange("maxScore", e?.target?.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Lampiran (Opsional)
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Icon
                  name="Upload"
                  size={32}
                  className="mx-auto text-muted-foreground mb-2"
                />
                <p className="text-sm text-muted-foreground mb-1">
                  Klik untuk upload file atau drag & drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, DOC, DOCX, PPT, PPTX (Max 10MB)
                </p>
              </label>
            </div>

            {formData?.attachments?.length > 0 && (
              <div className="mt-3 space-y-2">
                {formData?.attachments?.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Icon
                        name="FileText"
                        size={18}
                        className="text-primary flex-shrink-0"
                      />
                      <span className="text-sm text-foreground truncate">
                        {file?.name}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeAttachment(index)}
                      iconName="X"
                      iconSize={16}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>

        <div className="flex items-center justify-end gap-3 p-4 md:p-6 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button
            variant="default"
            onClick={handleSubmit}
            iconName="Plus"
            iconPosition="left"
          >
            Buat Tugas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCreationPanel;
