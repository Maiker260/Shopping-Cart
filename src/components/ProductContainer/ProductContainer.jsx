import produContaStyle from "./ProductContainer.module.css"

export default function ProductContainer({ item }) {
    return (
        <div>
            <img src={item.image} alt={item.title} className={produContaStyle.productImage} />
            <div className={produContaStyle.productDescription}>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
            </div>
        </div>
    )
}