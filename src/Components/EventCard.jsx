import React from 'react';
import styles from '/src/pages/Homepage.module.css';

const EventCard = ({ event }) => {
  return (
    <div className={styles.eventCard}>
      <img src={event.image} alt={event.name} className={styles.eventImage} />
      <h3>{event.name}</h3>
      <p>Type: {event.type}</p>
      <p>Duration: {event.duration}</p>
      <p>Fees: {event.fees}</p>
    </div>
  );
};

export default EventCard;