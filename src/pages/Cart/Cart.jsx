import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Button from "../../components/Button/Button";
import utilStyles from "../../styles/utilities.module.css"

export default function Cart() {
    const { cart, setCart } = useContext(ProductsContext);

    const checkout = () => {
        alert("Thanks for buying with us. Your order will be ready soon.");
        const emptyCart = [];
        setCart(emptyCart);
    }

    return (
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
            {cart.length > 0 
                ? <Button 
                    name="Proceed to Checkout"
                    onClick={checkout}
                  />
                : <h1 className={utilStyles.sectionTitle}>No items in the Cart.</h1>
            }
        </section>
    )
}