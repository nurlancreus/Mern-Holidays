import { useAppContext } from "@/context/AppContextProvider";
import { useSignOut } from "@/features/auth/useSignOut";
import { Link } from "react-router-dom";

export default function Header() {
  const { isLoggedIn } = useAppContext();

  console.log(isLoggedIn);

  return (
    <header className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl font-bold tracking-tight text-white">
          <Link to="/">MernHolidays.com</Link>
        </span>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center px-3 font-bold text-white transition hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center px-3 font-bold text-white transition hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="flex items-center bg-white px-3 py-1 font-bold text-blue-800 hover:bg-gray-100"
              >
                Sign in
              </Link>

              <Link
                to="/register"
                className="flex items-center bg-white px-3 py-1 font-bold text-blue-800 hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function SignOutButton() {
  const { mutate: signOut } = useSignOut();

  return (
    <button
      className="bg-white px-3 py-1 font-bold text-blue-600 hover:bg-gray-100"
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </button>
  );
}
