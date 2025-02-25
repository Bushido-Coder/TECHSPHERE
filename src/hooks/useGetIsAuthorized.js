import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {useState} from "react";
const useGetIsAuthorized=({setUserInfo})=>{
    const navigate= useNavigate();
    const getIsAuthorized= async ()=>{
        const res=await fetch("http://localhost:1900/api/v1/isAuthenticated",{
            credentials: "include"
        });

        const resObj=await res.json();
        if(res.status===200 && resObj.isAuthenticated=== true){
            setUserInfo({
                isAuthenticated: true,
                // name: resObj.user.name,
                email: resObj.user.email,
            })
        }

        else{
            // navigate("/login");
        }
    }
    useEffect(()=>{
        getIsAuthorized();
    },[]);
}

export default useGetIsAuthorized;