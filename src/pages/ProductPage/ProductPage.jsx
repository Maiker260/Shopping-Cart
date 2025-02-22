import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export default function ProductPage() {
    const { id } = useParams();
    const { productsData } = useContext(ProductsContext)
    const product = productsData.find((item) => item && item.id === Number(id))
console.log(product)
    return (
        <div>
            <h1>ProductPage{id}</h1>
            {/* <p>{product.title}</p> */}
        </div>
    );
}