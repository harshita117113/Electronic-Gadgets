import React from 'react';
import styles from '../styles/smart.module.css'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import BusinessHours from './BusinessHours';
  
const Appointment = () => {
  const today=new Date()

  const addminutes=(t)=>{
    let hr=t[0]+t[1];
    let min=t[3]+t[4];
    hr=parseInt(hr)
    min=parseInt(min)
    if((min+15)>59)
    {
      if(hr>23)
      {
        hr=0;
      }
      else{
        hr++;
      }
      min=60-min
    }
    else{
      min+=15
    }
    return t=hr+":"+min;
  }
  const [value, setValue] = useState(today);
  const [time, setTime]=useState("10:00")
  const [etime, seteTime]=useState("10:15")
  //const etime= ;
  console.log(time);
  console.log(etime);
  const setAppTime=(value)=>{
    setTime(value.target.value);
    seteTime(addminutes(value.target.value))
    console.log(time);
    
  }
  const onchange=(value) => {
    setValue(value);
  }

  const setAppointment=(e)=>{
    alert("Your Appointment is set on "+value.getDate() +"/"+(value.getMonth()+1) +"/"+value.getFullYear() +" " +time+"-"+ etime)
  }
  
  return (
    <>
    <div className={styles.businesscard}>
        <span className={styles.subheading}>Make an Appointment</span>
        <div className={styles.cal}>
          <Calendar
              value={value}
              onChange={onchange}
              className={styles.cal}
              tileClassName={styles.caltile}
              minDate={today}
          />
        </div>
        <div className={styles.hour}>
          <label htmlFor="time">
            Hour
          </label>
        </div>
        <form>
        <div>
          <input type="time" value={time} id="time" name="time" onChange={setAppTime} className={styles.time} /> - <label htmlFor="etime"></label><input type="time" value={etime} name="etime" className={styles.time}/>  
        </div>
        <div>
          <button type='submit' onClick={setAppointment} className={styles.appbtn}>Make an Appointment</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default Appointment