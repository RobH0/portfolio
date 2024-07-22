import styles from './ContactStyles.module.css';
//netlify-honey-post="pass" data-netlify-recaptcha="true"
//<div data-netlify-recaptcha="true"></div>
function Contact() {
  return (
    <section id="Contact" className={styles.container}>
        <h1>Contact Me</h1>
        <div className={styles.upperText}>
            <h3>Want to get in touch?</h3>
            <p>Fill out the form below to reach me via email.</p>
        </div>
        
        
        <form name="portfolio-contact" method='POST' className={styles.contactForm}  data-netlify="true">
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <input type="hidden" name="pass"/>
            <div className={styles.formDiv}>
                <label name="name" hidden>Name</label>
                <input id="form-name" type="text" name="name" placeholder='Name' required />
            </div>
            <div className={styles.formDiv}>
                <label name="email" hidden>Email</label>
                <input id="form-email" type="text" name="email" placeholder='Email' required />
            </div>
            <div className={styles.formDiv}>
                <label name="message" hidden>Message</label>
                <textarea id="form-message" type="text" name="message" placeholder='Enter your message here...' required></textarea>
            </div>
            
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Contact