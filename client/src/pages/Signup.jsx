/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"> Sign UP</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg "
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="username"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg "
          id="username"
        />
        <button
          className="bg-slate-700
         text-white p-3 rounded-lg
          uppercase hover:opacity-95
           disabled:opacity-80"
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"./sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
