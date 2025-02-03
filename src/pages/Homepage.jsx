import React from 'react';
import Navbar from '/src/Components/Navbar';
import EventCard from '/src/Components/EventCard';
import TestimonialCard from '/src/Components/TestimonialCard';
import Footer from '/src/Components/Footer';
import styles from './Homepage.module.css';

const Homepage = () => {
  const events = [
    { id: 1, image: 'event1.jpg', name: 'Event 1', type: 'Workshop', duration: '2h', fees: '$20' },
    { id: 2, image: 'event2.jpg', name: 'Event 2', type: 'Concert', duration: '3h', fees: '$50' },
    { id: 3, image: 'event3.jpg', name: 'Event 3', type: 'Seminar', duration: '1h', fees: 'Free' },
    { id: 4, image: 'event4.jpg', name: 'Event 4', type: 'Workshop', duration: '2h', fees: '$30' },
    { id: 5, image: 'event5.jpg', name: 'Event 5', type: 'Concert', duration: '4h', fees: '$60' },
    { id: 6, image: 'event6.jpg', name: 'Event 6', type: 'Seminar', duration: '1.5h', fees: 'Free' },
  ];

  const testimonials = [
    { id: 1, text: 'This event changed my life!', userImage: 'user1.jpg', userName: 'John Doe' },
    { id: 2, text: 'Amazing experience!', userImage: 'user2.jpg', userName: 'Jane Smith' },
    { id: 3, text: 'Highly recommended!', userImage: 'user3.jpg', userName: 'Alice Johnson' },
  ];

  return (
    <div className={styles.homepage}>
      <Navbar />
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Your Gateway to Tech Events, Workshops & Hackathons</h1>
          <p>Explore, Apply, and Innovate with the best tech events around the world.</p>
        </div>
        <div className={styles.bannerImage}>
          <img src="/src/pages/images/OBJECT.jpg" alt="Banner" />
        </div>
      </section>
      <section className={styles.events}>
        <h2>List of Events</h2>
        <div className={styles.filters}>
          <button>All</button>
          <button>Workshops</button>
          <button>Concerts</button>
          <button>Seminars</button>
        </div>
        <div className={styles.eventCards}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <button className={styles.viewAll}>View All</button>
      </section>
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.images}>
          <img src="how1.jpg" alt="Step 1" />
          <img src="how2.jpg" alt="Step 2" />
          <img src="how3.jpg" alt="Step 3" />
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2>Testimonials</h2>
        <div className={styles.testimonialCards}>
          <button className={styles.scrollButton}>‹</button>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          <button className={styles.scrollButton}>›</button>
        </div>
      </section>
      <section className={styles.milestones}>
        <h2>Milestones</h2>
        <div className={styles.images}>
          <img src="milestone1.jpg" alt="Milestone 1" />
          <img src="milestone2.jpg" alt="Milestone 2" />
          <img src="milestone3.jpg" alt="Milestone 3" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;