import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
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

  const handleSignup = (e) => {
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
          <h3 className="font-bold text-2xl text-center">Signup</h3>
          <form className="form-control mt-5 space-y-4" onSubmit={handleSignup}>
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
                Signup
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
              <span>Already have an account?</span>
              <Link to="/login" className="text-[#35bef0]">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
