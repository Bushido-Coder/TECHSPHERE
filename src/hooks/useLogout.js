import { toast } from "react-toastify";

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
              toast.success("Logout Succesful!");
            //   navigate('/');
            } 
              else {
              toast(data.message);
            }
          } 
          catch (err) {
            console.log("catch");
            toast.error(err.message);
          }
    }
    return {logout};    
}
export default useLogout;