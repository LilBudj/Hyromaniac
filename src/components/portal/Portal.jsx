import React from "react";
import style from "./Portal.module.css"

const Portal = (props) => {
  return(
      <div className={style.container}>
          <div className={style.portal}>
              <Element name={'Chinese'}/>
              <Element name={'Indian'}/>
              <Element name={'Maya'}/>
              <Element name={'Chinese'}/>
              <Element name={'Indian'}/>
              <Element name={'Maya'}/>
              <Element name={'Chinese'}/>
              <Element name={'Indian'}/>
              <Element name={'Maya'}/>
          </div>
      </div>
  )
};

const Element = (props) => {
    return(
        <div className={style.element}>
            <div className={style.image}/>
            <span>{props.name}</span>
        </div>
    )
};

export default Portal