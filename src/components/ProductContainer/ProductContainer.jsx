import produContaStyle from "./ProductContainer.module.css"
import utilStyles from "../../styles/utilities.module.css"
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter"

export default function ProductContainer({ item, isACategoryContainer = false }) {
    return (
        <div className={`${utilStyles.flexColumn} ${produContaStyle.productContainer}`}>
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
        </div>
    )
}