import React from "react";
import Icon from "../../../components/AppIcon";

const SupportLinks = () => {
  return (
    <div className="mt-6 pt-6 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
        <a
          href="#"
          onClick={(e) => e?.preventDefault()}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon name="HelpCircle" size={18} />
          <span>Bantuan</span>
        </a>
        <span className="hidden sm:inline text-border">|</span>
        <a
          href="#"
          onClick={(e) => e?.preventDefault()}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon name="Globe" size={18} />
          <span>Bahasa Indonesia</span>
        </a>
      </div>
    </div>
  );
};

export default SupportLinks;
