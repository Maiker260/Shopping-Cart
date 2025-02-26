import { Link } from "react-router-dom";
import ProductContainer from "../../../components/ProductContainer/ProductContainer";
import utilStyles from "../../../styles/utilities.module.css"
import productStyles from "./ProductsSection.module.css"

export default function ProductsSection({ data, title, moreButtonTitle }) {
    return (
        <article className={`${utilStyles.flexColumn} ${utilStyles.sectionContainer}`}>
            <h2 className={utilStyles.sectionTitle}>{title}</h2>
            <div className={`${productStyles.productsContainer} ${utilStyles.flexCenter}`}>
                {data.map((item) => (
                    <ProductContainer key={item.title} item={item}/>
                ))}
            </div>
            <Link to="search" className={utilStyles.buttonMainStyle}>
                {moreButtonTitle}
            </Link>
        </article>
    )
}