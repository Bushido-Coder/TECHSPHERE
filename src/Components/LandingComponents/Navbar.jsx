import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../LandingComponents/Navbar.module.css";
import Logo from "/src/assets/logo.svg";
import LoginSignupPopup from "./loginSignupPopUp"; 
import useLogout from "../../hooks/useLogout";
 import SearchBar from "../searchBar.jsx";

const Navbar = ({manageLogin,userInfo,setUserInfo,onSearch,filter=""}) => {
   console.log("Navbar",userInfo);

  const {isAuthenticated, email}=userInfo || {};
  const {logout}=useLogout({setUserInfo});
  // console.log(isAuthenticated);
  // console.log(email);
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const userEmail = localStorage.getItem("userEmail");


  const handleLogout = async () => {
      logout();
    // try {
    //   const response = await fetch("http://localhost:5000/api/auth/logout", {
    //     method: "POST",
    //     credentials: "include", // Ensures cookies are sent with the request
    //   });
  
    //   if (response.ok) {
    //     localStorage.removeItem("userEmail"); // Remove email from local storage
    //     // localStorage.removeItem("token"); 
    //     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear cookie
    //     window.location.reload(); // Reload the page to reflect logout
    //     alert("Logged out!");
    //   } else {
    //     console.error("Logout failed");
    //   }
    // } catch (error) {
    //   console.error("Error during logout:", error);
    // }
  };
  
  
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.searchContainer}>
          <SearchBar onSearch={(value) => onSearch(value?.toString() || "")} filter={filter} />
        </div>
        <div className={styles.buttons}>
        {isAuthenticated ? (
          <div className={styles.userDropdown}>
            <button onClick={() => setShowDropdown(!showDropdown)}>
              {email} ▼
            </button>
            {showDropdown && (
              <div className={styles.dropdownContent}>
                <a href="/dashboard">My Dashboard</a>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className={styles.loginButton} onClick={() => setShowPopup(true)}>
              Log In
            </button>
            <button className={styles.signupButton} onClick={() => setShowPopup(true)}>
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* Render the login/signup popup when needed */}
      {showPopup && <LoginSignupPopup manageLogin={manageLogin} onClose={() => setShowPopup(false)} />}
    </nav>
    
    </>
  );
}

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  filter: PropTypes.string,
  SetFilter: PropTypes.func,
  manageLogin: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  setUserInfo: PropTypes.func.isRequired,

};

export default Navbar;
