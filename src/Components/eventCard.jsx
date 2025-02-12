
import "./eventCard.css";
import eventdata from "../constants/eventData";
import SingleEventCard from "./singleEventCard";

const Eventcard = () => {
  return (
    <>
      {eventdata.map((event, index) => (
        <SingleEventCard key={index} event={event} imageBg={event.imageBg} />
      ))}
    </>
  );
};

export default Eventcard;


