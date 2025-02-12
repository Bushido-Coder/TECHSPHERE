
import { BrowserRouter, Routes, Route,} from "react-router";
import './App.css';
import Homepage from './pages/Homepage';

import Registration from './Components/registrationPopUp.jsx';
import Nonloginpage from './pages/nonLoginPage.jsx';
import DashboardHomePage from './pages/dashboardHomePage.jsx';
import DashboardPastEvents from './pages/dashboardPastEvents.jsx';
import DashboardBookmarkEvents from './pages/dashboardBookmark.jsx';

const App=()=>
    {
     return(
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Homepage/>}></Route>
    
          <Route path="/nonlogin" element={<Nonloginpage/>}></Route>
          <Route path="/register" element={<Registration />}></Route>
           <Route path="/dashboard" element={<DashboardHomePage />}></Route> 
            <Route path="/dashboard/past" element={<DashboardPastEvents />}></Route>
            <Route path="/dashboard/bookmark" element={<DashboardBookmarkEvents />}></Route>
            
       
         
        </Routes>
        </BrowserRouter>
     );
    }
    export default App;
