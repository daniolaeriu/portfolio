import { Hero } from "@components/hero";
import { Layout } from "@components/layout";
import { Navigation } from "@components/navigation";
import { ThemeProvider } from "@components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Navigation />
        <Hero />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
