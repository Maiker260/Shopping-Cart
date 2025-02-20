import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import Category from "../../utils/newCategory";
import utilStyles from "../../styles/utilities.module.css"
import ProductContainer from "../../components/ProductContainer/ProductContainer";

export default function CategoriesPage() {
    const { productsData } = useContext(ProductsContext);
    const categories = [];

    productsData.forEach(item => {
        let category = categories.find(categ => categ.name === item.category)

        if (!category) {
            category = new Category(item.category);
            categories.push(category);
        }

        category.items.push(item);
    });

    return (
        <section className={`${utilStyles.flexColumn} ${utilStyles.sectionContainer}`}>
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