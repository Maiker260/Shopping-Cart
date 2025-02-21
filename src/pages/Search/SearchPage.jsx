import { useContext } from "react"
import SearchBar from "../../components/SearchBar/SearchBar"
import { ProductsContext } from "../../context/ProductsContext"
import ProductContainer from "../../components/ProductContainer/ProductContainer"
import utilStyles from "../../styles/utilities.module.css"
import srchPageStyle from "./SearchPage.module.css"

export default function SearchPage() {
    const { productsData } = useContext(ProductsContext);

    return (
        <section className={`${utilStyles.flexColumn} ${utilStyles.mainContainer}`}>
            <SearchBar />
            <article className={`${utilStyles.gridAutoFit} ${srchPageStyle.productsContainer}`}>
                {productsData.map(itm => (
                    <ProductContainer 
                        key={itm.id}
                        item={itm}
                    />
                ))}
            </article>
        </section>
    )
}