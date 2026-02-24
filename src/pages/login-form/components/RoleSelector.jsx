import React from "react";
import Icon from "../../../components/AppIcon";

const RoleSelector = ({ selectedRole, onRoleChange }) => {
  const roles = [
    {
      value: "student",
      label: "Mahasiswa",
      icon: "GraduationCap",
      description: "Akses portal akademik mahasiswa",
    },
    {
      value: "lecturer",
      label: "Dosen",
      icon: "BookOpen",
      description: "Akses portal manajemen dosen",
    },
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-foreground mb-3">
        Pilih Role Anda
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {roles?.map((role) => (
          <button
            key={role?.value}
            type="button"
            onClick={() => onRoleChange(role?.value)}
            className={`
              relative p-4 md:p-5 rounded-lg border-2 transition-all
              ${
                selectedRole === role?.value
                  ? "border-primary bg-primary/5 shadow-warm"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-warm-sm"
              }
            `}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div
                className={`
                w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
                ${
                  selectedRole === role?.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }
              `}
              >
                <Icon name={role?.icon} size={24} />
              </div>
              <div>
                <p
                  className={`
                  font-semibold text-base md:text-lg
                  ${selectedRole === role?.value ? "text-primary" : "text-foreground"}
                `}
                >
                  {role?.label}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {role?.description}
                </p>
              </div>
            </div>
            {selectedRole === role?.value && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Check" size={14} color="white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
