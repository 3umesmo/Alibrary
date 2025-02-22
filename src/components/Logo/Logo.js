import React from "react";
import logo from "../../images/logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img alt="logo Alibrary" src={logo}></img>
      <p className="logo__name">
        <strong>A</strong>library
      </p>
    </div>
  );
};

export default Logo;
