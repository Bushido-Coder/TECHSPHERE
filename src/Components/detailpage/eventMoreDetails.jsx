import styles from "./eventMoreDetails.module.css";
import { eventMoreDetailsData } from "../../constants/eventmoredetails-data";
const EventMoreDetails = () => {
  return (
    <div className={styles.eventmoredetails_main_container}>
      {/* Major container of event more detail(tab menu+details section)*/}
      <div className={styles.eventmoredetails_tab_menu}>
        {/*Major container of tab menu(flex inside which 4 div)*/}
        {eventMoreDetailsData.map((elem) => {
          return (
            <button key={elem.id} className={styles.tab_menu_item}>
              {elem.heading}
            </button>
          );
        })}
      </div>
      <div className={styles.eventdetails_container}>
        {/*eligibilty, timeline, details, speaker-info*/}
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_eligibility}`}
        >
          {/*eligibilty main container*/}
          <h1 className={styles.elgibility_heading}>
            {eventMoreDetailsData[0].heading}
          </h1>
          {eventMoreDetailsData[0].text.map((elem, idx) => {
            return <span key={idx}>{elem}</span>;
          })}
        </div>
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_timeline}`}
        >
          {/*timeline main container*/}
          <h1 className={styles.elgibility_heading}>
            {eventMoreDetailsData[1].heading}
          </h1>
          {eventMoreDetailsData[1].days.map((elem, idx) => {
            return (
              <>
                <h3 key={idx}>{Object.keys(elem)[0]}</h3>
                {Object.values(elem)[0].map((arr, idx) => {
                  return <h3 key={idx}>{arr}</h3>;
                })}
                {/* <h3 key={idx}>{Object.values(elem)[0]}</h3>  */}
              </>
            );
          })}
        </div>
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_details}`}
        >
          {/*timeline main container*/}
          <h1 className={styles.elgibility_heading}>
            {eventMoreDetailsData[2].heading}
          </h1>
          {eventMoreDetailsData[2].text.map((elem, idx) => {
            return (
              <>
                <h3 key={idx}>{Object.keys(elem)[0]}</h3>
                {Object.values(elem)[0].map((arr, idx) => {
                  return <p key={idx}>{arr}</p>;
                })}
              </>
            );
          })}
        </div>
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_speaker_info}`}
        >
          {/*timeline main container*/}
          <h1 className={styles.elgibility_heading}>
            {eventMoreDetailsData[3].heading}
          </h1>
          <h3>{eventMoreDetailsData[3].title}</h3>
          <img src={eventMoreDetailsData[3].imgSrc} />
          <p>{eventMoreDetailsData[3].subTitle}</p>
        </div>
      </div>
    </div>
  );
};
export default EventMoreDetails;
