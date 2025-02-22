import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import Hero from "../../layouts/Hero/Hero";
import Content from "../../layouts/Content/Content";
import Footer from "../../layouts/Footer/Footer";
import utilstyles from "../../styles/utilities.module.css"

export default function Home () {
    const { error, loading } = useContext(ProductsContext);

    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>{error.message}</h1>

    return (
        <main className={utilstyles.mainContainer}>
            <Hero />
            <Content />
            <Footer />
        </main>
    )
}