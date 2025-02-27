import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ProductsContext } from "../../context/ProductsContext";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import utilStyles from "../../styles/utilities.module.css"
import categContent from "./CategoriesPage.module.css"

export default function CategoryContent() {
    const { category } = useParams();
    const { productsData } = useContext(ProductsContext)
    
    if (!productsData) {
        return <h1>Loading...</h1>;
    }

    const filteredProducts = productsData?.filter((item) => item?.category === category)
    
    if (!filteredProducts) {
        return <h1>No products found for {capitalizeFirstLetter(category)}.</h1>;
    }

    return (
        <section className={`${utilStyles.flexColumn} ${utilStyles.mainContainer} ${utilStyles.sectionContainer}`}>
            <h1 className={utilStyles.sectionTitle}>{capitalizeFirstLetter(category)}</h1>
            <article className={`${utilStyles.gridAutoFit} ${categContent.categoryContent}`}>
                {filteredProducts.map(item => (
                    <ProductContainer 
                        key={item.id}
                        item={item}
                    />
                ))}
            </article>
        </section>
    )
}