import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import PurchaseInfo from "./PurchaseInfo/PurchaseInfo";
import Button from "../../components/Button/Button";
import utilStyles from "../../styles/utilities.module.css"
import prodPageStyles from "./ProductPage.module.css"

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
            <Link to={`/categories/${product.category}`} className={prodPageStyles.productCateg}>
                <h3 className={prodPageStyles.productCategName}>{capitalizeFirstLetter(product.category)}</h3>   
            </Link>
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
                        item={product}
                        price={product.price}
                    />
                </article>
            </article>
        </section>
    );
}