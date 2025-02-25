import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import PurchaseInfo from "./PurchaseInfo/PurchaseInfo";
import utilStyles from "../../styles/utilities.module.css"
import prodPageStyles from "./ProductPage.module.css"
import Button from "../../components/Button/Button";

export default function ProductPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { productsData } = useContext(ProductsContext)
    
    const product = productsData?.find((item) => item?.id === Number(id))

    if (!product) {
        return <h1>Loading...</h1>;
    }


    return (
        <section className={`${utilStyles.flexColumn} ${prodPageStyles.container} ${utilStyles.mainContainer}`}>
                <Button name="Go Back" isSecundBtn onClick={() => navigate(-1)}/>
            <div>
                <h3>{capitalizeFirstLetter(product.category)}</h3>   
            </div>
            <article className={`grid ${prodPageStyles.productPageContainer}`}>
                <article className={prodPageStyles.imageContainer}>
                    <img className={prodPageStyles.productImage} src={product.image} alt={product.title} />
                </article>
                <article className={`${utilStyles.flexColumn} ${prodPageStyles.infoContainer}`}>
                    <h2 className={prodPageStyles.title}>{product.title}</h2>
                    <div className={`${utilStyles.flexColumn} ${prodPageStyles.info}`}>
                        <h2>Description:</h2>
                        <p>{product.description}</p>
                    </div>
                    <ShippingInfo />
                </article>
                <article className={prodPageStyles.priceContainer}>
                    <PurchaseInfo 
                        price={product.price}
                    />
                </article>
            </article>
        </section>
    );
}