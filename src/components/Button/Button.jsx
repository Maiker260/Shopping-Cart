import utilStyles from "../../styles/utilities.module.css"

export default function Button ({ name, isSecundBtn = false, onClick }) {
    const buttonStyle = isSecundBtn
        ? utilStyles.buttonSecStyle
        : utilStyles.buttonMainStyle

    return (
        <button className={buttonStyle} onClick={onClick}>
            {name}
        </button>
    )
}