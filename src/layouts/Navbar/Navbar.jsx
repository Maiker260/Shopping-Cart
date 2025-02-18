import navStyles from "./NavBar.module.css";
import utilStyles from "../../styles/utilities.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../components/Icons/HomeIcon";
import CartIcon from "../../components/Icons/CartIcon";
import CategoriesIcon from "../../components/Icons/CategoriesIcon";
import SearchIcon from "../../components/Icons/SearchIcon";

function NavBar({}) {
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
                    <Link to="CategoriesPage" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                        <CategoriesIcon className={navStyles.iconList}/>
                        <li>Categories</li>
                    </Link>
                    <Link to="SearchPage" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                        <SearchIcon className={navStyles.iconList}/>
                        <li>Search</li>
                    </Link>
                    <Link to="Cart" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                        <CartIcon className={navStyles.iconList}/>
                        <li>Cart</li>
                    </Link>
                </ul>
            </section>
            <ul className={`${navStyles.listContainer} ${utilStyles.flexColumn}`}>
                <Link to="AboutUs" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                    <li>About Us</li>
                </Link>
                <Link to="ContactUs" className={`${utilStyles.flexCenter} ${navStyles.list}`}>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;