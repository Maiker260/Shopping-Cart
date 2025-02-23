import utilStyles from "../../styles/utilities.module.css"

export default function Button ({ name }) {
    return (
        <button className={utilStyles.buttonMainStyle}>
            {name}
        </button>
    )
}