import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleSelector from "./components/RoleSelector";
import LoginFormFields from "./components/LoginFormFields";
import InstitutionBranding from "./components/InstitutionBranding";
import SupportLinks from "./components/SupportLinks";
import CredentialsInfo from "./components/CredentialsInfo";

const LoginForm = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    general: "",
  });

  // Mock Login Data (NIM & NIDN)
  const mockCredentials = {
    student: {
      username: "23021011",
      password: "ag060703",
    },
    lecturer: {
      username: "23021012",
      password: "dosen123",
    },
  };

  const validateForm = () => {
    const newErrors = {
      username: "",
      password: "",
      general: "",
    };

    if (!formData.username) {
      newErrors.username = "NIM harus diisi";
    }

    if (!formData.password) {
      newErrors.password = "Password harus diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      general: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      const credentials = mockCredentials[selectedRole];

      if (
        formData.username === credentials?.username &&
        formData.password === credentials?.password
      ) {
        const dashboardRoute =
          selectedRole === "student"
            ? "/student-dashboard"
            : "/lecturer-dashboard";

        navigate(dashboardRoute);
      } else {
        setErrors({
          username: "",
          password: "",
          general:
            "NIM atau password salah. Silakan gunakan kredensial demo yang tersedia.",
        });
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-warm-lg border border-border p-6 md:p-8">
          <InstitutionBranding />

          <div className="space-y-6">
            <RoleSelector
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
            />

            {errors.general && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-sm text-destructive">
                  {errors.general}
                </p>
              </div>
            )}

            <LoginFormFields
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              selectedRole={selectedRole}
            />

            <CredentialsInfo />
          </div>

          <SupportLinks />
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Portal Akademik-Universitas Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
