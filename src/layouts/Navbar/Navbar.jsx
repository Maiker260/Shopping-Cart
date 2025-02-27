import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import HomeIcon from "../../components/Icons/HomeIcon";
import CartIcon from "../../components/Icons/CartIcon";
import CategoriesIcon from "../../components/Icons/CategoriesIcon";
import SearchIcon from "../../components/Icons/SearchIcon";
import navStyles from "./Navbar.module.css";
import utilStyles from "../../styles/utilities.module.css";

function NavBar({}) {
    const { cart } = useContext(ProductsContext);

    return (
        <nav className={`${navStyles.navbar} ${utilStyles.flexColumnSpaceAround}`}>
            <section className={`${utilStyles.flexColumn} ${navStyles.logoContainer}`}>
                <Link to="/" className={`${utilStyles.flexCenter} ${navStyles.list} ${navStyles.mainTitle}`}>
                    <h1>MyStore</h1>
                    <img src="/images/ShoppingLogo.webp" alt="StoreLogo" width="80px"/>
                </Link>
                <ul className={`${navStyles.listContainer} ${utilStyles.flexColumn}`}>
                    <Link to="/" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                        <HomeIcon className={navStyles.iconList}/>
                        <li>Home</li>
                    </Link>
                    <Link to="categories" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                        <CategoriesIcon className={navStyles.iconList}/>
                        <li>Categories</li>
                    </Link>
                    <Link to="search" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                        <SearchIcon className={navStyles.iconList}/>
                        <li>Search</li>
                    </Link>
                    <Link to="cart" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                        <CartIcon className={navStyles.iconList}/>
                        <li>Cart</li>
                        <span className={navStyles.cartCounter}>{cart.length}</span>
                    </Link>
                </ul>
            </section>
            <ul className={`${navStyles.listContainer} ${utilStyles.flexColumn}`}>
                <Link to="#" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                    <li>About Us</li>
                </Link>
                <Link to="#" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;