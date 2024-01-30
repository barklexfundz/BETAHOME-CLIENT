// import House from "../../assets/images/House.png";
import "../../styles/User Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import House from "../../assets/images/House.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
// import "../../styles/Admin Styles/AdminSignupForm.css";
// import search from "../../assets/images/search.png";

const Login = () => {
  const { isDark } = useGlobalContext();
  const [show, setShow] = useState(true);

  const togglePassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div className={isDark ? "DarkMode" : null}>
      <div className=" vh-100 overflow-y-hidden d-flex justify-content-center w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="input-field p-3 p-md-5 col-12">
            <div className="header lh-1 mb-4 text-center text-md-start">
              <p className="text fw-bold fs-4">Welcome Back to Betahouse</p>
              <p>Enter your details to access your account</p>
            </div>
            <form className="inputs ">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fs-6">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control active shadow-none"
                  placeholder="abc@gmail.com"
                  id="email"
                  required
                />
              </div>

              <div className="mb-3 position-relative">
                <div className="password-field d-flex justify-content-between ">
                  <label htmlFor="password" className="form-label fs-6">
                    Password
                  </label>
                  {/* <span className="text-danger">Forgot Password?</span> */}
                </div>
                <input
                  type={show ? "text" : "password"}
                  className="form-control shadow-none "
                  id="password"
                  required
                />
                <button
                  className="border-none border-0 outline-none bg-transparent position-absolute top-50"
                  style={{ right: "7px", backgroundColor: "transparent" }}
                  onClick={togglePassword}
                >
                  {show ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>

              <div className="form-check py-2">
                <input
                  className="usersignup-checkbox shadow-none"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>

              <button
                type="button"
                className="btn btn-success text-center w-100 btn-lg"
              >
                Sign in
              </button>
            </form>

            <p className="mt-2">
              New user?{" "}
              <Link to="/signup" className="fw-bold text-success">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <img
          src={House}
          alt="House Image"
          className=" w-50 rounded-left d-none d-md-block "
        />
      </div>
    </div>
  );
};

export default Login;
