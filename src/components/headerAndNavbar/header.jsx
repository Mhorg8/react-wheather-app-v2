import React from "react";
import Navbar from "./navbar.jsx";
import "../headerAndNavbar/header.css";
function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between py-4">
        <a className="font-bold text-2xl" href="app.js">
          NFT-Market
        </a>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
