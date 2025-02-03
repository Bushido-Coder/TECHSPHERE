import React from 'react';
import styles from '/src/pages/Homepage.module.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={styles.testimonialCard}>
      <p>{testimonial.text}</p>
      <div className={styles.user}>
        <img src={testimonial.userImage} alt={testimonial.userName} />
        <p>{testimonial.userName}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;