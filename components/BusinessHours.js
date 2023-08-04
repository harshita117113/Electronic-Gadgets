import React from 'react'
import BusinessDays from './BusinessDays'
import styles from '../styles/smart.module.css'

const BusinessHours = () => {
    
    const days=[
        {day:"Monday", time:"10:00 AM - 10:00 PM"},
        {day:"Tuesday", time:"10:00 AM - 10:00 PM"},
        {day:"Wednesday", time:"10:00 AM - 10:00 PM"},
        {day:"Thursday", time:"10:00 AM - 10:00 PM"},
        {day:"Friday", time:"10:00 AM - 10:00 PM"},
        {day:"Saturday", time:"10:00 AM - 10:00 PM"},
        {day:"Sunday", time:"10:00 AM - 10:00 PM"},    
    ]
    const list = []

    for (const [i, d] of days.entries()) {
      list.push(<BusinessDays day={d.day} time={d.time}/>)
    }
    return (
    <div className={styles.businesscard}>
        <span className={styles.subheading}>Business Hours</span>
        <div>
            {list}
        </div>
    </div>
  )
}

export default BusinessHours