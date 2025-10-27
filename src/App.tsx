import { Layout } from "@components/layout";

import { ThemeProvider } from "@components/theme-provider";
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Outlet />
        <Navigation />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
