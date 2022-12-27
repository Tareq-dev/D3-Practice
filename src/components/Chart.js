import React, { useEffect } from 'react'
import * as d3 from "d3";

function Chart() {
    useEffect(() => {
        d3.select(".target").style("stroke-width", 10);
    }, []);
    const changeStroke = () => {
        d3.select(".target2").style("stroke-width", 4);
    };


    //3

    useEffect(() => {
        const svg = d3.select("#area");
        svg
            .append("circle")
            .attr("cx", 50)
            .attr("cy", 50)
            .attr("r", 40)
            .style("fill", "blue");
        svg
            .append("circle")
            .attr("cx", 140)
            .attr("cy", 70)
            .attr("r", 40)
            .style("fill", "red");
        svg
            .append("circle")
            .attr("cx", 300)
            .attr("cy", 100)
            .attr("r", 40)
            .style("fill", "green");
    }, []);
    return (
        <>
            <div className="App">
                <p>Circle</p>
                <svg>
                    <circle
                        className="target"
                        style={{ fill: "orange" }}
                        stroke="black"
                        cx={50}
                        cy={50}
                        r={40}
                    ></circle>
                </svg>
            </div>
            <div className="App">
                <button onClick={changeStroke}>change stroke</button>
                <svg>
                    <circle
                        class="target2"
                        style={{ fill: "green" }}
                        stroke="black"
                        cx={50}
                        cy={50}
                        r={40}
                    ></circle>
                </svg>
            </div>


            <hr />
            <div className="App">
                <svg id="area" height={200} width={450}></svg>
            </div>
        </>

    )
}

export default Chart