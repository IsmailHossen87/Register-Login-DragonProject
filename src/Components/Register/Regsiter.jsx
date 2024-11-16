import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Regsiter = () => {
  const { createUser, setUser ,updatedata} = useContext(AuthContext);
  const [error, setError] = useState({name:'',password:''});
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    updatedata({displayName:name ,photoURL:photo})
    if (password.length < 5) {
      // setError({ ...error, password: "minimun 6 digit" });
      setError((prev)=>(
        {
          ...prev, password:'password must be 6 carecter'
        }
      ))
    } else{
      const errorData = {...error}
      errorData.password=''
      setError(errorData)
    }
   if (name.length < 5) {
      // setError({ ...error, name: "minimun 6 charecter" });
      setError((prev)=>(
        {
          ...prev,
          name:'name must be 5 carecter'
        }
      ))
    }
    else{
      const errorData = {...error}
      errorData.name=''
      setError(errorData)
    }
   createUser(email, password)
    .then((res) => {
      const user = res.user;
      setUser(user);
    })
    .catch((error) => {
    });
}
  return (
    <div className="flex justify-center  items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-4">
        <h2 className="font-bold text-xl text-center ">
          Register Your Account !
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          {error.name && (
            <div className="font-bold text-red-600">{error.name}</div>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL//"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
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
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.password && (
              <div className="font-bold text-red-600">{error.password}</div>
            )}
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
        <p className="font-semibold text-center">
          Already have an Account ?{" "}
          <Link
            className="font-semibold underline text-blue-600"
            to={"/auth/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regsiter;
