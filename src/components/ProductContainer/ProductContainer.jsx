import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter"
import produContaStyle from "./ProductContainer.module.css"
import utilStyles from "../../styles/utilities.module.css"
import { Link } from "react-router-dom";

export default function ProductContainer({ item, isACategoryContainer = false }) {
    const infoSelected = isACategoryContainer
        ? `/categories/${item.category}`
        : `/categories/${item.category}/${item.id}`

    return (
        <Link to={infoSelected} className={`${utilStyles.flexColumn} ${produContaStyle.productContainer} ${produContaStyle.product}`}>
            <div className={`flex ${produContaStyle.productImageContainer}`}>
                <img src={item.image} alt={item.title} className={produContaStyle.productImage} />
            </div>
            <div className={`${utilStyles.flexColumn} ${produContaStyle.productDescription}`}>
                {isACategoryContainer
                    ? <h4 className={produContaStyle.productTitle} title={item.category}>{capitalizeFirstLetter(item.category)}</h4>
                    : <>
                        <h4 className={produContaStyle.productTitle} title={item.title}>{item.title}</h4>
                        <p className={produContaStyle.productPrice}>{`$${item.price}`}</p>
                    </>
                }
            </div>
        </Link>
    )
}