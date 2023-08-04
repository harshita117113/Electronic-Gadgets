import styles from '../styles/smart.module.css';
import Card from './Card';
import SocialMedia from './SocialMedia';
const Contact = () => {
  	
  	return (
        <>
        <div>
            <div className={styles.container}>
                <Card title="Mobile Number" desc="+91 90000-00000" img="/images/call_icon.svg"/>
                <Card title="E-mail address" desc="tim.jennings@example.com" img="/images/mail_icon.svg"/>
            </div>
            <div className={styles.container}>
                <Card title="Business Segment" desc="Electronics Store" img="/images/store_icon.svg"/>
                <Card title="Location" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  " img="/images/location_icon.svg"/>
            </div>
        </div>
        <SocialMedia/>
        </>
);
};

export default Contact;
