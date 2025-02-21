import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import utilStyles from "../../styles/utilities.module.css"
import ProductContainer from "../../components/ProductContainer/ProductContainer";

export default function CategoriesPage() {
    const { categories } = useContext(ProductsContext);

    return (
        <section className={`${utilStyles.flexColumn} ${utilStyles.mainContainer} ${utilStyles.sectionContainer}`}>
            <h1 className={utilStyles.sectionTitle}>Categories</h1>
            <article className={`${utilStyles.gridAutoFit}`}>
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