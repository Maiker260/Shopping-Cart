import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"

export default function Home () {
    const { productsData, error, loading } = useContext(ProductsContext);

    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>{error.message}</h1>

    return (
        <>
            {productsData.map(item => (
                <ul key={item.title}>
                    <li>{item.title}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.description}</li>
                    <img src={item.image} alt={item.title} width="300px" />
                </ul>
            ))}
        </>
    )
}