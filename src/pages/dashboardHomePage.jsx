import { useState } from "react";
import MenuBar from "../Components/menuBar.jsx";
import SavedEvents from "../Components/bookMarkEvent.jsx";
import PastEvents from "../Components/pastEvent.jsx";
import useDashboard from "../hooks/useDashboard.js"; 
import RegisteredEvents from "../Components/registredEvent.jsx";
import "./dashboardHomePage.css";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("registered");
  const { bookmarkedEvents, pastEvents } = useDashboard();
  console.log(activeTab);
  console.log("bookmarkedEvents in dashboardhomepage", bookmarkedEvents);
  const navigate=useNavigate();
  const handlechange = () => navigate("/nonlogin");
  return (
    <div className="dashboard-container">
      <MenuBar setActiveTab={setActiveTab} />

      <div className="dashboard-content">
        <div className="header">
          <h2 className="heading">
            {activeTab === "registered"
              ? "Registered Events"
              : activeTab === "saved"
              ? "Saved Events"
              : "Past Events"}
          </h2>
          <button onClick={handlechange}className="explore-btn">Explore Events</button>
      
        </div>

        {/* Pass fetched data to respective components */}
         {activeTab === "registered" && <RegisteredEvents />} 
        {activeTab === "saved" && <SavedEvents bookmarkedEvents={Array.from(bookmarkedEvents)} />}
        {activeTab === "past" && <PastEvents pastEvents={pastEvents} />}
      </div>
    </div>
  );
};


export default Dashboard;
