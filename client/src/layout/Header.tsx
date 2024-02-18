import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl font-bold tracking-tight text-white">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <div className="flex items-center gap-4">
          <span className="flex space-x-2">
            <Link
              to="/sign-in"
              className="flex items-center bg-white px-3 py-1 font-bold text-blue-800 hover:bg-gray-100"
            >
              Sign in
            </Link>
          </span>
          <span className="flex space-x-2">
            <Link
              to="/register"
              className="flex items-center bg-white px-3 py-1 font-bold text-blue-800 hover:bg-gray-100"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}
