
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useLocation } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Cards from "./Cards";
import CardDetails from "./CardDetails";
import Settings from "./Settings";
import Onboarding from "./Onboarding";
import Referrals from "./Referrals";
import Systems from "./Systems";
import Contacts from "./Contacts";
import Earnings from "../Earnings";
import Accessories from "./Accessories";
import Support from "./Support";
import PlaceholderPage from "./PlaceholderPage";

export default function Dashboard() {
  const location = useLocation();
  const path = location.pathname;

  // Render the appropriate component based on the current path
  const renderContent = () => {
    if (path === "/dashboard" || path === "/dashboard/") {
      return <DashboardHome />;
    } else if (path === "/dashboard/cards") {
      return <Cards />;
    } else if (path.startsWith("/dashboard/cards/")) {
      return <CardDetails />;
    } else if (path === "/dashboard/settings") {
      return <Settings />;
    } else if (path === "/dashboard/referrals") {
      return <Referrals />;
    } else if (path === "/dashboard/contacts") {
      return <Contacts />;
    } else if (path === "/dashboard/earnings") {
      return <Earnings />;
    } else if (path === "/dashboard/accessories") {
      return <Accessories />;
    } else if (path === "/dashboard/support") {
      return <Support />;
    } else if (path === "/dashboard/systems") {
      return <Systems />;
    } else if (path === "/dashboard/get-started") {
      return <PlaceholderPage title="Get Started" />;
    } else {
      return <PlaceholderPage title="Not Found" />;
    }
  };

  return (
    <DashboardLayout>
      {renderContent()}
    </DashboardLayout>
  );
}
