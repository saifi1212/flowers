import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/landing/Hero";

export default function App() {
  return (
    <>
    <div className="max-w-[1920px] border border-[#121212] w-full mx-auto">
    <Header/>
    <Hero/>
    <Footer/>

    </div>
    </>
  );
}
