import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section1 } from "./pages/Section1";
import { Section2 } from "./pages/Section2";
import { Section3 } from "./pages/Section3";

export const Page = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
};
