/* eslint-disable react/prop-types */
export function Button({text, className, style}) {
    return(
        <button style={style} className={className}>{text}</button>
    )
}