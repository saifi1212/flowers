import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import Hero from "./components/landing/Hero";
import Why from "./components/landing/Why";

export default function App() {
  return (
    <>
    <div className="max-w-[1920px] border border-[#121212] w-full mx-auto">
    <Header/>
    <Hero/>
    <About/>
    <Why/>
    <Contact/>
    <Footer/>

    </div>
    </>
  );
}
