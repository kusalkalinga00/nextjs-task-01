import Link from "next/link";


export default function Home() {
  return (
    <div className="container h-full mx-auto">
      <div className="pt-[150px]">
        <h1 className="text-3xl text-center">
          Welcome! Login or Register to continue.
        </h1>
      </div>
      <div className="text-center flex flex-auto justify-center pt-12">
        <Link href="/login" className="text-gray-100 px-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/70 mr-5">
          Login
        </Link>
        <Link href="/register" className=" text-gray-100 px-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/70 mr-5 ">
          Register
        </Link>
      </div>
    </div>
  );
}
