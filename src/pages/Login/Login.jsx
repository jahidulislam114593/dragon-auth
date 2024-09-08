import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { user, signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const e = error.message.split("(")[1].split(")")[0];
        console.log(e);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="w-3/4 md:w-3/4 lg:w-1/2 text-center mx-auto mt-20">
        <h2 className="text-4xl font-semibold py-6 border-b">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>
          Dont’t Have An Account ?{" "}
          <Link to="/register" className="text-red-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
