import React from "react";
import style from "./Initiation.module.css"
import initImage from "../../assets/invitation_image_mystic.png"

const Initiation = () => {
  return(
      <div className={style.container}>
          <div className={style.initiateImgContainer}>
              <img src={initImage} className={style.initiateImg} alt={'init'}/>
          </div>
          <div className={style.initMessage}>
          </div>
          <div className={style.initForm}>

          </div>
      </div>
  )
};

export default Initiation