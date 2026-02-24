import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const AssignmentCard = ({ assignment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "submitted":
        return "bg-success/10 text-success border-success/20";
      case "late":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Belum Dikumpulkan";
      case "submitted":
        return "Sudah Dikumpulkan";
      case "late":
        return "Terlambat";
      default:
        return "Unknown";
    }
  };

  const daysRemaining = getDaysRemaining(assignment?.dueDate);
  const isUrgent = daysRemaining <= 2 && assignment?.status === "pending";

  return (
    <div
      className={`bg-card border rounded-xl p-4 md:p-5 shadow-warm transition-all ${isUrgent ? "border-destructive" : "border-border"}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground text-sm md:text-base line-clamp-2 mb-1">
            {assignment?.title}
          </h4>
          <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
            {assignment?.courseName}
          </p>
        </div>
        <span
          className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${getStatusColor(assignment?.status)}`}
        >
          {getStatusText(assignment?.status)}
        </span>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Icon
            name="Calendar"
            size={14}
            className="text-muted-foreground flex-shrink-0"
          />
          <span className="text-foreground">
            Deadline:{" "}
            {new Date(assignment.dueDate)?.toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        {assignment?.status === "pending" && (
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Icon
              name="Clock"
              size={14}
              className={
                isUrgent ? "text-destructive" : "text-muted-foreground"
              }
            />
            <span
              className={
                isUrgent ? "text-destructive font-medium" : "text-foreground"
              }
            >
              {daysRemaining > 0 ? `${daysRemaining} hari lagi` : "Hari ini!"}
            </span>
          </div>
        )}

        {assignment?.submittedDate && (
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Icon
              name="CheckCircle"
              size={14}
              className="text-success flex-shrink-0"
            />
            <span className="text-foreground">
              Dikumpulkan:{" "}
              {new Date(assignment.submittedDate)?.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
              })}
            </span>
          </div>
        )}
      </div>
      {isExpanded && (
        <div className="mb-4 p-3 bg-muted rounded-lg">
          <p className="text-sm text-foreground leading-relaxed">
            {assignment?.description}
          </p>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          variant="outline"
          size="sm"
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1"
        >
          {isExpanded ? "Sembunyikan Detail" : "Lihat Detail"}
        </Button>

        {assignment?.status === "pending" && (
          <Button
            variant="default"
            size="sm"
            iconName="Upload"
            iconPosition="left"
            className="flex-1"
          >
            Kumpulkan Tugas
          </Button>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
