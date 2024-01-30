import House from "../../assets/images/House.png";
import "../../styles/Admin Styles/signupform.css";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const SignupForm = () => {
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
    <div className="d-flex justify-content-center sign-in vh-100">
      <div className="input-field bg-light p-3 p-md-5 col-md-6">
        <div className="header lh-1 mb-4 text-center text-md-start">
          <p className="text fw-bold fs-4 ">Create an admin account.</p>
          <p>Lets get started by filling out the information below</p>
        </div>
        <form className="inputs ">
          <div className="mb-3">
            <label htmlFor="email1" className="form-label fs-6">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow-none"
              placeholder="johndoe@gmail.com"
              id="email"
            />
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password1" className="form-label fs-6">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              className="form-control shadow-none"
              id="password1"
            />

            <button
              className="border-none border-0 outline-none bg-transparent position-absolute top-50"
              style={{ right: "7px", backgroundColor: "transparent" }}
              onClick={togglePassword}
            >
              {show ? <FaEyeSlash /> : <IoEyeSharp />}
            </button>
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label fs-6">
              Confirm Password
            </label>

            <input
              type={show2 ? "text" : "password"}
              placeholder="........"
              className="w-100 shadow-none"
            />
            <button
              className="border-none border-0 outline-none bg-transparent position-absolute top-50"
              style={{ right: "7px", backgroundColor: "transparent" }}
              onClick={togglePassword2}
            >
              {show2 ? <FaEyeSlash /> : <IoEyeSharp />}
            </button>
          </div>

          <button
            type="button"
            className="btn btn-success text-center w-100 btn-lg"
          >
            Sign up
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/admin/login" className="fw-bold text-success">
            Sign in
          </Link>
        </p>
      </div>
      <img
        src={House}
        alt="House Image"
        className=" w-50 rounded-left d-none d-md-block "
      />
    </div>
  );
};

export default SignupForm;
