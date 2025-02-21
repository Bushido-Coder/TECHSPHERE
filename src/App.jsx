import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import "./App.css";
import Homepage from "./pages/Homepage";
import Registration from "./Components/registrationPopUp.jsx";
import Nonloginpage from "./pages/nonLoginPage.jsx";
import DashboardHomePage from "./pages/dashboardHomePage.jsx";
import DashboardPastEvents from "./pages/dashboardPastEvents.jsx";
import DashboardBookmarkEvents from "./pages/dashboardBookmark.jsx";
import DetailPage from "./pages/detailpage";

const App = () => {
  const [eventdata, setEventdata] = useState([]);
  const getEventdata = async () => {
    const res = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/v1/eventcard"
    );
    const resObj = await res.json();
    setEventdata(resObj.data);
    console.log(resObj.data);
  };
  useEffect(() => {
    getEventdata();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage eventdata={eventdata} />}></Route>
        <Route path="/detail-page" element={<DetailPage />}></Route>
        <Route
          path="/nonlogin"
          element={<Nonloginpage eventdata={eventdata} />}
        ></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/dashboard" element={<DashboardHomePage />}></Route>
        <Route path="/dashboard/past" element={<DashboardPastEvents />}></Route>
        <Route
          path="/dashboard/bookmark"
          element={<DashboardBookmarkEvents />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
