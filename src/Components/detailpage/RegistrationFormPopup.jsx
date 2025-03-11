import { useState } from "react";
import styles from "./RegistrationFormPopup.module.css";

const RegistrationForm = ({ fields, onClose }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field.title]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Register for Event</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.title} className={styles.formGroup}>
              <label>{field.title}</label>
              {field.type === "select" ? (
                <select onChange={(e) => handleChange(e, field)} required={field.isRequired}>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  onChange={(e) => handleChange(e, field)}
                  required={field.isRequired}
                />
              )}
            </div>
          ))}
          <button type="submit" className={styles.submitButton}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
