import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'


function D3Fetch() {
    const initialData = [
        {
          name: "d",
          value: 0,
        },
        {
          name: "f",
          value: 4,
        },
        {
          name: "r",
          value: 0,
        },
        {
          name: "s",
          value: 7,
        },
        {
          name: "d",
          value: 8,
        },
        {
          name: "s",
          value: 8,
        },
        {
          name: "r",
          value: 1,
        },
        {
          name: "t",
          value: 10,
        },
        {
          name: "k",
          value: 7,
        },
        {
          name: "j",
          value: 17,
        },
        {
          name: "l",
          value: 1,
        },
      ];

    const margin = { top: 50, right: 30, left: 30, bottom: 30 }
    const width = 500;
    const height = 150;
    const padding = 40;
    const maxValue = 20;

    const [data, setdata] = useState([])
    const svgRef = useRef()
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {

                
                // x scale
                const xScale = d3.scalePoint()
                    .domain(initialData.map((d) => d.name))
                    .range([(0 + padding), (width - padding)])
                    console.log('Start - End',xScale('Car'),xScale('Cinema'))  
                //Yscales
                const yScale = d3.scaleLinear()
                    .domain([0, d3.max(initialData, function (d) { return d.value })])
                    .range([(height - padding), (0 + padding)])
                    console.log('Start - End',yScale(0),yScale(10)) 
                //line
                const line = d3.line()
                    .x((d) => xScale(d.name))
                    .y((d) => yScale(d.value))
                // .curve(d3.curveMonotoneX)
                console.log('chart draw commands', line(initialData) )      

                //  5] Draw line        ---------------------------//
                d3.select(svgRef.current)
                    .select('path')
                    .attr('d', (value) => line(initialData))
                    .attr('fill', 'none')
                    .attr('stroke', 'white')


                //  6] Setup functions to draw X and Y Axes --------//
                const xAxis = d3.axisBottom(xScale)
                const yAxis = d3.axisLeft(yScale)

                //  7] Draw x and y Axes   -------------------------//
                d3.select('#xaxis').remove()
                d3.select(svgRef.current)
                    .append('g')
                    .attr('transform', `translate(0,${height - padding})`)
                    .attr('id', 'xaxis')
                    .call(xAxis)

                d3.select('#yaxis').remove()
                d3.select(svgRef.current)
                    .append('g')
                    .attr('transform', `translate(${padding},0)`)
                    .attr('id', 'yaxis')
                    .call(yAxis)
            })
    }, [])
    return (
        <div className="App">
        <header className="App-header">
  
          <svg id="chart" ref={svgRef} viewBox="0 0 500 150">
  
              <path d="" fill="none" stroke="white" strokeWidth="3" />
              
          </svg>
         
        </header>
      </div>

    )
}

export default D3Fetch