import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';

// Définition du routeur avec les trois pages Home, SingIn et User
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/profile",
      element: <User />,
      },
])

export default router;