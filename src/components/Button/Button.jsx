import btnStyles from "./Button.module.css"

export default function Button ({ name, isSecundBtn = false, onClick }) {
    const buttonStyle = isSecundBtn
        ? btnStyles.buttonSecStyle
        : btnStyles.buttonMainStyle

    return (
        <button className={`${btnStyles.button} ${buttonStyle}`} onClick={onClick}>
            {name}
        </button>
    )
}