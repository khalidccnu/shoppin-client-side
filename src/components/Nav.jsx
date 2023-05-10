import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimesCircle } from "react-icons/fa";

const Nav = () => {
  const [hbMenu, setHbMenu] = useState(true);
  const collapseHbMenu = useRef();

  const handleResize = (_) => {
    innerWidth >= 640 ? setHbMenu(false) : setHbMenu(true);
  };

  const handleCollapseHbMenu = ({ target: elem }) => {
    if (!collapseHbMenu.current.contains(elem)) setHbMenu(true);
  };

  useEffect(() => {
    addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleCollapseHbMenu);

    handleResize();

    return () => {
      removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleCollapseHbMenu);
    };
  }, []);

  return (
    <nav className="py-3" ref={collapseHbMenu}>
      <div className="container">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Shoppin</h3>
          <div className="relative">
            <span
              className="sm:hidden hover:text-purple-600 cursor-pointer"
              onClick={(_) => setHbMenu(!hbMenu)}
            >
              {hbMenu ? (
                <FaBars className="h-6" />
              ) : (
                <FaTimesCircle className="h-6" />
              )}
            </span>
            <ul
              className={`absolute sm:static top-8 right-0 flex flex-col sm:flex-row bg-amber-50/40 sm:bg-transparent w-[calc(100vw_-_2rem)] sm:w-auto p-3 sm:p-0 rounded-lg shadow-sm sm:shadow-none overflow-hidden sm:space-x-2 space-y-2 sm:space-y-0 ${
                hbMenu ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
              } transition-[max-height,_opacity] duration-500`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "hover:text-purple-600" + (isActive ? " text-pink-600" : "")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    "hover:text-purple-600" + (isActive ? " text-pink-600" : "")
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "hover:text-purple-600" + (isActive ? " text-pink-600" : "")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
