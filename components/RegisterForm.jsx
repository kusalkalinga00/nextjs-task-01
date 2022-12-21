import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../slices/registerSlice";

export default function RegisterForm() {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  //checking state
  const isUserRegister = useSelector((state)=>state.register.registered)
  console.log("is user register ?" , isUserRegister);

  if (isUserRegister) {
    router.push("/login");
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new user: ", newUser);
    dispatch(RegisterUser({newUser}))
  };

  return (
    <div className="h-screen w-full bg-gray-600 flex flex-col justify-center">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl text-white font-bold text-center">
            Register
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="text">Full Name</label>

            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="name"
              id="name"
              value={newUser.name || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="email">Email</label>

            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
              name="email"
              id="email"
              value={newUser.email || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="password">Password</label>

            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="password"
              id="password"
              value={newUser.password || ""}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40"
          >
            Register
          </button>
          <p className="text-gray-100">
            Already have an account?{" "}
            <Link
              className="text-blue-400 underline underline-offset-2"
              href="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
