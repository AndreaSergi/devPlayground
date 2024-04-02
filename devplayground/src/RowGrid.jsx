import React, { useEffect, useState } from 'react';

export function RowGrid({ lettereUguali, indiciUguali, rowIndex, posizione }) {
    const [colors, setColors] = useState(["black","black","black","black","black"])

// lettere uguali= [1,2,4]

useEffect(() => {
    const arrayMomentaneo = [...colors];

    if (lettereUguali && rowIndex === posizione + 1) {
        lettereUguali.forEach(indice => {
            arrayMomentaneo[indice] = "#d3bb04";
        });
    }

    if (indiciUguali && rowIndex === posizione + 1) {
        indiciUguali.forEach(indice => {
            arrayMomentaneo[indice] = "green";
        });
    }

    setColors(arrayMomentaneo);

}, [lettereUguali]);


  
    

    return (
        <div className="wordCellsContainer">

            {[...Array(5)].map((value, index)=>{
                return (<div key= {index} className="cell" style={{ color: '#d2d2d2',  textShadow:
                `0 0 5px ${colors[index]},
                0 0 10px ${colors[index]},
                0 0 15px ${colors[index]},
                0 0 20px ${colors[index]},
                0 0 25px ${colors[index]},
                0 0 30px ${colors[index]},
                0 0 35px ${colors[index]},
                0 0 60px ${colors[index]}` }}></div>)
                })
            }
        </div>
    );
}

