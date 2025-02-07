import React, { useState } from 'react';
import Navbar from '/src/Components/Navbar';
import EventCard from '/src/Components/EventCard';
import Footer from '/src/Components/Footer';
import styles from './Homepage.module.css';
import Testimonials from '../Components/TestimonialCard';
import Milestones from '../Components/Milestones'; 

const Homepage = () => {
  const [filter, setFilter] = useState('all'); 

  return (
    <div className={styles.homepage}>
      <Navbar />
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Your Gateway to Tech Events, Workshops & Hackathons</h1>
          <p>Explore, Apply, and Innovate with the best tech events around the world.</p>
        </div>
        <div className={styles.bannerImage}>
          <img src="/src/pages/images/OBJECT.svg" alt="Banner" />
        </div>
      </section>
      <section className={styles.events}>
        <h2>List of Events</h2>
        <div className={styles.filters}>
          <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.active : ''}>All</button>
          <button onClick={() => setFilter('workshop')} className={filter === 'workshop' ? styles.active : ''}>Workshops</button>
          <button onClick={() => setFilter('concert')} className={filter === 'concert' ? styles.active : ''}>Concerts</button>
          <button onClick={() => setFilter('seminar')} className={filter === 'seminar' ? styles.active : ''}>Seminars</button>
        </div>
        <div className={styles.eventCards}>
          <EventCard filter={filter} />
        </div>
        <button className={styles.viewAll}>View All</button>
      </section>
      <section className={styles.howItWorks}>
        <h2>How It Works?</h2>
        <div className={styles.workboxes}>
          <div className={styles.workbox}>
            <div className = {styles.hImgContainer}>
              <img src = "/src/pages/images/Hworks.svg"></img>
            </div>
            <div className = {styles.hTextContainer}>
              Search For your Desired Event.
            </div>         
          </div>
          <div className={styles.workbox}>
            <div className = {styles.hImgContainer}>
              <img src = "/src/pages/images/Hworks2.svg"></img>
            </div>
            <div className = {styles.hTextContainer}>
              Explore Details and Check Requirements.
            </div>         
          </div>
          <div className={styles.workbox}>
            <div className = {styles.hImgContainer}>
              <img src = "/src/pages/images/Hworks3.svg"></img>
            </div>
            <div className = {styles.hTextContainer}>
              Register with Ease.
            </div>         
          </div>            
        </div>
      </section>

      <Testimonials />

      <Milestones />

      <Footer />
    </div>
  );
};

export default Homepage;