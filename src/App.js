import { useEffect } from "react";
import LinksSlider from "./components/LinksSlider/LinksSlider";
import Navbar from "./components/Navbar/Navbar";
import SkipToMainContent from "./components/SkipToMainContent/SkipToMainContent";

import { About, Education, Footer, Home, MainProject, Skills } from "./screens";

function App() {
    useEffect(() => {
        document.querySelector(".loader").classList.add("deactivate");
    }, []);

    return (
        <div className="App">
            <SkipToMainContent to="#main-content" />
            <Navbar />
            <LinksSlider />

            <Home />
            <About />
            <Skills />
            <MainProject />
            <Education />
            <Footer />
        </div>
    );
}

export default App;
