import NewProducts from "./NewProducts/NewProducts"
import BestSellers from "./BestSellers/BestSellers"
import ForSale from "./ForSale/ForSale"

export default function Content() {
    return (
        <section>
            <NewProducts />
            <BestSellers />
            <ForSale />
        </section>
    )
}