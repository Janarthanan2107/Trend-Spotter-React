import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import {
  Root,
  Admin,
  Home,
  Shop,
  Cart,
  SignIn,
  SignUp,
  Form,
  CategoryForm,
} from "./routes/index";

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
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "categoryForm",
        element: <CategoryForm />,
      },
      {
        path: "form/:category",
        element: <Form />,
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
