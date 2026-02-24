import React from "react";
import Button from "../../../components/ui/Button";

const QuickActions = () => {
  const actions = [
    {
      label: "Daftar Mata Kuliah",
      icon: "BookOpen",
      variant: "default",
      description: "Daftar mata kuliah semester baru",
    },
    {
      label: "Kumpulkan Tugas",
      icon: "Upload",
      variant: "outline",
      description: "Upload tugas yang belum dikumpulkan",
    },
    {
      label: "Lihat Kalender",
      icon: "Calendar",
      variant: "outline",
      description: "Lihat jadwal akademik lengkap",
    },
    {
      label: "Unduh Transkrip",
      icon: "Download",
      variant: "secondary",
      description: "Download transkrip nilai",
    },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">
        Aksi Cepat
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {actions?.map((action, index) => (
          <div
            key={index}
            className="p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-all group"
          >
            <Button
              variant={action?.variant}
              iconName={action?.icon}
              iconPosition="left"
              fullWidth
              className="mb-2"
            >
              {action?.label}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              {action?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
