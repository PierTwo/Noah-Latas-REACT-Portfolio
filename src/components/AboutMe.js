import React from "react";
import profilePic from "../assets/profilePic.jpeg";

export default function AboutMe() {
  return (
    <div className="about-me prussian-blue">
      <h4>About Me</h4>
      <img src={profilePic} alt="Me hiking" className="profile-pic rounded-circle"></img>
    </div>
  );
}
