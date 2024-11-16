import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const navigate = useNavigate()
  const Location = useLocation()
  
  const {createLogin,setUser}= useContext(AuthContext)
  const [error,setError] = useState({})
    const handleSubmit = event => {
 
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        createLogin(email,password)
        .then(res =>{
          const user = res.user ;
          setUser (user)
          navigate(Location?.state ? Location.state : '/')
        })
        .catch(err => {
          setError({...err, login : err.code})
        })
    }
    return (
        <div className="flex justify-center -mt-20 items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-4">
        <h2 className="font-bold text-xl text-center py-2">Login Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
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
            {/* show error message */}
            {
              error.login && ( <label className="label text-red-600">
               {error.login}
              </label>)
            }
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
        <p className="font-semibold text-center">Don't Have an Account ? <Link className="font-semibold underline text-blue-600" to={'/auth/register'}>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;