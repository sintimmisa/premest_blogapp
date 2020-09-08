import React, { useState} from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
  
    const [loginData, setLoginData] = useState({
        username: "",
       password:"",
       
    });

    const { username, password } = loginData;


    const handleChange= (e) => {
        setLoginData({
            ...loginData, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "sim" && password === "123") {
            alert("Login Successfull ")
            console.log(loginData); 
            
           
            
        }
        else {
            console.log("Wrong username or password");
        }
    

    }
    

    return (
       
       
      <div className="login mt-5">
        <form action="localhost:3000/createpost" method="POST">
          <h2 className="text-center">Login</h2>
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
                aria-label="username"
                aria-describedby="basic-addon1"
                required="required"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-lock pl-2.5"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                required="required"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <Link to='/'
                type="button"
                className="btn btn-primary btn-block btn-lg" onClick={handleSubmit}
               
            >
               
                Login
              </Link>
            </div>

            <div className="text-center">
              Don't have an account?{" "}
                        <Link to="/signup">Create an Account here</Link>.
                        {JSON.stringify(loginData)}
            </div>
          </div>
        </form>
      </div>
    );
}
export default Login;