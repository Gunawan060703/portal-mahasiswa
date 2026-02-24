import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const CredentialsInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const credentials = [
    {
      role: "Mahasiswa",
      username: "23021011",
      password: "ag060703",
    },
    {
      role: "Dosen",
      username: "23021012",
      password: "dosen123",
    },
  ];

  return (
    <div className="mt-6 bg-muted/50 rounded-lg border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/70 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon name="Info" size={18} className="text-primary" />
          <span className="text-sm font-medium text-foreground">
            Kredensial Demo
          </span>
        </div>
        <Icon
          name={isExpanded ? "ChevronUp" : "ChevronDown"}
          size={18}
          className="text-muted-foreground"
        />
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-3">
          {credentials.map((cred, index) => {
            // 🔥 Dynamic Label
            const label = cred.role === "Dosen" ? "NIDN" : "NIM";

            return (
              <div
                key={index}
                className="bg-card rounded-md p-3 border border-border"
              >
                <p className="text-xs font-semibold text-primary mb-2">
                  {cred.role}
                </p>

                <div className="space-y-1 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground min-w-[50px]">
                      {label}:
                    </span>
                    <span className="text-foreground font-mono break-all">
                      {cred.username}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground min-w-[50px]">
                      Password:
                    </span>
                    <span className="text-foreground font-mono">
                      {cred.password}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CredentialsInfo;
