import House from "../../assets/images/House.png";
import "../../styles/User Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";

// import search from "../assets/search.png";

const Signup = () => {
  const { isDark } = useGlobalContext();
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const togglePassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const togglePassword2 = (e) => {
    e.preventDefault();
    setShow2(!show2);
  };

  return (
    <div className="vh-100 overflow-y-hidden">
      <div className={isDark ? "DarkMode" : null}>
        <div className="col-12 d-flex justify-content-between m-auto ">
          <div className="col-md-6 d-flex flex-column justify-content-center container p-lg-5">
            <h2 className="fs-4 mt-3">
              Join our community of home seekers and explore the possibilities
              that await.
            </h2>

            <p className="text-secondary ">
              Lets get started by filling out the information below
            </p>

            <form className="d-flex flex-column gap-3">
              <div className="d-flex flex-wrap gap-3 w-100">
                <div className="flex-grow-1">
                  <label htmlFor="firstname" className="d-block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-100"
                    required
                  />
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="firstname" className="d-block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-100"
                    required
                  />
                </div>
              </div>

              <div className="w-100">
                <label htmlFor="email" className="d-block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-100"
                  required
                />
              </div>
              <div className="w-100 position-relative">
                <label htmlFor="email" className="d-block">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="........"
                  className="w-100"
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
              <div className="w-100 position-relative">
                <label htmlFor="password" className="d-block">
                  Confirm Password
                </label>
                <input
                  type={show2 ? "text" : "password"}
                  placeholder="........"
                  className="w-100"
                  required
                />
                <button
                  className="border-none border-0 outline-none bg-transparent position-absolute top-50"
                  style={{ right: "7px", backgroundColor: "transparent" }}
                  onClick={togglePassword2}
                >
                  {show2 ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>
              <div className="d-flex w-100 align-items-center">
                <input
                  type="checkbox"
                  className="usersignup-checkbox"
                  required
                />
                <label htmlFor="checkbox" className="ms-1">
                  I agree to{" "}
                  <a href="" className="text-danger">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="" className="text-danger">
                    Privacy Policies
                  </a>
                </label>
              </div>

              <button className="btn bg-success text-white w-100">
                Sign Up
              </button>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-success fw-bold">
                  Sign In
                </Link>
              </p>
            </form>
          </div>

          <div className="col-md-6 d-lg-block d-none">
            <img src={House} alt="" className="vh-100 w-100 object-fit-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
