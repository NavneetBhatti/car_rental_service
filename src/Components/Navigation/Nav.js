import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./Menu";
import "./Nav.css";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  

  return (
    <nav navbar-corner>
      <div className="logo ">
        Car<font>Rental</font>
      </div>
     
      <ul className={click ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;