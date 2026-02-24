import React from "react";
import Icon from "../../../components/AppIcon";

const SupportLinks = () => {
  return (
    <div className="mt-6 pt-6 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          <Icon name="HelpCircle" size={16} />
          <span>Bantuan</span>
        </a>
        <span className="text-muted-foreground hidden sm:inline">•</span>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          <Icon name="FileText" size={16} />
          <span>Ketentuan</span>
        </a>
        <span className="text-muted-foreground hidden sm:inline">•</span>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          <Icon name="Shield" size={16} />
          <span>Privasi</span>
        </a>
      </div>
    </div>
  );
};

export default SupportLinks;
