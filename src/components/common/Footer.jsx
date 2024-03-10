import React from "react";
import Remind from "../footer/Remind";
import ContactUs from "../footer/ContactUs";
import Shop from "../footer/Shop";
import AboutUs from "../footer/AboutUs";

const Footer = () => {
  return (
    <footer className="flex w-full">
      <Remind />
      <ContactUs />
      <Shop />
      <AboutUs />
    </footer>
  );
};

export default Footer;
