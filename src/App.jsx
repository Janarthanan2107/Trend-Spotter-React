import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, Shop, Cart, Contact, SignIn } from "./routes/index";

import "./App.css"

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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "signIn",
        element: <SignIn />,
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
