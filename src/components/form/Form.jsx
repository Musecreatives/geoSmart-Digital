"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./form.module.css";

const FormField = ({
    form_tile, 
    form_paragraph, 
    field_one_title, 
    field_one_placehold,
    field_two_title, 
    field_two_placehold,
    field_password_title,
    field_password_placehold,
    field_password_title_two,
    field_password_placehold_two,
    button_title,
    btn_btm_msg,
    btn_btm_msg_link = "/",
}) => {
    // temporary function
    const router = useRouter();
    const goToDashboard = () => {
        router.replace("/dashboard/home");
    }
    
    return(
        <div>
            <form className={styles.form_content_wrapper}>
                {/* Form tile and paragraph */}
                <h1 className={styles.heading}>{form_tile}</h1>
                <p className={styles.heading_paragraph}>{form_paragraph}</p>

                {/* Field one */}
                {
                !field_one_title ? null : 
                <div className={styles.form_group}>
                    <label className={styles.label} htmlFor="field_one">{field_one_title}</label>
                    <input className={styles.form_input_field} type="text" name="field_one" id="field_one" placeholder={field_one_placehold}/>
                </div>
                }
                {/* field two */}
                {
                !field_two_title ? null : 
                <div className={styles.form_group}>
                    <label className={styles.label} htmlFor="field_one">{field_two_title}</label>
                    <input className={styles.form_input_field} type="text" name="field_two" id="field_two" placeholder={field_two_placehold}/>
                </div>
                }
                {/* password field */}
                {
                !field_password_title ? null : 
                <div className={styles.form_group}>
                    <label className={styles.label} htmlFor="password_field">{field_password_title}</label>
                    <input className={styles.form_input_field} type="password" name="password_field" id="password_field" placeholder={field_password_placehold}/>
                </div>
                }
                {/* password field two */}
                {
                !field_password_title_two ? null : 
                <div className={styles.form_group}>
                    <label className={styles.label} htmlFor="password_field">{field_password_title_two}</label>
                    <input className={styles.form_input_field} type="password" name="password_field" id="password_field" placeholder={field_password_placehold_two}/>
                </div>
                }
                
                {/* button */}
                <div className={styles.btn_group}>
                    <button className={styles.action_btn} onClick={() => goToDashboard()}>{button_title}</button>
                    <small>
                        {
                            !btn_btm_msg ? <Link href={btn_btm_msg_link}>Forgot password</Link>
                            :
                            <div>
                                <span>{btn_btm_msg} -</span>
                                <span><Link href={btn_btm_msg_link}>Login</Link></span>
                            </div>
                        }
                    </small>
                </div>
            </form>
        </div>
    );
}

export default FormField;