import React, { useState } from 'react';
import styles from '/src/pages/Homepage.module.css';

const testimonialsData = [
  { id: 1, text: 'This event changed my life!', userImage: 'https://via.placeholder.com/50', userName: 'John Doe' },
  { id: 2, text: 'Amazing experience!', userImage: 'https://via.placeholder.com/50', userName: 'Jane Smith' },
  { id: 3, text: 'Highly recommended!', userImage: 'https://via.placeholder.com/50', userName: 'Alice Johnson' },
  { id: 4, text: 'Great platform for networking!', userImage: 'https://via.placeholder.com/50', userName: 'Mark Lee' },
  { id: 5, text: 'Well organized events!', userImage: 'https://via.placeholder.com/50', userName: 'Sarah Brown' },
  { id: 6, text: 'The best experience ever!', userImage: 'https://via.placeholder.com/50', userName: 'Michael White' },
  { id: 7, text: 'Fantastic speakers and workshops!', userImage: 'https://via.placeholder.com/50', userName: 'Laura Green' },
  { id: 8, text: 'Definitely attending again!', userImage: 'https://via.placeholder.com/50', userName: 'James Taylor' },
  { id: 9, text: 'A must-attend event!', userImage: 'https://via.placeholder.com/50', userName: 'Emily Clark' },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 3 : currentIndex - 3);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === testimonialsData.length - 3 ? 0 : currentIndex + 3);
  };

  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.navigation}>
        <button className={styles.arrow} onClick={handlePrev}>‹</button>
        <button className={styles.arrow} onClick={handleNext}>›</button>
      </div>
      <div className={styles.testimonialCards}>
        {testimonialsData.slice(currentIndex, currentIndex + 3).map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <p>{testimonial.text}</p>
            <div className={styles.user}>
              <img src={testimonial.userImage} alt={testimonial.userName} className={styles.userImage} />
              <p>{testimonial.userName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
