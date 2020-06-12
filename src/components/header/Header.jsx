import React from "react";
import style from "./Header.module.css"
import NavButton from "../utils/navButton/NavButton";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return(
      <div className={style.header}>
          <nav className={style.navbar}>
              <NavLink to={'/'} className={style.link} activeClassName={style.active}>Horoscope</NavLink>
              <NavLink to={'/palmistry'} className={style.link} activeClassName={style.active}>Palmistry</NavLink>
              <NavLink to={'/compatibility'} className={style.link} activeClassName={style.active}>Compatibility</NavLink>
              <NavLink to={'/hyromancer'} className={style.link} activeClassName={style.active}>Test</NavLink>
          </nav>
      </div>
  )
};

export default Header