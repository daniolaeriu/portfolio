import { Layout } from "@components/layout";
import { Navigation } from "@components/navigation";
import { ThemeProvider } from "@components/theme-provider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Navigation />
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
