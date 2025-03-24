import  { useState, } from 'react';
import Navbar from '/src/Components/LandingComponents/Navbar';
import EventCard from '/src/Components/eventCard.jsx';
import Footer from '/src/Components/LandingComponents/Footer';
import styles from './Homepage.module.css';
import Testimonials from '../Components/LandingComponents/TestimonialCard';
import Milestones from '../Components/LandingComponents/Milestones'; 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Homepage = ({manageLogin,userInfo,setUserInfo,eventdata}) => {
  // console.log("HomepAGE",userInfo);
  const [searchText, setSearchText] = useState(""); 
  const [filter, setFilter] = useState('all'); 
  const navigate = useNavigate();

  console.log("Event Data:", eventdata);
  console.log("Current Search Text Type:", typeof searchText, "Value:", searchText);

  const filteredEvents = eventdata.filter(event => {
    if (typeof searchText !== "string") {
      console.error("Invalid search text:", searchText);
      return true;
    }
  
    const matchesSearch = event.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesFilter = filter === 'all' || event.type.toLowerCase() === filter;
  
    return matchesSearch && matchesFilter;
  });
  

  console.log("Filtered Events:", filteredEvents);

  return (
    <div className={styles.homepage}>
      <Navbar onSearch={(value)=>setSearchText(value?.toString()||"")} manageLogin={manageLogin} userInfo={userInfo} setUserInfo={setUserInfo} />
    
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Your Gateway to Tech Events, Workshops & Hackathons</h1>
          <p>Explore, Apply, and Innovate with the best tech events around the world.</p>
          <Link to="/nonlogin" className={styles.registerButton}>Start Exploring</Link>
        </div>
        <div className={styles.bannerImage}>
          <img src="/src/pages/images/OBJECT.svg" alt="Banner" />
        </div>
      </section>

      <section className={styles.events}>
        <h2>List of Events</h2>
        <div className={styles.filters}>
        <button 
  onClick={() => setFilter('hackathon')} 
  className={`${styles.hackathon} ${filter === 'hackathon' ? styles.active : ''}`}
    >
      <div className={styles.logo}><img src = "/src/TestImages/hackathon.svg"></img></div><div className={styles.logotext}> Hackathon</div>
    </button>

    <button 
      onClick={() => setFilter('webinar')} 
      className={`${styles.webinar} ${filter === 'webinar' ? styles.active : ''}`}
    >
      <div className={styles.logo}><img src = "/src/TestImages/webinar.svg"></img></div><div className={styles.logotext}> Webinar</div>
    </button>

    <button 
      onClick={() => setFilter('workshop')} 
      className={`${styles.workshop} ${filter === 'workshop' ? styles.active : ''}`}
    >
      <div className={styles.logo}><img src = "/src/TestImages/workshop.svg"></img></div><div className={styles.logotext}> Workshop</div>
    </button>

    <button 
      onClick={() => setFilter('conference')} 
      className={`${styles.conference} ${filter === 'conference' ? styles.active : ''}`}
    >
      <div className={styles.logo}><img src = "/src/TestImages/conference.svg"></img></div><div className={styles.logotext}> Conference</div>
    </button>
        </div>

        <div className={styles.eventDisplay}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => <EventCard key={index} eventdata={event} />)
          ) : (
            <p className={styles.noEventsText}>No events found.</p>
          )}
        </div>
        <div className={styles.viewAllButton}>
          <button onClick={() => navigate("/nonlogin")} className={styles.viewAll}>
            View All
          </button>
        </div>
      </section>

      <Testimonials />
      <Milestones />
      <Footer />
    </div>
  );
};

Homepage.propTypes = {
  eventdata: PropTypes.array.isRequired,
  manageLogin: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  setUserInfo: PropTypes.func.isRequired,

};

export default Homepage;
