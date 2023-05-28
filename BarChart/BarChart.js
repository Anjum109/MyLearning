import { Chart } from 'chart.js';
import React, { useEffect, useRef } from 'react';


const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;
        const myChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [{
                    data: [60, 80, 40, 65, 60, 22, 60],
                    label: "Applied",
                    borderColor: ["orange", "red", "orange", "red", "orange", "red", "orange"],
                    backgroundColor: ["orange", "red", "orange", "red", "orange", "red", "orange"],
                    borderWidth: 0.2,
                    barPercentage: 0.5, // change the width of the bars
                    categoryPercentage: 0.5
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false // remove x-axis line

                        },

                    },
                    y: {
                        ticks: {
                            callback: function (value) {
                                return value;
                            },
                            stepSize: 20
                        },
                    }
                }
            },
            elements: {
                line: {
                    borderWidth: {
                        default: 1,
                        hover: {
                            border: 2,
                            width: 3
                        }
                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className='lg:w-[400px] w-full'>
            <canvas ref={chartRef} />
        </div>
    );
};

export default LineChart;
