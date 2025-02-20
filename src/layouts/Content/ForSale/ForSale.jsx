import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import ProductsSection from "../ProductSection/ProductsSection";

export default function NewProducts() {
    const { productsData } = useContext(ProductsContext);

    return (
        <ProductsSection 
            data={productsData}
            title="For Sale"
            moreButtonTitle="View All"
        />
    )
}