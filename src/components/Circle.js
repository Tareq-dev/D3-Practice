import React, { useCallback, useEffect, useState } from 'react'


const width = 960;
const height = 500;
const initialMouseMove = { x: width / 2, y: height / 2 }

function Circle() {
    const [mouseMove, setMouseMove] = useState(initialMouseMove);
    const [color, setColor] = useState([])

    const circleRadius = 30;


    const handleMouseMove = useCallback(event => {
        const { clientX, clientY } = event
        setMouseMove({ x: clientX, y: clientY })
    }, [setMouseMove])

    // useEffect(() => {
    //     fetch('https://gist.githubusercontent.com/Tareq-dev/ea2d67db760e007c673a7f330c0ad096/raw/cssNamedColor.csv')
    //         .then(res => res.text())
    //         .then(text => {
    //             console.log(d3.csvParse(text))
    //         }
    //         )
    // }, [])
    return (
        <div>
            <svg height={height} width={width} onMouseMove={handleMouseMove}>
                <circle
                    cx={mouseMove.x}
                    cy={mouseMove.y}
                    r={circleRadius}
                />
            </svg>
        </div>
    )
}

export default Circle