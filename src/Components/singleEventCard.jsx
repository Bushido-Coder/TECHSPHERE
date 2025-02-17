import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./eventCard.css";

const SingleEventCard = ({ event, imageBg }) => {
  console.log("event",event);
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="event-card">
      <div className="image-container" style={{ backgroundColor: imageBg }}>
        <img className="img" src="/Illustration.png" alt="Illustration" />
      </div>
      <div className="event-header">
        <p className="event-location">{event.location}</p>
        <div className="bookmark-icon" onClick={() => setBookmarked(!bookmarked)}>
          {bookmarked ? (
            <img src="bookmark (1).png" alt="Bookmarked" />
          ) : (
            <img src="bookmark.png" alt="Bookmark" />
          )}
        </div>
      </div>
      <h4 className="event-name">{event.name}</h4>
      <p className="event-description">{event.description}</p>
      <p className="event-detail">
        Start: <span className="bold-text">{event.start}</span>
      </p>
      <p className="event-detail">
        Duration: <span className="bold-text">{event.duration}</span>
      </p>
      <p className="event-detail">
        Prize Pool: <span className="bold-text">{event.prize}</span>
      </p>
      <button onClick={() => navigate("/detail-page")} className="viewButton">
      View details
    </button>
      {/* <button className="viewButton">View details</button> */}
    </div>
  );
};

SingleEventCard.propTypes = {
  event: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Location: PropTypes.string.isRequired,
    Start: PropTypes.string.isRequired,
    Duration: PropTypes.string.isRequired,
    Prize: PropTypes.string.isRequired,
  }).isRequired,
  imageBg: PropTypes.string,
};

export default SingleEventCard;
