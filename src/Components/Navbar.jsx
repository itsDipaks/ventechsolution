import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [truncatedText, setTruncatedText] = useState("");
  const navigate = useNavigate();
  const currentlocation = useLocation();

  const user = { name: "John Doe" }; // Example user object, replace it with actual user data

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTruncatedText(truncateText(user?.name, 15));
      } else {
        setTruncatedText(truncateText(user?.name, 20));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [user?.name]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const NavigateToRoute = (page, isMobile) => {
    navigate(page.route);
    if (isMobile) {
      closeMenu();
    }
  };

  const options = [
    { name: "Home", id: 1, route: "/" },
    { name: "About us", id: 2, route: "/about" },
    { name: "Our Services", id: 3, route: "/services" },
    { name: "Contact us", id: 3, route: "/contact-us" },
  ];

  return (
    <div>
      <header className="border-b border-b-[#CED7E4] h-[80px]  bg-[#112357]">
        <div className="w-[90%] max-w-[1500px] mx-auto flex items-center justify-between py-4">
          <div className="flex items-center md:order-2 sm:space-x-4 md:space-x-0 rtl:space-x-reverse gap-2 sm:gap-4">
            {/* {user ? (
              <div className="bg-[#DFF2FF] p-2 sm:p-3 justify-center gap-[6px] sm:gap-3 rounded-xl flex items-center line-clamp-1">
                <span>{truncatedText}</span>
              </div>
            ) : (
              <>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
                <button onClick={() => navigate('/login')}>Log In</button>
              </>
            )} */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <p className="font-bold text-white text-xl">Ventech Solution</p>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg   md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
              {options?.map((page) => (
                <li
                  className={`navLink ${
                    currentlocation.pathname === page.route && "navActive"
                  } relative cursor-pointer`}
                  key={page.id}
                >
                  <div
                    onClick={() => NavigateToRoute(page, false)}
                    className={`block py-2 px-2 sm:text-sm lg:text-base text-white
                    rounded`}
                    aria-current="page"
                  >
                    {page.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`items-center py-4 backdrop-blur-[2px] shadow-2xl justify-between absolute z-10 w-screen bg-transparent top-0 h-screen md:w-auto md:order-1 bg-gray-50 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-[300%]"
          }`}
        >
          <ul className="flex flex-col p-4 gap-2 mt-4 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {options.map((page) => (
              <li
                className={`navLink w-fit select-none ${
                  currentlocation.pathname === page.route && "navActive"
                } relative cursor-pointer`}
                key={page.id}
              >
                <div
                  onClick={() => NavigateToRoute(page, true)}
                  className={`block py-2 px-3 ${
                    currentlocation.pathname === page.route
                      ? "text-[rgba(11,59,106,1)] font-medium"
                      : "text-[rgba(72,98,132,1)] font-normal"
                  } rounded`}
                  aria-current="page"
                >
                  {page.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
