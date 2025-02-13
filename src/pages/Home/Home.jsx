import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import Hero from "../../layouts/Hero/Hero";
import mainStyles from "./Home.module.css"

export default function Home () {
    const { productsData, error, loading } = useContext(ProductsContext);

    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>{error.message}</h1>

    return (
        <main className={mainStyles.main}>
            <Hero />
            {productsData.map(item => (
                <ul key={item.title}>
                    <li>{item.title}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.description}</li>
                    <img src={item.image} alt={item.title} width="300px" />
                </ul>
            ))}
        </main>
    )
}