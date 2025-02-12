import NavStyles from "./NavBar.module.css"
import utilStyles from "../../styles/utilities.module.css"
import { Link } from "react-router-dom";

function NavBar({}) {
    return (
        <nav className={`${NavStyles.navbar} ${utilStyles.flexColumnSpaceAround}`}>
            <section className={`${utilStyles.flexColumn} ${NavStyles.logoContainer}`}>
                <div className={utilStyles.flexCenter}>
                    <h1>MyStore</h1>
                    <img src="/images/Shopping logo.webp" alt="StoreLogo" width="80px"/>
                </div>
                <ul className={`${NavStyles.listContainer} ${utilStyles.flexColumn}`}>
                    <div className={utilStyles.flexCenter}>
                        <li className={NavStyles.list}>Home</li>
                    </div>
                    <div className={utilStyles.flexCenter}>
                        <Link to="CategoriesPage" className={NavStyles.list}>Categories</Link>
                    </div>
                    <div className={utilStyles.flexCenter}>
                        <li className={NavStyles.list}>Search</li>
                    </div>
                    <div className={utilStyles.flexCenter}>
                        <li className={NavStyles.list}>Cart</li>
                    </div>
                </ul>
            </section>
            <ul className={`${NavStyles.listContainer} ${utilStyles.flexColumn}`}>
                <li className={NavStyles.list}>About Us</li>
                <li className={NavStyles.list}>Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar;