// import { useState } from "react";
// import styles from "./RegistrationFormPopup.module.css";

// const RegistrationForm = ({ fields, onClose }) => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e, field) => {
//     setFormData({ ...formData, [field.title]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className={styles.modal}>
//       <div className={styles.modalContent}>
//         <span className={styles.close} onClick={onClose}>&times;</span>
//         <h2>Register for Event</h2>
//         <form onSubmit={handleSubmit}>
//           {fields.map((field) => (
//             <div key={field.title} className={styles.formGroup}>
//               <label>{field.title}</label>
//               {field.type === "select" ? (
//                 <select onChange={(e) => handleChange(e, field)} required={field.isRequired}>
//                   {field.options.map((option, index) => (
//                     <option key={index} value={option}>{option}</option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   onChange={(e) => handleChange(e, field)}
//                   required={field.isRequired}
//                 />
//               )}
//             </div>
//           ))}
//           <button type="submit" className={styles.submitButton}>Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

import { useState } from "react";
import styles from "./RegistrationFormPopup.module.css";

const RegistrationForm = ({ fields, eventId, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field.title]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Constructing API request body
    const requestBody = {
      registered: [
        {
          userId: "67d0296dd8e39f187ea9eba2", // Placeholder, replace later with logged-in user ID
          registeredDetails: Object.keys(formData).map((key) => ({
            title: key,
            value: formData[key],
          })),
        },
      ],
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/events/${eventId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        onSuccess(); // Show success popup
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
