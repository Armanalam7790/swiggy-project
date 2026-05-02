import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Auth from "../components/Auth";
import ProtectedRoute from "../components/Protectedroute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: (
          <ProtectedRoute>
            <RestaurantMenu />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
  // Auth pages render outside App (no Header/Footer)
  {
    path: "/login",
    element: <Auth mode="login" />,
  },
  {
    path: "/signup",
    element: <Auth mode="signup" />,
  },
]);

export default appRouter;