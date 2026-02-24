import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/input";
import Select from "../../../components/ui/Select";

const MaterialUploadSection = ({ isOpen, onClose, course }) => {
  const [uploadData, setUploadData] = useState({
    title: "",
    description: "",
    category: "",
    files: [],
  });

  const categoryOptions = [
    { value: "lecture", label: "Materi Kuliah" },
    { value: "slides", label: "Slide Presentasi" },
    { value: "reading", label: "Bahan Bacaan" },
    { value: "video", label: "Video Pembelajaran" },
    { value: "exercise", label: "Latihan Soal" },
    { value: "reference", label: "Referensi Tambahan" },
  ];

  const existingMaterials = [
    {
      id: 1,
      title: "Pengantar Pemrograman Web",
      category: "Materi Kuliah",
      uploadDate: "2026-02-20",
      fileSize: "2.5 MB",
      downloads: 38,
      type: "pdf",
    },
    {
      id: 2,
      title: "HTML & CSS Fundamentals",
      category: "Slide Presentasi",
      uploadDate: "2026-02-18",
      fileSize: "4.1 MB",
      downloads: 42,
      type: "pptx",
    },
    {
      id: 3,
      title: "JavaScript Basics Tutorial",
      category: "Video Pembelajaran",
      uploadDate: "2026-02-15",
      fileSize: "125 MB",
      downloads: 35,
      type: "video",
    },
  ];

  const handleFileSelect = (e) => {
    const files = Array.from(e?.target?.files);
    setUploadData((prev) => ({
      ...prev,
      files: [...prev?.files, ...files],
    }));
  };

  const removeFile = (index) => {
    setUploadData((prev) => ({
      ...prev,
      files: prev?.files?.filter((_, i) => i !== index),
    }));
  };

  const handleUpload = () => {
    console.log("Uploading materials:", uploadData);
    onClose();
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return "FileText";
      case "pptx":
        return "Presentation";
      case "video":
        return "Video";
      default:
        return "File";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-xl shadow-warm-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Upload Materi Kuliah
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

        <div className="p-4 md:p-6 space-y-6 overflow-y-auto flex-1">
          <div className="space-y-4">
            <Input
              label="Judul Materi"
              type="text"
              placeholder="Masukkan judul materi"
              value={uploadData?.title}
              onChange={(e) =>
                setUploadData((prev) => ({ ...prev, title: e?.target?.value }))
              }
              required
            />

            <Select
              label="Kategori Materi"
              placeholder="Pilih kategori"
              options={categoryOptions}
              value={uploadData?.category}
              onChange={(value) =>
                setUploadData((prev) => ({ ...prev, category: value }))
              }
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Deskripsi (Opsional)
              </label>
              <textarea
                className="w-full min-h-[80px] px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tambahkan deskripsi atau catatan untuk materi ini..."
                value={uploadData?.description}
                onChange={(e) =>
                  setUploadData((prev) => ({
                    ...prev,
                    description: e?.target?.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Upload File
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  id="material-upload"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.avi,.mov"
                />
                <label htmlFor="material-upload" className="cursor-pointer">
                  <Icon
                    name="Upload"
                    size={40}
                    className="mx-auto text-muted-foreground mb-3"
                  />
                  <p className="text-sm text-foreground font-medium mb-1">
                    Klik untuk upload atau drag & drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, PPT, Video (Max 100MB per file)
                  </p>
                </label>
              </div>

              {uploadData?.files?.length > 0 && (
                <div className="mt-4 space-y-2">
                  {uploadData?.files?.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <Icon
                          name="FileText"
                          size={20}
                          className="text-primary flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground font-medium truncate">
                            {file?.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {(file?.size / 1024 / 1024)?.toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                        iconName="X"
                        iconSize={16}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon name="FolderOpen" size={20} />
              Materi yang Sudah Diupload
            </h3>
            <div className="space-y-3">
              {existingMaterials?.map((material) => (
                <div
                  key={material?.id}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={getFileIcon(material?.type)}
                        size={20}
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {material?.title}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-muted-foreground">
                          {material?.category}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {material?.fileSize}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {material?.downloads} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      iconName="Download"
                      iconSize={16}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      iconName="Trash2"
                      iconSize={16}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-4 md:p-6 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button
            variant="default"
            onClick={handleUpload}
            disabled={
              !uploadData?.title ||
              !uploadData?.category ||
              uploadData?.files?.length === 0
            }
            iconName="Upload"
            iconPosition="left"
          >
            Upload Materi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaterialUploadSection;
