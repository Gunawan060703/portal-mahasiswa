import React from "react";
import Button from "../../../components/ui/Button";

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      label: "Lihat Jadwal",
      icon: "Calendar",
      description: "Lihat jadwal kuliah mingguan",
    },
    {
      id: 2,
      label: "Nilai Saya",
      icon: "Award",
      description: "Lihat nilai semester",
    },
    {
      id: 3,
      label: "Tugas",
      icon: "FileText",
      description: "Lihat daftar tugas",
    },
    {
      id: 4,
      label: "Absensi",
      icon: "CheckSquare",
      description: "Lihat riwayat absensi",
    },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">
        Aksi Cepat
      </h3>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            className="p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted hover:border-primary/30 transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <span className="text-lg">{action.icon === "Calendar" && "📅"}</span>
              <span className="text-lg">{action.icon === "Award" && "🏆"}</span>
              <span className="text-lg">{action.icon === "FileText" && "📄"}</span>
              <span className="text-lg">{action.icon === "CheckSquare" && "☑️"}</span>
            </div>
            <p className="font-medium text-foreground text-sm">{action.label}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
