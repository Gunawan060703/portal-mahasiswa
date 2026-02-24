import React from "react";
import Icon from "../../../components/AppIcon";

const InstitutionBranding = () => {
  return (
    <div className="text-center mb-6 md:mb-8">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center shadow-warm-md">
          <Icon name="GraduationCap" size={40} color="white" />
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
        Portal Mahasiswa & Dosen
      </h1>
      <p className="text-sm md:text-base text-muted-foreground">
        Portal Akademik Universitas HahahaHihihi
      </p>
    </div>
  );
};

export default InstitutionBranding;
