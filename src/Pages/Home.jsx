import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = ({persona,profesion,proyectos,habilidades}) => {
    return ( 
        <div>
             <div className="noise" aria-hidden='true'></div>
            <div className="scanlines" aria-hidden='true'></div>
            <Header persona={persona}/>
            <main>
                <Hero  persona={persona} profesion={profesion}/>
                <About persona={persona}/>
                <Skills habilidades={habilidades}/>
                <Projects proyectos={proyectos}/>
                <Contact/>
            </main>
            <Footer persona={persona}/>

        </div>
     );
}
 
export default Home;