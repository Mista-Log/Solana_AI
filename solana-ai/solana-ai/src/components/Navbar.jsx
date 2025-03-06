import { useState } from "react";
import "./../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Solana AI</div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <a href="#defi">DeFi</a>
        <a href="#nft">NFTs</a>
        <a href="#dev">DevTools</a>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
