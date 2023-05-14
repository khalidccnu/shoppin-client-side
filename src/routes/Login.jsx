import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLoginWithEP = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <section className="py-10">
      <div className="container">
        <div className="artboard phone-2 max-w-full !h-auto mx-auto border rounded p-5">
          <h3 className="font-bold text-2xl text-center">Login</h3>
          <form
            className="form-control mt-5 space-y-4"
            onSubmit={handleLoginWithEP}
          >
            <div>
              <label className="label label-text pt-0 px-0">Email</label>
              <input
                type="email"
                name="email"
                value={input.email}
                className="input input-sm input-bordered rounded-none w-full"
                onChange={changeInput}
              />
            </div>
            <div>
              <label className="label label-text pt-0 px-0">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                className="input input-sm input-bordered rounded-none w-full"
                onChange={changeInput}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-sm bg-[#35bef0] border-none rounded normal-case w-full"
              >
                Login
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
              <span>New to Shoppin?</span>
              <Link to="/signup" className="text-[#35bef0]">
                Create New Account
              </Link>
            </div>
            <div className="divider">or</div>
            <div className="flex justify-center items-center p-2 border space-x-2 cursor-pointer">
              <FaGoogle className="text-2xl" />
              <span>Continue with Google</span>
            </div>
            <div className="flex justify-center items-center p-2 border space-x-2 cursor-pointer">
              <FaFacebook className="text-2xl" />
              <span>Continue with Facebook</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
