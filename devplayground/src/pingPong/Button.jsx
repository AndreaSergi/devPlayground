/* eslint-disable react/prop-types */
export function Button({text, className}) {

    const style = {
        borderRadius: "8px",
        border: "1px solid trasparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: "500",
        fontFamily: "inherit",
        cursor: "pointer",
        transition: "border-color 0.25s",
        width: "15.9vw"
    } 

    return(
        <button style={style} className={className}>{text}</button>
    )
}