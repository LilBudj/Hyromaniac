import React from "react";
import style from "./Header.module.css"
import NavButton from "../utils/navButton/NavButton";

const Header = (props) => {
  return(
      <div className={style.header}>
          <nav className={style.navbar}>
              <NavButton link={'/horoscope'} label={'test1'}/>
              <NavButton link={'/hyromancer'} label={'test2'}/>
              <NavButton link={'/portal'} label={'test3'}/>
              <NavButton link={'/fate'} label={'test4'}/>
          </nav>
      </div>
  )
};

export default Header