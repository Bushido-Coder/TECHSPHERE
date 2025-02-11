
import EventMoreDetails from "../components/detailpage/eventMoreDetails";
import EventOverview from "../components/detailpage/eventOverview";
// import Footer from "../components/footer";
import Navbar from "../components/navbar";

const DetailPage = () => {
  return (
    <div className="styles.detailpage_main_container">
        <Navbar/>
        <EventOverview/>
        <EventMoreDetails></EventMoreDetails>
        {/* <Footer></Footer> */}
    </div>
  );
};
export default DetailPage;
