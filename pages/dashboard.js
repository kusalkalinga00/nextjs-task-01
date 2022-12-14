import Link from "next/link";

export default function DashBoard() {
  return (
    <div className="h-screen  bg-gray-600 flex flex-col justify-center text-center">
      <h1 className="text-gray-200 text-3xl">Welcome !</h1>
      <div className="flex justify-center mt-10">
        <Link
          href="/"
          className=" text-gray-100 px-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/70 "
        >
          Home
        </Link>
      </div>
    </div>
  );
}
