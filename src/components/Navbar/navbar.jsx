import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import intuteLogo from "../../assets/intuteLogo.png";
import "./navbar.css";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("navbar-transparent");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / windowHeight) * 100;

      // Update scroll progress CSS variable
      document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);

      // Update navbar state
      if (scrollPosition > 50) {
        setNavbarClass("navbar-colored");
      } else {
        setNavbarClass("navbar-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest('.navbar')) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isNavOpen]);

  const toggleNavbar = () => setIsNavOpen(!isNavOpen);
  const closeNavbar = () => setIsNavOpen(false);

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/vision", label: "Our Vision" },
    { to: "/get-demo", label: "Products" },
    { to: "/team", label: "Our Team" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass}`}>
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand" onClick={closeNavbar}>
          <img 
            src={intuteLogo} 
            alt="Intute.ai - AI-Powered Innovations" 
            className="navbar-logo" 
          />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler d-lg-none" 
          type="button" 
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
        >
          {isNavOpen ? (
            <FaTimes size={22} color="#fff200" />
          ) : (
            <FaBars size={22} color="#fff200" />
          )}
        </button>

        {/* Navigation Menu */}
        <div 
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navigationLinks.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  onClick={closeNavbar}
                  className={({ isActive }) => 
                    `nav-link${isActive ? " active-link" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;