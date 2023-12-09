import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Root, Admin, Home, Shop, Cart, SignIn, SignUp } from "./routes/index";

import "./App.css";

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
      {
        path: "admin",
        element: <Admin />,
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
