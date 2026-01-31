import HomeIcon from "@mui/icons-material/Home";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export const dashboardDrawerRoutes = [
  {
    label: "Dashboard",
    path: "",
    icon: HomeIcon,
  },
  {
    label: "Booking",
    path: "/dashboard/booking",
    icon: BookOnlineIcon,
  },
  {
    label: "Facility",
    path: "/dashboard/facility",
    icon: DynamicFormIcon,
  },
  {
    label: "Ads",
    path: "/dashboard/ads",
    icon: CalendarMonthIcon,
  },

  {
    label: "LogOut",
    action: "logout", // 👈 مهم
    icon: LogoutIcon,
  },
];
