var barChart, pieChart;

function generateRandomColor() {
    // 生成隨機的 R, G, B 值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // 轉換為 HEX 格式
    // var hexColor = '#' + r.toString(16).padStart(2, '0') +
    //                         g.toString(16).padStart(2, '0') +
    //                         b.toString(16).padStart(2, '0');
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
}

function drawBarChart(dataWithLabel = {}) {
    setupCtxModal(true);
    clearChart();
    var barCtx = document.getElementById('chart').getContext('2d');
    var randomColors = Object.keys(dataWithLabel).map(generateRandomColor);
    barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(dataWithLabel),
            datasets: [{
                label: 'emotion',
                data: Object.values(dataWithLabel),
                backgroundColor: randomColors,
                borderColor: randomColors.map(color => color.replace(/0\.2\)/, '1)')),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function drawPieChart(dataWithLabel = {}) {
    setupCtxModal(false);
    clearChart();
    var pieCtx = document.getElementById('chart').getContext('2d');
    var randomColors = Object.keys(dataWithLabel).map(generateRandomColor);

    pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(dataWithLabel),
            datasets: [{
                data: Object.values(dataWithLabel),
                backgroundColor: randomColors.map(color => color.replace(/0\.2\)/, '0.4)')),
                borderColor: randomColors.map(color => color.replace(/0\.2\)/, '0.6)')),
                borderWidth: 1
            }]
        }
    });
}


function clearChart() {
    barChart?.destroy();
    pieChart?.destroy();
}

function setupCtxModal(isLarge = false) {
    const modaldialog = document.getElementById('analysis-modal-dialog');
    if (isLarge)
        modaldialog.classList.add("modal-lg");
    else
        modaldialog.classList.remove("modal-lg");
}

export { drawBarChart, drawPieChart }