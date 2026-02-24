import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CourseCard = ({ course }) => {
  const getGradeColor = (grade) => {
    if (!grade) return "text-muted-foreground";
    const numGrade = parseFloat(grade);
    if (numGrade >= 80) return "text-success";
    if (numGrade >= 70) return "text-primary";
    if (numGrade >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm hover:shadow-warm-md transition-all">
      <div className="flex items-start gap-3 md:gap-4 mb-4">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
          <Image
            src={course?.image}
            alt={course?.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-base md:text-lg line-clamp-2 mb-1">
            {course?.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {course?.code}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Icon
            name="User"
            size={16}
            className="text-muted-foreground flex-shrink-0"
          />
          <span className="text-foreground line-clamp-1">
            {course?.lecturer}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Icon
            name="Clock"
            size={16}
            className="text-muted-foreground flex-shrink-0"
          />
          <span className="text-foreground">{course?.nextClass}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Icon
            name="MapPin"
            size={16}
            className="text-muted-foreground flex-shrink-0"
          />
          <span className="text-foreground line-clamp-1">
            {course?.location}
          </span>
        </div>

        {course?.recentGrade && (
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-sm text-muted-foreground">
              Nilai Terakhir:
            </span>
            <span
              className={`text-lg font-semibold ${getGradeColor(course?.recentGrade)}`}
            >
              {course?.recentGrade}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
