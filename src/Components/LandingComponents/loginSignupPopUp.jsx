import { useState, useRef } from "react";
import styles from "./loginSignupPopUp.module.css";
import useOTP from "../../hooks/useOTP";
import useSignup from "../../hooks/useSignup";
import useLogin from "../../hooks/useLogin";
import { toast } from "react-toastify";
import PropTypes from "prop-types";



const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/forgotPassword`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log("Response Data:", data); 

      if (response.ok) {
        setMessage("Reset link sent to your email.");
        setIsSubmitted(true);
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setMessage("Failed to send request. Please try again.");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {isSubmitted ? (
        <p>{message}</p> 
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

const LoginSignupPopup = ({ onClose, userInfo, manageLogin }) => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [isResendAllowed, setIsResendAllowed] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResetPassword, setIsResetPassword] = useState(false);
  const otpInputs = useRef([]);

  const { sendOtp } = useOTP({ setIsOtpSent, setIsResendAllowed, setShowOtpSection });
  const { registerUser } = useSignup({ setIsResendAllowed, onClose });
  const { login, loading } = useLogin({ manageLogin, onClose });

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const handleSendOtp = async (e, isResend) => {
    e.preventDefault();
    if (email.length <= 5) {
      toast.error("Invalid Email!");
      return;
    }
    sendOtp(email, isResend);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const otp = otpInputs.current.map((input) => input.value).join("");
    registerUser({ otp, password, email });
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupOuter}>
        <div className={styles.logoContainer}>
          <img src="/images/LoginLogo.svg" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.popupContent}>
          <div className={styles.closeBtnContainer}>
            <button className={styles.closeBtn} onClick={onClose}>&times;</button>
          </div>

          <div className={styles.authTabs}>
            <button onClick={() => { setIsLogin(true); setIsResetPassword(false); setShowOtpSection(false); }} className={isLogin ? styles.active : ""}>Login</button>
            <button onClick={() => { setIsLogin(false); setIsResetPassword(false); setShowOtpSection(false); }} className={!isLogin ? styles.active : ""}>Sign Up</button>
          </div>

          {isResetPassword ? (
            <ForgotPassword />
          ) : (
            !showOtpSection ? (
              <form onSubmit={(e) => isLogin ? handleLogin(e) : handleSendOtp(e, false)}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {isLogin && <p className={styles.resetPassword} onClick={() => setIsResetPassword(true)}>Reset password?</p>}
                <button disabled={loading} type="submit">{isLogin ? "Login" : "Send OTP"}</button>
              </form>
            ) : (
              <form onSubmit={handleCreateUser}>
                <div className={styles.otpContainer}>
                  <p>Enter the OTP sent to your email</p>
                  <div className={styles.otpInputs}>
                    {[0, 1, 2, 3].map((index) => (
                      <input key={index} type="text" maxLength="1" ref={(el) => (otpInputs.current[index] = el)} required />
                    ))}
                  </div>
                  <button type="button" hidden={!isResendAllowed} onClick={(e) => handleSendOtp(e, true)}>Resend</button>
                  <button type="submit">Verify OTP</button>
                </div>
              </form>
            )
          )}

          <div className={styles.thirdPartyAuth}>
            <button onClick={() => toast("Login with Google")}>Login with Google</button>
          </div>

          {isLogin && <p className={styles.signupPrompt}>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span></p>}
        </div>
      </div>
    </div>
  );
};

LoginSignupPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  manageLogin: PropTypes.func.isRequired,
};

export default LoginSignupPopup;
