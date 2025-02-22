import NavBar from "../layouts/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import utilStyles from "../styles/utilities.module.css"
import containStyles from "../layouts/container.module.css"

export default function RootPage ({}) {
    return (
        <div className={`${utilStyles.gridTwoMain} ${containStyles.container}`}>
            <NavBar />
            <div className={containStyles.content}>
                <Outlet />
            </div>
        </div>
    )
}