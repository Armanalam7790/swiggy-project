import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import Status from "./Status";

const Header = () => {
  const online = Status();
  const cartItems = useSelector((store) => store.cart.items);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-orange-500 tracking-wide">🍔 Swiggy</h1>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li className="text-sm">
            {online ? "🟢 Online" : "🔴 Offline"}
          </li>

          <Link to="/">
            <li className="cursor-pointer hover:text-orange-500 transition">Home</li>
          </Link>

          <Link to="/about">
            <li className="cursor-pointer hover:text-orange-500 transition">About</li>
          </Link>

          <Link to="/contact">
            <li className="cursor-pointer hover:text-orange-500 transition">Contact</li>
          </Link>

          <Link to="/cart">
            <li className="cursor-pointer hover:text-orange-500 transition font-semibold">
              🛒 Cart ({cartItems.length})
            </li>
          </Link>

          {user ? (
            <li className="flex items-center gap-3">
              <span className="text-sm text-gray-600">
                👋 <span className="font-semibold text-gray-800">{user.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full border border-orange-400 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="flex items-center gap-2">
              <Link to="/login">
                <button className="px-4 py-2 rounded-full border border-orange-400 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition">
                  Sign Up
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;