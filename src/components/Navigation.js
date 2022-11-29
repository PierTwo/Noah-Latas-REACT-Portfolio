import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import Header from "./Header";

export default function Navigation() {
  const [location, setLocation] = useState("aboutMe");
  const handlePageChange = (page) => setLocation(page);

  const renderPage = () => {
    switch (location) {
      case "aboutMe":
        return <AboutMe />;

      case "portfolio":
        return <Portfolio />;

      case "contact":
        return <Contact />;

      case "resume":
        return <Resume />;

      default:
        break;
    }
  };

  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
