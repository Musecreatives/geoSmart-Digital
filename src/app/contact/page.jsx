// style
import styles from "./contact.module.css";
// component
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactPage = () => {
    return(
        <main className={styles.main_container}>
            <header>
                <div className={styles.heading_content}>
                    <h1>Contact us</h1>
                    <p>Got any questions about us and our projects and programs? W’e’re here to help and assist you</p>
                </div>
            </header>
            {/* contact form and map */}
            <div className={styles.form_and_map_container}>
                <div className={styles.form_content}>
                    <ContactForm />
                </div>
                <div className={styles.map_content}></div>
            </div>
        </main>
    );
}

export default ContactPage;