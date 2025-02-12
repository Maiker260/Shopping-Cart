import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart";
import SearchPage from "../pages/Search/SearchPage";
import CategoriesPage from "../pages/Categories/CategoriesPage";
import PageNotFound from "../pages/PageNotFound"

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <PageNotFound />,
    }, {
        path: "CategoriesPage",
        element: <CategoriesPage />
    }, {
    }, {

    },
]

export default routes;