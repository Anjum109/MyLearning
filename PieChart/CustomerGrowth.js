import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartPage() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const chart = new Chart(canvas, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [22, 78],
                    borderColor: [
                        "#00B074",
                        "rgba(0, 176, 116, 0.15)"
                    ],
                    backgroundColor: ["#00B074", "rgba(0, 176, 116, 0.15)"],
                    borderWidth: 2,
                }]
            },
            options: {
                cutoutPercentage: 70,
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    datalabels: {
                        display: false
                    }
                }
            },
            plugins: [{
                id: 'center-text',
                beforeDraw: function (chart) {
                    const container = chart.canvas.parentNode;
                    const width = container.offsetWidth;
                    const height = container.offsetHeight;
                    const ctx = chart.ctx;

                    const devicePixelRatio = window.devicePixelRatio || 1;

                    // Set minimum font size
                    const minFontSize = 10;

                    // Calculate font size based on canvas size and devicePixelRatio, with a minimum font size
                    let fontSize = Math.max(minFontSize, Math.min(height / 8, width / 8)) * devicePixelRatio;

                    // Adjust font size and position based on device screen width
                    if (window.innerWidth <= 600) {
                        fontSize *= 0.5;
                    }
                    if (window.innerWidth <= 400) {
                        fontSize *= 0.5;
                    }

                    ctx.save();
                    ctx.font = fontSize + 'px sans-serif';
                    ctx.textBaseline = 'middle';

                    const text = '22%';
                    const textWidth = ctx.measureText(text).width;
                    const textHeight = fontSize;

                    // Center text horizontally and vertically
                    const textX = Math.round((width - textWidth) / 2);
                    const textY = Math.round((height - textHeight) / 1.9);

                    ctx.fillText(text, textX, textY);
                    ctx.restore();
                }
            }]
        });
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className="lg:w-[153px] w-full flex mx-auto my-auto">
            <div className=' pt-0 rounded-xl w-full h-fit my-auto pb-2'>
                <canvas ref={canvasRef} id="myChart"></canvas>
            </div></div>
    );
}







