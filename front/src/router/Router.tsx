import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/user",
      element: <User />,
      },
])

export default router;