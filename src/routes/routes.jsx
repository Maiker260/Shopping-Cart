import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <PageNotFound />,
    },
]

export default routes;