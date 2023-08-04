import React from 'react';
import styles from '../styles/smart.module.css'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
  
const Appointment = () => {
  const today=new Date()
  const [value, onChange] = useState(today);
  
  return (
    <>
    <div className={styles.businesscard}>
        <span className={styles.subheading}>Make an Appointment</span>
        <div className={styles.cal}>
          <Calendar
              onChange={onChange}
              value={value}
              className={styles.cal}
              tileClassName={styles.caltile}
          />
        </div>
        <div className={styles.hour}>
          Hour
        </div>
        <form>
        <div>
          <input type="time"  className={styles.time} /> - <input type="time"  className={styles.time}/>  
        </div>
        <div>
          <button type='submit'  className={styles.appbtn}>Make an Appointment</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default Appointment