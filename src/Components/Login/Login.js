import "./Login.css";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
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
    signInWithEmailAndPassword(email, pass);
    navigate("/");
    event.preventDefault();
  };
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
          className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"
        >
          Login
        </button>
        <p className="text-center mb-4">Forgot password?</p>
        <p className="text-center mb-4">
          New to my site?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>

        <label className="text-gray-800 mb-4">or</label>
        <button className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">
          Sign with Google
        </button>
        <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">
          Sign with Facebook
        </button>
        <button className="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-2">
          Sign with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
