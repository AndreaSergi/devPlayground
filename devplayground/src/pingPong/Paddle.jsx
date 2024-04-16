
export function Paddle({ position , style, borderColor }) {  

    const border = {
        ...style,
        backgroundColor: borderColor
        
    }
    

    return (
         <div className={`paddle ${position} `} style={border}></div>
    )
}
