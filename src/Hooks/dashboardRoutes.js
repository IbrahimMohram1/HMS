import HomeIcon from "@mui/icons-material/Home";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LogoutIcon from "@mui/icons-material/Logout";
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
    label: "LogOut",
    action: "logout", // 👈 مهم
    icon: LogoutIcon,
  },
];
