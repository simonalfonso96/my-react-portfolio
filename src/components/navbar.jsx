import React from "react";
import { PiListBold } from "react-icons/pi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    }

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
      };
    
      const navlinks = [
        {
          name: "Home",
          link: "#home",
        },
        {
          name: "About",
          link: "#about",
        },
        {
          name: "Projects",
          link: "#projects",
        },
        {
          name: "Contact",
          link: "#contact",
        },
      ];

    return(
        <>
            <nav>
                <h3 onClick={pageUp} className="Logo">Simon.dev</h3>
                <ul>
                    {navlinks.map((item) => (
                        <li key={item.name}>
                        <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    <li onClick={() => handleToggle()}>
                        <PiListBold className="mobile-menu" size={30} />
                    </li>
                </ul>
            </nav>

            
            <div className={`mobile-nav ${menuOpen ? "open-menu" : "closed-menu"}`}>
                <span onClick={() => handleToggle()}>
                    <IoClose size={30} />
                </span>

                <ul>
                    {navlinks.map((item) => (
                    <li key={item.name} onClick={() => handleToggle()}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Navbar;