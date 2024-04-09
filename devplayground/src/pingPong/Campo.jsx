/* eslint-disable react/prop-types */
export function Campo({ children, style, borderColor }) {
    const bordo = {
        ...style,
        border: "4px solid",
        borderColor: borderColor
    };

    return (
        <div style={bordo} className="campo">{children}</div>
    )
}
