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
import { toast } from "react-toastify";

const RegistrationForm = ({ fields, eventId, onClose, onSuccess,userInfo }) => {
  console.log("registrationform",userInfo);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const {userId}=userInfo || {};


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
          userId, //received from props using userinfo from app
          registeredDetails: Object.keys(formData).map((key) => ({
            title: key,
            value: formData[key],
          })),
        },
      ],
    };
    console.log("requestBody",requestBody);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/events/${eventId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        onSuccess(); // Show success popup
      } else {
        toast.error(data.message); // Show proper error message
      }
    } catch (error) {
      // toast.error("Error while registering!", error);
      toast.error(`Error while registering! ${error.message || "Please try again."}`);
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
