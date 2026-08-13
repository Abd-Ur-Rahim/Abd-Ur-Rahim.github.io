import { SideNav } from "./components/layout/SideNav";
import { MobileNav } from "./components/layout/MobileNav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Achievements } from "./sections/Achievements";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <SideNav />
      <MobileNav />
      <div className="lg:ml-72">
        <main>
          <Hero />
          <About />
          <Work />
          <Achievements />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
