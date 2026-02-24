import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const CourseCard = ({
  course,
  onViewDetails,
  onManageGrades,
  onUploadMaterial,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-success/10 text-success border-success/20";
      case "upcoming":
        return "bg-warning/10 text-warning border-warning/20";
      case "completed":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "active":
        return "Aktif";
      case "upcoming":
        return "Akan Datang";
      case "completed":
        return "Selesai";
      default:
        return status;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-warm hover:shadow-warm-md transition-all">
      <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden bg-muted">
        <Image
          src={course?.image}
          alt={course?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(course?.status)}`}
          >
            {getStatusLabel(course?.status)}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 line-clamp-1">
              {course?.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {course?.code}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconSize={20}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-muted-foreground">
              {course?.enrolledStudents} Mahasiswa
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-muted-foreground">{course?.credits} SKS</span>
          </div>
          <div className="flex items-center gap-2 text-sm col-span-2 md:col-span-1">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span className="text-muted-foreground">{course?.schedule}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-border">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Icon name="FileText" size={16} />
                Aktivitas Terkini
              </h4>
              <div className="space-y-2">
                {course?.recentActivity?.map((activity, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{activity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Icon name="BookOpen" size={16} />
                Materi Tersedia
              </h4>
              <p className="text-sm text-muted-foreground">
                {course?.materialsCount} file materi
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <Button
                variant="default"
                size="sm"
                fullWidth
                iconName="Eye"
                iconPosition="left"
                onClick={() => onViewDetails(course)}
              >
                Lihat Detail
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="Edit"
                iconPosition="left"
                onClick={() => onManageGrades(course)}
              >
                Kelola Nilai
              </Button>
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                iconName="Upload"
                iconPosition="left"
                onClick={() => onUploadMaterial(course)}
              >
                Upload Materi
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
