import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(e.currentTarget);
    console.log(form.get("email"));
  };
  return (
    <div>
      <Navbar />
      <div className="w-3/4 md:w-3/4 lg:w-1/2 text-center mx-auto mt-20">
        <h2 className="text-4xl font-semibold py-6 border-b">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="full name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>

            <input
              type="text"
              name="photo"
              placeholder="photo"
              className="input input-bordered"
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p>
          Already Have An Account ?{" "}
          <Link to="/login" className="text-red-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
