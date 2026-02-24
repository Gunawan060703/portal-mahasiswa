import React from "react";
import Icon from "../../../components/AppIcon";

const GradeTable = ({ grades, gpa }) => {
  const getGradeColor = (grade) => {
    if (grade === "A") return "text-success";
    if (grade === "B" || grade === "B+") return "text-primary";
    if (grade === "C" || grade === "C+") return "text-warning";
    return "text-destructive";
  };

  const getGPAColor = (gpa) => {
    if (gpa >= 3.5) return "text-success";
    if (gpa >= 3.0) return "text-primary";
    if (gpa >= 2.5) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
          <Icon name="Award" size={24} />
          Nilai Semester
        </h3>
        <div className="text-right">
          <p className="text-xs md:text-sm text-muted-foreground">
            IPK Semester
          </p>
          <p className={`text-2xl md:text-3xl font-bold ${getGPAColor(gpa)}`}>
            {gpa?.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Mata Kuliah
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                  SKS
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                  Nilai
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {grades?.map((grade, index) => (
                <tr key={index} className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 md:py-4">
                    <div className="text-sm font-medium text-foreground line-clamp-2">
                      {grade?.courseName}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {grade?.courseCode}
                    </div>
                  </td>
                  <td className="px-4 py-3 md:py-4 text-center whitespace-nowrap">
                    <span className="text-sm font-medium text-foreground">
                      {grade?.credits}
                    </span>
                  </td>
                  <td className="px-4 py-3 md:py-4 text-center whitespace-nowrap">
                    <span className="text-sm font-semibold text-foreground">
                      {grade?.score}
                    </span>
                  </td>
                  <td className="px-4 py-3 md:py-4 text-center whitespace-nowrap">
                    <span
                      className={`text-base md:text-lg font-bold ${getGradeColor(grade?.grade)}`}
                    >
                      {grade?.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4 md:mt-6 pt-4 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="BookOpen" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">Total SKS:</span>
            <span className="font-semibold text-foreground">
              {grades?.reduce((sum, g) => sum + g?.credits, 0)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon
              name="TrendingUp"
              size={16}
              className="text-muted-foreground"
            />
            <span className="text-muted-foreground">Rata-rata Nilai:</span>
            <span className="font-semibold text-foreground">
              {(
                grades?.reduce((sum, g) => sum + g?.score, 0) / grades?.length
              )?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeTable;
