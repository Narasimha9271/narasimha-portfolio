import Navbar from "./components/Navbar/Navbar";
import { Home, About, Skills, MainProject, Education, Footer } from "./screens";
import { Experience } from "./screens/Experience/Experience";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Home />
        <About />
        <Experience />
        <MainProject />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
