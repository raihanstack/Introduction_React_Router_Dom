import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Root from "../pages/RootLayout.jsx";

const router = createBrowserRouter([
    {path: "/", element: <Root />, children: [
        {path: '/about', element: <About />},
    ]},
]);
export default router;