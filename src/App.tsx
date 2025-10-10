import { Hero } from "@components/hero";
import { Layout } from "@components/layout";
import { Navigation } from "@components/navigation";

function App() {
  return (
    <>
      <Layout>
        <Navigation />
        <Hero />
      </Layout>
    </>
  );
}

export default App;
