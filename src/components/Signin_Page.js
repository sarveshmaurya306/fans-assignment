import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, OAuthProvider} from 'firebase/auth';
import { auth } from './services/firebase.js';  
 
const googleOAuthProvider = new GoogleAuthProvider();
const appleOAuthProvider = new OAuthProvider('apple.com');
appleOAuthProvider.addScope('profile');

const Signin_Page = () => {

  function signInWithGoogleButtonHandler() {
    signInWithPopup(auth, googleOAuthProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem("isUserLoggedIn", "true")
      localStorage.setItem("userImg", user?.photoURL)
      navigate('/dashboard')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('err', credential);
    });
  }

  function signInWithAppleButtonHandler() {
    signInWithPopup(auth, appleOAuthProvider)
    .then((result) => {
      const user = result.user;
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      localStorage.setItem("isUserLoggedIn", "true")
      navigate('/dashboard')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = OAuthProvider.credentialFromError(error);
      console.log(credential, 'err');
    });
  }


  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const SetData = (input, event) => {
    setSigninData({ ...signinData, [input]: event.target.value });
  };

  const ClickHandler = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(signinData.email) && signinData.password) {
      localStorage.setItem("isUserLoggedIn", "true")
      navigate("/dashboard");
      setAlert(false);
    } else setAlert(true);
  };
  return (
    <div className="block md:flex w-[100vw] h-[100vh]">
      <aside className="bg-black text-white flex items-center justify-center text-5xl lg:text-7xl font-bold py-6 w-full md:py-0 md:w-2/5">
        Board.
      </aside>
      <aside className="bg-[#F5F5F5] flex-1 flex justify-center items-center py-5 md:py-0">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold">Sign In</h1>
          <h3 className="font-normal text-base">Sign in to your account</h3>
          <div className="flex justify-between items-center my-6">
            <div onClick={()=>signInWithGoogleButtonHandler()} className="py-2 px-2 md:px-5 bg-white rounded-xl flex items-center space-x-3 cursor-pointer">
              <img src="./assets/google.png" alt="google" />
              <p className="text-[#858585] text-xs">Sign in with Google</p>
            </div>
            <div onClick={()=>signInWithAppleButtonHandler()} className="py-2 px-2 md:px-5 bg-white rounded-xl flex items-center space-x-3 cursor-pointer">
              <img src="./assets/apple.png" alt="apple" />
              <p className="text-[#858585] text-xs">Sign in with Apple</p>
            </div>
          </div>
          <div className="bg-white p-3 md:p-7 rounded-2xl">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="bg-[#F5F5F5] focus:bg-[#EAEAEA] px-4 py-2 w-72 sm:w-80 rounded-lg mt-2 outline-none block mb-5"
              onChange={(event) => SetData("email", event)}
              value={signinData.email}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="bg-[#F5F5F5] focus:bg-[#EAEAEA] px-4 py-2 w-72 sm:w-80 rounded-lg mt-2 outline-none block"
              onChange={(event) => SetData("password", event)}
              value={signinData.password}
            />
            <h3 className="text-[#346BD4] my-5 cursor-pointer">
              Forgot password?
            </h3>
            {alert && (
              <div className="text-red-400 text-sm font-semibold mb-2">
                Please Check Email Address and Password
              </div>
            )}
            <button
              className="font-bold bg-black text-white w-72 sm:w-80 rounded-lg py-2"
              onClick={ClickHandler}
            >
              Sign In
            </button>
          </div>
          <p className="text-[#858585] mt-5 text-center">
            Don’t have an account?{" "}
            <span className="text-[#346BD4] cursor-pointer">Register here</span>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Signin_Page;
