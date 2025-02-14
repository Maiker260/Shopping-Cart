import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart";
import SearchPage from "../pages/Search/SearchPage";
import CategoriesPage from "../pages/Categories/CategoriesPage";
import PageNotFound from "../pages/PageNotFound"
import RootPage from "../pages/RootPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ProductPage from "../pages/ProductPage/ProductPage";

const routes = [
    {
        path: "/",
        element: <RootPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "CategoriesPage", element: <CategoriesPage /> },
            { path: "product/:id", element: <ProductPage /> },
            { path: "SearchPage", element: <SearchPage /> },
            { path: "Cart", element: <Cart /> },
            { path: "AboutUs", element: <AboutUs /> },
            { path: "ContactUs", element: <ContactUs /> },
        ]
    }, 
    {
        path: "*",
        element: <PageNotFound />
    },
]

export default routes;