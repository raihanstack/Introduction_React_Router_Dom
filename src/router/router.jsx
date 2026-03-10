import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Posts from "../pages/Post.jsx";
import ErrorPage from "../pages/errorpage.jsx";
import Root from "../pages/RootLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            {path: "posts", element: <Posts />}
        ],
    },
]);
export default router;