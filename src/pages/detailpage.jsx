
import EventMoreDetails from "../Components/detailpage/eventMoreDetails";
import EventOverview from "../Components/detailpage/eventOverview";
import Footer from "../Components/LandingComponents/Footer";
import Navbar from "../Components/LandingComponents/Navbar";

const DetailPage = () => {
  return (
    <div className="styles.detailpage_main_container">
        <Navbar/>
        <EventOverview/>
        <EventMoreDetails></EventMoreDetails>
        <Footer></Footer>
    </div>
        
  );
};
export default DetailPage;

