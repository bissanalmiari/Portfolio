import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Hero } from "../sections/Hero";
import { HireMe } from "../sections/HireMe";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Technologies } from "../sections/Technologies";



export const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Technologies/>
            <Skills/>
            <Projects/>
            <HireMe/>
            <Contact/>
            <Footer/>

        </>

    );
}