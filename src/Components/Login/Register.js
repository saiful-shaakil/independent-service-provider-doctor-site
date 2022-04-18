import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const formRef = useRef("");
  const checkboxRef = useRef("");
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  // function for creating new account
  const createAccount = async () => {
    // taking the input item from form
    const name = formRef.current.fullname.value;
    const email = formRef.current.email.value;
    const pass = formRef.current.password.value;
    const confirm_pass = formRef.current.confirm_password.value;
    if (pass !== confirm_pass) {
      toast("Your confirm password not matching");
      return;
    }
    if (name && email && pass && confirm_pass) {
      await createUserWithEmailAndPassword(email, pass);
      await updateProfile({ displayName: name });
    } else {
      toast("Please fill the full form");
    }
    if (user) {
      navigate("/login");
    }
  };

  return (
    <div className="flex mt-10 flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-gray-200 px-6 py-4 rounded-lg shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
          <form ref={formRef}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <input
              ref={checkboxRef}
              onClick={() => setAgree(!agree)}
              className={"mb-3"}
              type="checkbox"
              name="terms"
              id="terms"
            />
            &nbsp;
            <label
              className={agree ? "text-blue-600" : "text-black"}
              htmlFor="terms"
            >
              Accept terms and conditions
            </label>
          </form>
          <button
            disabled={!agree}
            onClick={createAccount}
            type="submit"
            className={`"w-full text-center py-3 rounded  text-gray-200  hover:bg-green-dark focus:outline-none my-1" ${
              agree ? "bg-gray-900 w-full" : "bg-gray-500 w-full"
            } `}
          >
            Create Account
          </button>

          <ToastContainer />
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-black mt-6">
          Already have an account?
          <Link
            to="/login"
            className="no-underline border-b border-blue text-blue"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
