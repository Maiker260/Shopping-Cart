import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart";
import SearchPage from "../pages/Search/SearchPage";
import CategoriesPage from "../pages/Categories/CategoriesPage";
import PageNotFound from "../pages/PageNotFound"
import RootPage from "../pages/RootPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ProductPage from "../pages/ProductPage/ProductPage";
import CategoryContent from "../pages/Categories/CategoryContent";

const routes = [
    {
        path: "/",
        element: <RootPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "categories", element: <CategoriesPage /> },
            { path: "categories/:category", element: <CategoryContent /> },
            { path: "categories/:category/:id", element: <ProductPage /> },
            { path: "search", element: <SearchPage /> },
            { path: "cart", element: <Cart /> },
            { path: "aboutUs", element: <AboutUs /> },
            { path: "contactUs", element: <ContactUs /> },
        ]
    }, 
    {
        path: "*",
        element: <PageNotFound />
    },
]

export default routes;