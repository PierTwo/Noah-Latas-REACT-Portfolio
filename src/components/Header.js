import React from "react";

export default function Header({ handlePageChange }) {
  return (
    <nav className="col-12 navbar justify-content-around flex-wrap p-lg-4">
      <div>
        <h1 className="my-name">Noah Latas</h1>
      </div>
      <div className="container justify-content-around">
        <h4 className="nav-header" onClick={() => handlePageChange("portfolio")}>
          Portfolio
        </h4>
        <h4 className="nav-header" onClick={() => handlePageChange("aboutMe")}>
          About Me
        </h4>
        <h4 className="nav-header" onClick={() => handlePageChange("contact")}>
          Contact
        </h4>
        <h4 className="nav-header" onClick={() => handlePageChange("resume")}>
          Resume
        </h4>
      </div>
    </nav>
  );
}
