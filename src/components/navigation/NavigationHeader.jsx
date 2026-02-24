import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../AppIcon";

const NavigationHeader = ({
  userRole = "student",
  userName = "Pengguna",
  isAuthenticated = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  const navigationItems = {
    student: [
      {
        path: "/student-dashboard",
        label: "Dashboard",
        icon: "LayoutDashboard",
      },
      {
        path: "/academic-calendar",
        label: "Kalender Akademik",
        icon: "Calendar",
      },
    ],
    lecturer: [
      {
        path: "/lecturer-dashboard",
        label: "Dashboard",
        icon: "LayoutDashboard",
      },
      {
        path: "/academic-calendar",
        label: "Kalender Akademik",
        icon: "Calendar",
      },
    ],
  };

  const currentNavItems = isAuthenticated
    ? navigationItems?.[userRole] || []
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userMenuRef?.current &&
        !userMenuRef?.current?.contains(event?.target)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    setIsUserMenuOpen(false);
    navigate("/login-form");
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const getRoleLabel = (role) => {
    return role === "student" ? "Mahasiswa" : "Dosen";
  };

  return (
    <>
      <header className="nav-header shadow-warm">
        <Link
          to={isAuthenticated ? `/${userRole}-dashboard` : "/login-form"}
          className="nav-header-logo"
        >
          <div className="nav-header-logo-icon">
            <Icon name="GraduationCap" size={24} />
          </div>
          <span className="nav-header-logo-text">StudentLecturerPortal</span>
        </Link>

        {isAuthenticated && (
          <>
            <nav className="nav-header-menu">
              {currentNavItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`nav-header-menu-item ${isActivePath(item?.path) ? "active" : ""}`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </nav>

            <div className="user-menu-dropdown" ref={userMenuRef}>
              <button
                className="user-menu-trigger"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <Icon name="User" size={20} />
                <span className="font-medium">{userName}</span>
                <Icon name="ChevronDown" size={16} />
              </button>

              <div
                className={`user-menu-content shadow-warm-md ${isUserMenuOpen ? "open" : ""}`}
              >
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-foreground">
                    {userName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getRoleLabel(userRole)}
                  </p>
                </div>
                <div className="user-menu-divider" />
                <Link
                  to="/profile"
                  className="user-menu-item"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  <Icon name="User" size={18} />
                  <span>Profil Saya</span>
                </Link>
                <div className="user-menu-divider" />
                <button
                  className="user-menu-item w-full text-left"
                  onClick={handleLogout}
                >
                  <Icon name="LogOut" size={18} />
                  <span>Keluar</span>
                </button>
              </div>
            </div>
          </>
        )}
      </header>
      {isAuthenticated && (
        <>
          <button
            className="mobile-menu-button lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>

          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay lg:hidden">
              <div className="mb-6 p-4 bg-card rounded-lg border border-border">
                <p className="text-lg font-semibold text-foreground">
                  {userName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {getRoleLabel(userRole)}
                </p>
              </div>

              <nav className="mobile-menu-nav">
                {currentNavItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`mobile-menu-nav-item ${isActivePath(item?.path) ? "active" : ""}`}
                    onClick={handleMobileNavClick}
                  >
                    <Icon name={item?.icon} size={24} />
                    <span>{item?.label}</span>
                  </Link>
                ))}

                <div className="h-px bg-border my-4" />

                <Link
                  to="/profile"
                  className="mobile-menu-nav-item"
                  onClick={handleMobileNavClick}
                >
                  <Icon name="User" size={24} />
                  <span>Profil Saya</span>
                </Link>

                <button
                  className="mobile-menu-nav-item w-full text-left"
                  onClick={() => {
                    handleMobileNavClick();
                    handleLogout();
                  }}
                >
                  <Icon name="LogOut" size={24} />
                  <span>Keluar</span>
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default NavigationHeader;
