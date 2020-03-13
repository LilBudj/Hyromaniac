import React from "react";
import style from "./Header.module.css"
import NavButton from "../utils/navButton/NavButton";

const Header = (props) => {
  return(
      <div className={style.header}>
          <nav className={style.navbar}>
              <NavButton link={'/horoscope'} text={'test1'}/>
              <NavButton link={'/hyromancer'} text={'test2'}/>
              <NavButton link={'/portal'} text={'test3'}/>
              <NavButton link={'/fate'} text={'test4'}/>
          </nav>
      </div>
  )
};

export default Header