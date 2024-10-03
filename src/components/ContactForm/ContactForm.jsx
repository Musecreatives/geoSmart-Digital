import Link from "next/link";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return(
        <div className={styles.main_container}>
            <div className={styles.form_heading}>
                <h2>Contact us</h2>
                <p>Please fill out the form below. We will respond to your inquiry as soon as possible.</p>
            </div>
            <form>
                <div className={styles.inputs_wrapper}>
                    <div className={styles.input_group}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="namme" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <button className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;