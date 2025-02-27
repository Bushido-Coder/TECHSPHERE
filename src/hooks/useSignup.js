import { toast } from "react-toastify";

const useSignup = ({ setIsResendAllowed,onClose}) => {
  const registerUser = async ({  email, password, otp }) => {
    try {
      const res = await fetch("http://localhost:1900/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, otp }),
        headers: {
          "content-type": "application/json",
          credentials: "include",
        },
      });
      console.log(res);
      const data = await res.json();
      if (res.status == 201) {
        toast.success("User Registered");
        onClose();
      } else if (res.status === 401) {
        toast.error(data.message);
        setIsResendAllowed(true);
      } else if (res.status === 409) {
        toast.error(data.message);
        //redirect to login as user already exists,duplicate key error
      } else {
        toast(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return { registerUser };
};
export default useSignup;
