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
        alert("User Registered");
        onClose();
      } else if (res.status === 401) {
        alert(data.message);
        setIsResendAllowed(true);
      } else if (res.status === 409) {
        alert(data.message);
        //redirect to login as user already exists,duplicate key error
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return { registerUser };
};
export default useSignup;
