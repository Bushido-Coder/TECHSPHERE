import PropTypes from 'prop-types';
import Eventcard from './eventCard';

const RegisteredEvents = ({ registeredEvents }) => {
  return (
    <div>
      {registeredEvents.length > 0 ? (
        <Eventcard eventdata={registeredEvents} />
      ) : (
        <p>No Registered Events Found!</p>
      )}
    </div>
  );
};

RegisteredEvents.propTypes = {
  registeredEvents: PropTypes.array.isRequired,
};
  
  export default RegisteredEvents;
  