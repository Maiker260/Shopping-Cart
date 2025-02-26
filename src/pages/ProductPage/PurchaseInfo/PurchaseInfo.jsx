import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import Button from "../../../components/Button/Button"
import purchaStyles from "./PurchaseInfo.module.css"
import utilStyles from "../../../styles/utilities.module.css"

export default function PurchaseInfo({ price, item }) {
    const currentDate = new Date();
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const userMonthName = monthNames[currentDate.getMonth()];
    const userDay = currentDate.getDate();

    const deliveryDate = 
        userDay > 29
            ? `${monthNames[currentDate.getMonth() + 1]}, 2 `
            : `${userMonthName}, ${userDay + 5}`

    const { cart, setCart } = useContext(ProductsContext)

    const addToCart = () => {
        if (!cart.includes(item)) {
            setCart(prev => [...prev, item]);
            alert("Product Added to the cart.")
        }
    }

    return (
        <article className={`${utilStyles.flexColumn} ${purchaStyles.addToCartContainer}`}>
            <h2><span className={purchaStyles.currency}>US$</span>{price}</h2>
            <p>Free Delivery <strong>{deliveryDate}</strong></p>
            <p>Only {Math.floor(Math.random() * 10) + 1} left in stock - order soon.</p>
            <p></p>
            <Button 
                name="Add to Cart"
                onClick={addToCart}
            />
        </article>
    )
}