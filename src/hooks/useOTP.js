const useOTP=({setIsOtpSent, setIsResendAllowed, setShowOtpSection })=>{
    const sendOtp= async (email,isResend=false)=>{
        try{
            const values={email, isResend}
            const res=await fetch("http://localhost:1900/api/v1/otp",{
                method: "POST",
                body: JSON.stringify({values}),
                credentials: "include",
                headers:{
                    "content-type": "application/json",
                },
            });
            console.log(res);
            const data=await res.json();
            console.log(data);
            if(res.status===201){
                alert("OTP Sent");
                setIsOtpSent(true);
                setShowOtpSection(true);
            }
            else if(res.status===403){
                alert(data.message);
                setIsOtpSent(true);
                setShowOtpSection(true);
                setIsResendAllowed(true);
            }
            else{
                alert(data.message);
            }
        }
        catch(err)
        {
            console.log(err);
            alert(err.message);
        }

    };
    return {sendOtp};
};
export default useOTP;