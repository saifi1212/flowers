import ProductDetailPage from "./components/ProductDetails/Product";
import AboutPage from "./components/about/AboutPage";
import SignUp from "./components/auth/SignUp";
import FreshFlowersPage from "./components/category/Category";
import OrderSummary from "./components/checkout/CheckOut";
import CheckOut from "./components/checkout/CheckOut";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import EventManager from "./components/landing/EventManager";
import Hero from "./components/landing/Hero";
import Reviews from "./components/landing/Reviews";
import Services from "./components/landing/Services";
import Why from "./components/landing/Why";
// import Hero from "./components/subscription/Hero";
import SubscriptionBuilder from "./components/subscription/Plan";
import SubscriptionFAQ from "./components/subscription/SubscriptionFaq";
import HowItWorks from "./components/subscription/Work";

export default function App() {
  return (
    <>
     <FreshFlowersPage/>
        {/* <Hero/>
    <About/>
    <Why/>
    <Contact/>
    <Services/>
    <EventManager/>
    <Reviews/> */}
    {/* <Footer/> */}
        {/* <Hero />
      <HowItWorks />
      <SubscriptionBuilder />
    <SubscriptionFAQ /> */}
        {/* <ProductDetailPage /> */}
      
    </>
  );
}
