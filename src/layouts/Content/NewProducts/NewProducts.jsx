import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import selectProducts from "../../../utils/selectProducts";
import ProductContainer from "../../../components/ProductContainer/ProductContainer";
import utilStyles from "../../../styles/utilities.module.css"

export default function NewProducts() {

    const { productsData } = useContext(ProductsContext);
    const filteredProducts = selectProducts(productsData, 2, 4);

    return (
        <article>
            <h2>New Products</h2>
            <div className={utilStyles.gridAutoFit}>
                {filteredProducts.map((item) => (
                    <ProductContainer key={item.title} item={item}/>
                ))}
            </div>
            <button>See All New Products</button>
        </article>
    )
}