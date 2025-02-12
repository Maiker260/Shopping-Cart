import { createContext, useState, useEffect } from "react";
import { fetchProductsData } from "../utils/fetchProductsData";
import NavBar from "../layouts/Navbar/Navbar";
import utilStyles from "../styles/utilities.module.css"
import contStyles from "../layouts/container.module.css"

export const ProductsContext = createContext();

export function ProductsProvider ({ children }) {
    const [productsData, setProductsData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProductsData();
                setProductsData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{ productsData, error, loading }} >
            <div className={`${utilStyles.gridTwoMain} ${contStyles.container}`}>
                <NavBar />
                {children}
            </div>
        </ProductsContext.Provider>
    )
}