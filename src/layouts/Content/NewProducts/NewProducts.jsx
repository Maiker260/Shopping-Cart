import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import selectProducts from "../../../utils/selectProducts";
import ProductsSection from "../ProductSection/ProductsSection";

export default function NewProducts() {
    const { productsData } = useContext(ProductsContext);
    const filteredProducts = selectProducts(productsData, 1, 10);

    return (
        <ProductsSection 
            data={filteredProducts}
            title="New Products"
            moreButtonTitle="View More"
        />
    )
}