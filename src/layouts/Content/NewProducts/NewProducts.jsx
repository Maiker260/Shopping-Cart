import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import selectProducts from "../../../utils/selectProducts";
import ProductContainer from "../../../components/ProductContainer/ProductContainer";
import utilStyles from "../../../styles/utilities.module.css"

export default function NewProducts() {

    const { productsData } = useContext(ProductsContext);
    const filteredProducts = selectProducts(productsData, 1, 5);

    return (
        <article className={`${utilStyles.flexColumn} ${utilStyles.sectionContainer}`}>
            <h2 className={utilStyles.sectionTitle}>New Products</h2>
            <div className={utilStyles.gridAutoFit}>
                {filteredProducts.map((item) => (
                    <ProductContainer key={item.title} item={item}/>
                ))}
            </div>
            <button className={utilStyles.buttonMainStyle}>View More</button>
        </article>
    )
}