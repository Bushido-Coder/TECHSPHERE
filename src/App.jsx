
import {  Routes, Route,} from "react-router";
import { useState} from "react";
import './App.css';
import Homepage from './pages/Homepage';
import Registration from './Components/registrationPopUp.jsx';
import Nonloginpage from './pages/nonLoginPage.jsx';
import DashboardHomePage from './pages/dashboardHomePage.jsx';
import DashboardPastEvents from './pages/dashboardPastEvents.jsx';
import DashboardBookmarkEvents from './pages/dashboardBookmark.jsx';
import DetailPage from "./pages/detailpage";
// import { useState } from "react";
import useGetIsAuthorized from "./hooks/useGetIsAuthorized.js";
import useFetchEvents from "./hooks/useFetchEvents.js";

// const App=()=>
//     {
//       const [eventdata, setEventdata] = useState([]);
//       const [userInfo, setUserInfo]=useState({
//         isAuthenticated: false
//       });

//       useGetIsAuthorized({setUserInfo});

//         const manageLogin=({email})=>{
//             setUserInfo({
//               isAuthenticated: true,
//               email: email
//             })
//           }
//   const getEventdata = async () => {
//     const res = await fetch(
//       import.meta.env.VITE_BACKEND_URL + "/api/v1/events",{
//         method: "GET",
//         credentials: "include",
//       }
//     );
//     // const res = await fetch("http://localhost:1900/api/v1/eventcard", {
//     //   method: "GET",
//     //   credentials: "include",
//     // });
//     const resObj = await res.json();
//     setEventdata(resObj.data);
//     console.log(resObj.data);
//   };
//   useEffect(() => {
//     getEventdata();
//   }, []);
        

//         const {isAuthenticated} = userInfo;
//           // console.log("App",userInfo);

//      return(
        
     
//         <Routes>
//          <Route path="/" element={<Homepage eventdata={eventdata} manageLogin={manageLogin} userInfo={userInfo}  setUserInfo={setUserInfo}/>}></Route>
//          <Route path="/detail-page" element={<DetailPage/>}></Route>
//           <Route path="/nonlogin" element={<Nonloginpage eventdata={eventdata}/>}></Route>
//           <Route path="/register" element={<Registration />}></Route>
//            <Route path="/dashboard" element={<DashboardHomePage />}></Route> 
//             <Route path="/dashboard/past" element={<DashboardPastEvents />}></Route>
//             <Route path="/dashboard/bookmark" element={<DashboardBookmarkEvents />}></Route>               
//         </Routes>

      
//      );
//     }
//     export default App;


const App = () => {
  const { eventData, loading, error } = useFetchEvents(); // Fetch all events
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
  });

  useGetIsAuthorized({ setUserInfo });

  const manageLogin = ({ email }) => {
    setUserInfo({
      isAuthenticated: true,
      email: email,
    });
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Routes>
      <Route path="/" element={<Homepage eventdata={eventData} manageLogin={manageLogin} userInfo={userInfo} setUserInfo={setUserInfo} />} />
      <Route path="/detail-page/:eventId" element={<DetailPage />} />
      <Route path="/nonlogin" element={<Nonloginpage eventdata={eventData} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<DashboardHomePage />} />
      <Route path="/dashboard/past" element={<DashboardPastEvents />} />
      <Route path="/dashboard/bookmark" element={<DashboardBookmarkEvents />} />
    </Routes>
  );
};

export default App;