const useLogout=({setUserInfo})=>{
    const logout=async()=>{
        try {
            const res = await fetch("http://localhost:1900/api/v1/auth/logout", {
              method: "POST",
              credentials: "include",
              headers: {
                "content-type": "application/json",
                
              },
            });
            // console.log(res);
            const data = await res.json();
            if (res.status == 200) {
                setUserInfo({ isAuthenticated: false, email: "" });
              alert("Logout Succesful!");
            //   navigate('/');
            } 
              else {
              alert(data.message);
            }
          } 
          catch (err) {
            console.log("catch");
            alert(err.message);
          }
    }
    return {logout};    
}
export default useLogout;