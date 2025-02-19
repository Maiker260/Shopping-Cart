import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import selectProducts from "../../../utils/selectProducts";
import ProductsSection from "../ProductSection/ProductsSection";

export default function NewProducts() {
    const { productsData } = useContext(ProductsContext);
    const filteredProducts = selectProducts(productsData, 7, 12);

    return (
        <ProductsSection 
            data={filteredProducts}
            title="Best Sellers"
            moreButtonTitle="View All"
        />
    )
}