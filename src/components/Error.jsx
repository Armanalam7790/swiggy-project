import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <div className="text-6xl mb-4">😵</div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-500 mb-1">{err?.status} — {err?.statusText || err?.message}</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;