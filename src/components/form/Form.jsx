"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react"; // Import useState for form control
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
  btn_btm_msg_link = "/login",
}) => {
  const [formData, setFormData] = useState({
    field_one: "",
    field_two: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form (for example, matching passwords)
    if (field_password_title_two && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Temporary navigation (You will replace this with an actual API call)
    router.replace("/dashboard/home");
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form className={styles.form_content_wrapper} onSubmit={handleSubmit}>
        {/* Form title and paragraph */}
        <h1 className={styles.heading}>{form_tile}</h1>
        <p className={styles.heading_paragraph}>{form_paragraph}</p>

        {/* Field one */}
        {field_one_title && (
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor="field_one">{field_one_title}</label>
            <input
              className={styles.form_input_field}
              type="text"
              name="field_one"
              id="field_one"
              value={formData.field_one}
              onChange={handleInputChange}
              placeholder={field_one_placehold}
            />
          </div>
        )}

        {/* Field two */}
        {field_two_title && (
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor="field_two">{field_two_title}</label>
            <input
              className={styles.form_input_field}
              type="text"
              name="field_two"
              id="field_two"
              value={formData.field_two}
              onChange={handleInputChange}
              placeholder={field_two_placehold}
            />
          </div>
        )}

        {/* Password field */}
        {field_password_title && (
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor="password">{field_password_title}</label>
            <input
              className={styles.form_input_field}
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={field_password_placehold}
            />
          </div>
        )}

        {/* Confirm password field */}
        {field_password_title_two && (
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor="confirmPassword">{field_password_title_two}</label>
            <input
              className={styles.form_input_field}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder={field_password_placehold_two}
            />
          </div>
        )}

        {/* Button */}
        <div className={styles.btn_group}>
          <button className={styles.action_btn} type="submit">{button_title}</button>
          <small>
            <div>
              <span>{btn_btm_msg} - </span>
              <span><Link href={btn_btm_msg_link}>Login</Link></span>
            </div>
          </small>
        </div>
      </form>
    </div>
  );
};

export default FormField;
