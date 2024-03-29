import { useState } from "react";
import PrimaryBtn from "../primary-btn.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      <nav className="navbar">
        <ul
          className={
            isOpen
              ? "menu-isOpen items-center gap-x-5"
              : "hidden md:flex items-center gap-x-5 "
          }>
          <NavItem>Home</NavItem>
          <NavItem>Collections</NavItem>
          <NavItem>Market</NavItem>
          <NavItem>Wallet</NavItem>

          {/* //login options */}
          <div className="flex items-center gap-x-5">
            <PrimaryBtn>Sign up</PrimaryBtn>
            <PrimaryBtn>Login</PrimaryBtn>
          </div>
        </ul>
      </nav>

      {/* hamburger-icon */}
      <div
        className="block md:hidden z-[9999]"
        onClick={() => setIsOpen(!isOpen)}>
        <i class="ri-menu-line text-xl font-bold"></i>
      </div>
    </>
  );
}

function NavItem({ children }) {
  return (
    <li className="navItem">
      <a className="nav-link" href="app.js">
        {children}
      </a>
    </li>
  );
}

export default Navbar;
