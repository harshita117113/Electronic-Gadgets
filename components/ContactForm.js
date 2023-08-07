import React,{useState} from 'react'
import styles from '../styles/smart.module.css'

const ContactForm = () => {
  
const submit=(event)=>{
  event.preventDefault()
 
  const data = {
    name: event.target.name.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    msg: event.target.msg.value,
  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify([data])
  let contacts=localStorage.getItem("contacts")
  if(contacts){
    let contactsJson=JSON.parse(contacts)
        console.log(contactsJson)
        contactsJson.push(data);
        localStorage.setItem('contacts', JSON.stringify(contactsJson))
        alert("Form has been submitted successfully")
    }
else{
    localStorage.setItem('contacts', JSONdata);
    alert("Form has been submitted successfully") 
}
document.getElementById('contact').reset();
}
  
  return (
    <form onSubmit={submit} className={styles.cform} id='contact'>
    <div style={{display: 'flex'}}>
        <label htmlFor="name"><input type="text" name="name" placeholder='Full Name' /></label>
        <label htmlFor="email"><input type="email" name="email" placeholder='Email'  /></label>
        <label htmlFor="phone"><input type="text" name='phone' placeholder='Whatsapp Number'  /></label>
    </div>
    <div >
        <label htmlFor="msg"><input style={{width: '90%',display: 'block', margin:'30px auto',borderBottom: 'solid white 2px',paddingBottom:'20px',fontSize:'16px'}} type="text" name='msg' placeholder='Type a Message Here' /></label>
    </div>
    <div>
      <button type='submit' className={styles.subbutton}> Submit</button>
    </div>
    </form>
  )

}

export default ContactForm