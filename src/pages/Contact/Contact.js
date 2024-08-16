import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <h2 className={styles.header}>
          Have a question or want to work together? Leave your details and I'll
          get back to you as soon as I finish watching Demon Slayer.
        </h2>
        <form
          className={styles.form}
          action="https://formspree.io/f/xzzpvjgd"
          method="POST"
        >
          <fieldset className={styles.formFieldset}>
            <legend className={styles.formLegend}>Contact Form</legend>

            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="email"
              className={styles.formName}
              name="name"
              placeholder="Name"
              required
            />
            <br />

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              className={styles.formEmail}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <br />

            <label htmlFor="message" className={styles.label} >
             <span className="text">Message</span> 
            </label>
            <br />
            <textarea
              id="message"
              className={styles.formMessage}
              name="message"
              rows={4}
              cols={50}
              placeholder="write your message here"
              required
            />
            <br />

            <button type="submit" className={styles.formButton}>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
