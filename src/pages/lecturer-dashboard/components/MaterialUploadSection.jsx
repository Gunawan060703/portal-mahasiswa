import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const MaterialUploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
        <Icon name="Upload" size={24} />
        Upload Materi Kuliah
      </h3>

      <div className="space-y-4">
        <Input
          label="Mata Kuliah"
          placeholder="Pilih mata kuliah"
        />

        <Input
          label="Topik Materi"
          placeholder="Masukkan topik materi"
        />

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            File Materi
          </label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <input
              type="file"
              className="hidden"
              id="file-upload"
              onChange={handleFileSelect}
              accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Icon
                name="FileUp"
                size={40}
                className="mx-auto text-muted-foreground mb-2"
              />
              <p className="text-sm text-foreground font-medium">
                {selectedFile ? selectedFile.name : "Klik untuk memilih file"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PDF, DOC, PPT, atau ZIP (Maks. 10MB)
              </p>
            </label>
          </div>
        </div>

        {selectedFile && (
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                {selectedFile.name}
              </span>
              <button
                onClick={() => setSelectedFile(null)}
                className="text-muted-foreground hover:text-destructive"
              >
                ✕
              </button>
            </div>
            {isUploading && (
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
          </div>
        )}

        <Button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          className="w-full"
        >
          {isUploading ? "Mengupload..." : "Upload Materi"}
        </Button>
      </div>
    </div>
  );
};

export default MaterialUploadSection;
