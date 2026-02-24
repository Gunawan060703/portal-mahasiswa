import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Icon from "../../../components/AppIcon";

const StudentProgressChart = ({ courseData }) => {
  const gradeDistribution = [
    { name: "A", value: 12, color: "#38A169" },
    { name: "B", value: 18, color: "#3282B8" },
    { name: "C", value: 8, color: "#D69E2E" },
    { name: "D", value: 3, color: "#E67E22" },
    { name: "E", value: 1, color: "#E53E3E" },
  ];

  const assignmentCompletion = [
    { week: "Minggu 1", completed: 38, pending: 4 },
    { week: "Minggu 2", completed: 35, pending: 7 },
    { week: "Minggu 3", completed: 40, pending: 2 },
    { week: "Minggu 4", completed: 42, pending: 0 },
    { week: "Minggu 5", completed: 36, pending: 6 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="BarChart3" size={20} className="text-primary" />
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Distribusi Nilai
          </h3>
        </div>
        <div
          className="w-full h-64 md:h-80"
          aria-label="Grade Distribution Pie Chart"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={gradeDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100)?.toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {gradeDistribution?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
          {gradeDistribution?.map((grade) => (
            <div key={grade?.name} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: grade?.color }}
              />
              <span className="text-sm text-foreground font-medium">
                {grade?.name}: {grade?.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="TrendingUp" size={20} className="text-primary" />
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Penyelesaian Tugas
          </h3>
        </div>
        <div
          className="w-full h-64 md:h-80"
          aria-label="Assignment Completion Bar Chart"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={assignmentCompletion}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
              <XAxis dataKey="week" stroke="var(--color-foreground)" />
              <YAxis stroke="var(--color-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="completed"
                fill="#38A169"
                name="Selesai"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="pending"
                fill="#E67E22"
                name="Pending"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rata-rata Kelas</p>
              <p className="text-2xl font-bold text-foreground">78.5</p>
            </div>
          </div>
          <p className="text-xs text-success">+2.3 dari semester lalu</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="Users" size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tingkat Kehadiran</p>
              <p className="text-2xl font-bold text-foreground">92%</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            38 dari 42 mahasiswa aktif
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-warm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
              <Icon name="AlertCircle" size={20} className="text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Perlu Perhatian</p>
              <p className="text-2xl font-bold text-foreground">5</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Mahasiswa dengan nilai &lt; 60
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProgressChart;
