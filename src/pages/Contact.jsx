import ContactForm from "../components/ContactForm";

import styles from "../pageStyles/pageStyles.module.css";
function Contact() {
  return (
    <section className={styles.wrapper__contact}>
      <div className={styles.container__contact_text}>
        <h2>Get in touch</h2>
        <p>
          Reach us if you need any help<br></br> or if the is a problem{" "}
        </p>
      </div>
      <div className={styles.container__contact_info}>
        <div>
          <h3>Mail</h3>
          <p>test@skylineShop.com</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+47 44592514</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>Tollbodgata 45, 4614 Kristiansand</p>
        </div>
      </div>
      <div className={styles.container__contact_form}>
        <ContactForm className={styles.container__contact_form} />
      </div>
    </section>
  );
}

export default Contact;
