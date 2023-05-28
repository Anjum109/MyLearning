import { Chart } from "chart.js";
import { useEffect, useRef } from "react"
function LineChart() {
    const chartRef = useRef();

    useEffect(() => {
        const chart = chartRef.current;

        if (chart) {
            chart.destroy();
        }

        const ctx = document.getElementById('lineChart').getContext('2d');
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [10, 20, 20, 25, 30, 40, 30, 20, 20, 25, 30, 35,],
                    borderColor: "#2D9CDB",
                    backgroundColor: "#2D9CDB",
                    fill: false,
                    pointRadius: [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
                    tension: 0.4,

                }, {
                    data: [20, 30, 10, 30, 40, 20, 30, 30, 20, 20, 30, 40],

                    borderColor: "#FF5B5B",
                    backgroundColor: "#FF5B5B",
                    fill: false,
                    pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
                    tension: 0.4
                }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false // hide legend
                    },
                },
                scales: {

                    y: {
                        ticks: {
                            callback: function (value) {
                                return value + 'k';
                            },
                            stepSize: 10
                        },
                        grid: {
                            display: false,
                            drawBorder: false // remove x-axis line

                        },
                    }
                }
            },


        });

        chartRef.current = lineChart;

        return () => {
            lineChart.destroy();
        };
    }, [])
    return (
        <>
            {/* line chart */}


            <div className='lg:w-[600px] w-full'>
                <canvas id='lineChart'></canvas>
            </div>

        </>
    )
}

export default LineChart;