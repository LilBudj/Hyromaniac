import React from "react";
import {Fade} from "react-reveal"
import "date-fns"
import style from "./Initiation.module.css"
import initImage from "../../assets/invitation_image_mystic.png"
import {Button} from "@material-ui/core"
import {NavLink} from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const Initiation = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return(
      <div className={style.container}>
          <Fade left>
          <div className={style.initiateImgContainer}>
              <img src={initImage} className={style.initiateImg} alt={'init'}/>
              <div className={style.initMessage}>
                  <span>Greetings</span>
              </div>
          </div>

          <div className={style.initForm}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                      'aria-label': 'change date',
                  }}
              />
              </MuiPickersUtilsProvider>
                  <NavLink to={'/hyromancer'}><Button variant={'contained'} color={'primary'}>Get started</Button></NavLink>
          </div>
          </Fade>
      </div>
  )
};

export default Initiation