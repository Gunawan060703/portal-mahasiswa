import React from "react";
import { 
  HelpCircle, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight,
  Home,
  Bell,
  BookOpen,
  GraduationCap,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Check,
  AlertCircle,
  Info,
  Loader,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  FileText,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Globe
} from "lucide-react";

const iconMap = {
  HelpCircle,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Home,
  Bell,
  BookOpen,
  GraduationCap,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Check,
  AlertCircle,
  Info,
  Loader,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  FileText,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Globe
};

function Icon({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...props
}) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return (
      <HelpCircle
        size={size}
        color="gray"
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export default Icon;
