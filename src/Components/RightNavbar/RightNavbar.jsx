import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const RightNavbar = () => {
  return (
    <div>
      <h3 className="font-bold">Login With</h3>
      <div className="flex flex-col gap-2">
        <button className="btn w-full">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn w-full">
          <FaGithub></FaGithub> Login with GitHub
        </button>
      </div>
      <div className="mt-6">
        <h3 className="font-bold my-4">Find Us On</h3>
        <div className="join flex *:bg-white join-vertical ">
          <button className="btn join-item justify-start space-y-3 text-lg">
            <FaFacebook className="text-blue-400"></FaFacebook>Facebook
          </button>
          <button className="btn join-item justify-start space-y-3 text-lg">
            <FaGithub></FaGithub>GitHub
          </button>
          <button className="btn join-item justify-start space-y-3 text-lg">
            <FaTwitter></FaTwitter>Twiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
