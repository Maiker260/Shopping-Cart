import NavStyles from "./NavBar.module.css"
import utilStyles from "../../styles/utilities.module.css"
import { Link } from "react-router-dom";
import HomeIcon from "../../components/Icons/HomeIcon";
import CartIcon from "../../components/Icons/CartIcon";
import CategoriesIcon from "../../components/Icons/CategoriesIcon";
import SearchIcon from "../../components/Icons/SearchIcon";

function NavBar({}) {
    return (
        <nav className={`${NavStyles.navbar} ${utilStyles.flexColumnSpaceAround}`}>
            <section className={`${utilStyles.flexColumn} ${NavStyles.logoContainer}`}>
                <Link to="/" className={`${utilStyles.flexCenter} ${NavStyles.list} ${NavStyles.mainTitle}`}>
                    <h1>MyStore</h1>
                    <img src="/images/ShoppingLogo.webp" alt="StoreLogo" width="80px"/>
                </Link>
                <ul className={`${NavStyles.listContainer} ${utilStyles.flexColumn}`}>
                    <Link to="/" className={`${utilStyles.flexCenter} ${NavStyles.list}`}>
                        <HomeIcon className={NavStyles.iconList}/>
                        <li>Home</li>
                    </Link>
                    <Link to="CategoriesPage" className={`${utilStyles.flexCenter} ${NavStyles.list}`}>
                        <CategoriesIcon className={NavStyles.iconList}/>
                        <li>Categories</li>
                    </Link>
                    <Link to="SearchPage" className={`${utilStyles.flexCenter} ${NavStyles.list}`}>
                        <SearchIcon className={NavStyles.iconList}/>
                        <li>Search</li>
                    </Link>
                    <Link to="Cart" className={`${utilStyles.flexCenter} ${NavStyles.list}`}>
                        <CartIcon className={NavStyles.iconList}/>
                        <li>Cart</li>
                    </Link>
                </ul>
            </section>
            <ul className={`${NavStyles.listContainer} ${utilStyles.flexColumn}`}>
                <Link to="AboutUs" className={`${utilStyles.flexCenter} ${NavStyles.list}`}>
                    <li>About Us</li>
                </Link>
                <Link to="ContactUs" className={`${utilStyles.flexCenter} ${NavStyles.list}`}>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;