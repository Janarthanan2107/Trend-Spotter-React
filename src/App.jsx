import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Root,
  Home,
  Shop,
  Cart,
  Contact,
  SignIn,
  SignUp,
} from "./routes/index";

import "./App.css";
import { useUserContext } from "./context/user.Context";
import { useEffect } from "react";

// providing routers with respective components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // childrens for the root
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:categoryId",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
