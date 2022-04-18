import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithGoogle, googleUser, errorOfGoogleSign] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const userLogin = (event) => {
    if (error) {
      toast("Please provide valid email and password.");
      return;
    }
    if (!email || !pass) {
      toast("Please fill all the input");
      return;
    }
    if (email && pass) {
      signInWithEmailAndPassword(email, pass);
    }
    event.preventDefault();
  };
  // for sign in with google
  const signInByGoogle = () => {
    signInWithGoogle();
  };

  // for password reset email
  const sendPassResetEmail = async () => {
    if (!email.includes(".com")) {
      toast("Please enter a valid email address");
    } else {
      await sendPasswordResetEmail(email);
      toast("Password Reset Email Sent");
    }
  };

  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="w-full mt-10 flex items-center justify-center">
      <div className="bg-gray-200 w-96 h-auto rounded-lg pt-2 pb-8 px-8 flex flex-col items-center">
        <label className="font-light text-4xl mb-4">Sign In</label>
        <input
          onBlur={handleEmail}
          type="text"
          className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
          placeholder="Email"
        />
        <input
          onBlur={handlePass}
          type="password"
          className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
          placeholder="Password"
        />
        <button
          onClick={userLogin}
          className="w-full h-12 rounded-lg bg-gray-900 text-gray-200 uppercase font-semibold hover:bg-gray-700 text-gray-100 transition mb-4"
        >
          Login
        </button>
        {error}
        <button onClick={sendPassResetEmail} className="text-center mb-4">
          Forgot password?
        </button>
        <p className="text-center mb-4">
          New to my site?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
        <ToastContainer />

        <label className="text-gray-800 mb-4">or</label>
        {/* Button for sign in with google */}
        <button
          onClick={signInByGoogle}
          className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
        >
          Sign with Google
        </button>
        {/* Button for sign in with facebook */}
        <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">
          Sign with Facebook
        </button>
        {/* Button for sign in with github */}
        <button className="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-2">
          Sign with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
