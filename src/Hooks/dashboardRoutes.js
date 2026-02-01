import HomeIcon from "@mui/icons-material/Home";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export const dashboardDrawerRoutes = [
  {
    label: "Dashboard",
    path: "",
    icon: HomeIcon,
  },
    {
    label: "Users",
    path: "/dashboard/users",
    icon: PeopleOutlineIcon,
  },
  {
    label: "Booking",
    path: "/dashboard/booking",
    icon: BookOnlineIcon,
  },
  {
    label: "Rooms",
    path: "/dashboard/rooms",
    icon: AutoAwesomeMosaicIcon,
  },
  {
    label: "Change Password",
    path: "/changepass",
    icon: LockOutlinedIcon,
  },
  {
    label: "LogOut",
    action: "logout", // 👈 مهم
    icon: LogoutIcon,
  },
];
