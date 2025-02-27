import { useContext, useState } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Button from "../../components/Button/Button";
import NotificationBanner from "../../components/NotificationBanner/NotificationBanner";
import utilStyles from "../../styles/utilities.module.css"

export default function Cart() {
    const { cart, setCart } = useContext(ProductsContext);

    const [showBanner, setShowBanner] = useState(false)

    const checkout = () => {
        const emptyCart = [];
        setShowBanner(true)
        setCart(emptyCart);
    }

    let total = 0;
    
    cart.forEach(itm => (total += itm.price))

    return (
        <>
            <NotificationBanner 
                message="Thanks for buying with us. Your order will be ready soon."
                show={showBanner}
                onClose={() => setShowBanner(false)}
            />
            <section className={`${utilStyles.flexColumn} ${utilStyles.mainContainer} ${utilStyles.sectionContainer}`}>
                <h1 className={utilStyles.sectionTitle}>Cart</h1>
                <article className={`${utilStyles.gridAutoFit}`}>
                    {cart.map(itm => (
                        <ProductContainer 
                            key={itm.id}
                            item={itm}
                        />
                    ))}
                </article>
                <div className={utilStyles.sectionTitle}>
                    <h4>Total: ${total}</h4>
                </div>
                {cart.length > 0 
                    ? <Button 
                        name="Proceed to Checkout"
                        onClick={checkout}
                    />
                    : <h1 className={utilStyles.sectionTitle}>No items in the Cart.</h1>
                }
            </section>
        </>
    )
}