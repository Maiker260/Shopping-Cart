import { createContext, useState, useEffect } from "react";
import { fetchProductsData } from "../utils/fetchProductsData";
import useCategories from "../hooks/useCategories";

export const ProductsContext = createContext();

export function ProductsProvider ({ children }) {
    const [productsData, setProductsData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

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

    const categories = useCategories(productsData)

    return (
        <ProductsContext.Provider value={{ 
            productsData, 
            error, 
            loading, 
            cart, 
            setCart,
            categories,
        }} >
            <>
                {children}
            </>
        </ProductsContext.Provider>
    )
}