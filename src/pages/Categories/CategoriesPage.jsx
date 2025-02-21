import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import utilStyles from "../../styles/utilities.module.css"
import catPageStyles from "./CategoriesPage.module.css"

export default function CategoriesPage() {
    const { categories } = useContext(ProductsContext);

    return (
        <section className={`${utilStyles.flexColumn} ${utilStyles.mainContainer} ${utilStyles.sectionContainer}`}>
            <h1 className={utilStyles.sectionTitle}>Categories</h1>
            <article className={`${utilStyles.gridAutoFit} ${catPageStyles.categoriesContainer}`}>
                {categories.map(categ => (
                    <ProductContainer 
                        key={categ.name}
                        item={categ.items[0]}
                        isACategoryContainer={true}
                    />
                ))}
            </article>
        </section>
    )
}