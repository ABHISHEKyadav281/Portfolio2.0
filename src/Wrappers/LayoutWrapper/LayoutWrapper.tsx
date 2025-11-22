import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useTheme } from "../ThemeProvider/ThemeProviderWrapper";

const LayoutWrapper = () => {
  const theme = useTheme();
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.background.default }}
    >
      <div
        className="fixed top-0 left-0 right-0 z-50 py-2 px-2"
        style={{ backgroundColor: theme.background.default }}
      >
        <NavigationBar />
      </div>
      <div style={{ background: theme.background.default }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWrapper;
