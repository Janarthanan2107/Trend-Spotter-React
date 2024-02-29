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

// Define your router configuration
const routerConfig = [
  {
    path: "/",
    element: <Root />,
    // Define child routes for the root route
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: ":categoryId",
            element: <Shop />,
          },
        ],
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
];

// Create the router using the router configuration
const router = createBrowserRouter(routerConfig);

const App = () => {
  return (
    <div>
      {/* Provide the router to your application */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
