import Link from "next/link";



export default function RegisterForm() {
  return (
    <div className="h-screen w-full bg-gray-600 flex flex-col justify-center">
      <div className="">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Register
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="text">Full Name</label>

            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="name"
              id="name"
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
