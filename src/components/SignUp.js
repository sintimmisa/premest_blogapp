import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
   
  return (
    <div className="sign-up mt-5">
      <form action="" method="">
        <h2 className="text-center">Create Account</h2>
        <div className="form-group px-5">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
    
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-paper-plane pl-2.5"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-lock pl-2.5"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-lock pl-2.5"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Password"
              aria-label="confirm password"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            
                >
              Sign Up
            </button>
          </div>
          

          <div className="text-center">
            Already have an account? <Link to="/login">Login here</Link>.
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
