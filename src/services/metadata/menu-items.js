import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BarChartIcon from "@mui/icons-material/BarChart";

export const menuItems = [
  {
    title: "MAIN",
    link: null,
    basePath: null,
    materialIconTag: null,
    tag: "bh-main",
    visible: true, //UserHasAccessToPage(PAGES.CUSTOMERS),
    subItems: [
      {
        title: "Dashboard",
        link: "/",
        materialIconTag: "dashboard",
        icon: <DashboardIcon className="icon" />,
        tag: "bh-dasboard",
        visible: true
      }
    ]
  },
  {
    title: "LISTAS",
    link: null,
    basePath: null,
    materialIconTag: null,
    tag: "bh-list",
    visible: true, //UserHasAccessToPage(PAGES.CUSTOMERS),
    subItems: [
      {
        title: "Usuarios",
        link: "/users",
        materialIconTag: "person",
        icon: <PersonIcon className="icon" />,
        tag: "bh-users-list",
        visible: true
      },
      {
        title: "Productos",
        link: "/products",
        materialIconTag: "store",
        icon: <StoreIcon className="icon" />,
        tag: "bh-products-list",
        visible: true
      },
      {
        title: "Ordenes",
        link: "/orders",
        materialIconTag: "receip",
        icon: <ReceiptIcon className="icon" />,
        tag: "bh-orders-list",
        visible: true
      },
      {
        title: "Delivery",
        link: "/delivery",
        materialIconTag: "localShiping",
        icon: <LocalShippingIcon className="icon" />,
        tag: "bh-delivery-list",
        visible: true
      }
    ]
  },
  {
    title: "UTILIDAD",
    link: null,
    basePath: null,
    materialIconTag: null,
    tag: "bh-usefull",
    visible: true, //UserHasAccessToPage(PAGES.CUSTOMERS),
    subItems: [
      {
        title: "Stats",
        link: "/stats",
        materialIconTag: "barChart",
        icon: <BarChartIcon className="icon" />,
        tag: "bh-stats-list",
        visible: true
      },
      {
        title: "Notificaciones",
        link: "/notifications",
        materialIconTag: "notifications",
        icon: <NotificationsIcon className="icon" />,
        tag: "bh-notifications-list",
        visible: true
      }
    ]
  },
  {
    title: "OPTIONES",
    link: null,
    basePath: null,
    materialIconTag: null,
    tag: "bh-options",
    visible: true, //UserHasAccessToPage(PAGES.CUSTOMERS),
    subItems: [
      {
        title: "Sistema",
        link: "/health-check",
        materialIconTag: "monitorHeart",
        icon: <MonitorHeartIcon className="icon" />,
        tag: "bh-health-check-list",
        visible: true
      },
      {
        title: "Logs",
        link: "/logs",
        materialIconTag: "history.",
        icon: <HistoryIcon className="icon" />,
        tag: "bh-logs-list",
        visible: true
      },
      {
        title: "Configuracion",
        link: "/settings",
        materialIconTag: "settings.",
        icon: <SettingsIcon className="icon" />,
        tag: "bh-settings-list",
        visible: true
      }
    ]
  }
];
