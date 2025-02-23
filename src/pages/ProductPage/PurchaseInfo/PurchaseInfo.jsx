import Button from "../../../components/Button/Button"

export default function PurchaseInfo({ price }) {
    return (
        <article>
            <h2>${price}</h2>
            <Button 
                name="Add to Cart"
            />
        </article>
    )
}