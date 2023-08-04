import Head from 'next/head';
import styles from '../styles/smart.module.css';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Gallery from '../components/Gallery'
import BusinessHours from '../components/BusinessHours';
import Appointment from '../components/Appointment';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <Header/>
    <div className={styles.electronicsGadgets}>Electronics Gadgets</div>
    <div className={styles.intro}> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    </div>
    <Contact/>
    <Products/>
    <Gallery/>
    <div className={styles.flexdis}>
      <BusinessHours/>
      <Appointment/>
    </div>
    <ContactForm/>
    </>
  )

}
