import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";


export default function AboutPage() {


    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <section className="page">
            <AboutSection></AboutSection>
        
        

        
        <Footer></Footer>

        </section>
     );
}
