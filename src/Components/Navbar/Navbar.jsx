import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import userImage from "../../assets/user.png";

const Navbar = () => {
  const { user, singout } = useContext(AuthContext);
  return (
    <div className="flex justify-between mt-4 px-5">
      {/* khali */}
      <div className="ml-5 font-bold text-xl"> {user && user?.email} </div>
      {/* middle */}
      <div className="font-bold flex gap-4">
        <Link to={"/"}> Home</Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/career"}> Career</Link>
      </div>
      {/* right */}
      <div className="flex gap-3 items-center">
        {user && user?.email ? (
          <div>
            <img className="w-[60px] rounded-full" src={user.photoURL} alt="" />
            <p>{user.displayName}</p>
          </div>
        ) : (
          <img src={userImage} alt="" />
        )}
        <div>
          {user && user?.email ? (
            <button onClick={singout} className="btn btn-primary">
              Log-Out
            </button>
          ) : (
            <Link to={"/auth/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
