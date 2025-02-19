import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import selectProducts from "../../../utils/selectProducts";
import ProductsSection from "../ProductSection/ProductsSection";

export default function NewProducts() {
    const { productsData } = useContext(ProductsContext);
    const filteredProducts = selectProducts(productsData, 13, 29);

    return (
        <ProductsSection 
            data={filteredProducts}
            title="For Sale"
            moreButtonTitle="View All"
        />
    )
}