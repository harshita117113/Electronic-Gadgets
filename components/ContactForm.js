import React from 'react'
import styles from '../styles/smart.module.css'

const ContactForm = () => {
  return (
    <form className={styles.cform}>
    <div style={{display: 'flex'}}>
        <input type="text" placeholder='Full Name'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Whatsapp Number'/>
    </div>
    <div >
        <input style={{width: '90%',display: 'block'}} type="text" placeholder='Type a Message Here'/>
    </div>
    <div>
      <button className={styles.subbutton}> Submit</button>
    </div>
    </form>
  )
}

export default ContactForm