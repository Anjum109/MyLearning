import { Chart } from 'chart.js';
import React, { useEffect, useRef } from 'react';
const SplineChart = () => {
    const chartRef = useRef();

    useEffect(() => {
        const chart = chartRef.current;

        if (chart) {
            chart.destroy();
        }

        const ctx = document.getElementById('splineChart').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, '#6EC8EF');
        gradient.addColorStop(1, '#FFFFFF');

        const splineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [{
                    data: [0, 2, 1, 2, 1, 2.5, 2],
                    borderColor: '#2D9CDB',
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.3,


                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    customCanvasBackgroundColor: {
                        color: 'white'
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },

                    },
                    y: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },

                        ticks: {
                            display: false,

                        },

                        borderColor: 'transparent'
                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'nearest',
                    intersect: false
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },

                    border: false
                }
            },
            elements: {
                line: {
                    borderWidth: 0,
                    borderColor: 'white'
                }
            }

        });

        chartRef.current = splineChart;

        return () => {
            splineChart.destroy();
        };
    }, []);

    return (
        <div>
            <div className='w-full mt-5 h-[300px]'>
                <canvas id='splineChart'></canvas>
            </div>
        </div>
    );
};

export default SplineChart;