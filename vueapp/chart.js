var barChart, pieChart;

function drawBarChart() {
    setupCtxModal(true);
    clearChart();
    var barCtx = document.getElementById('chart').getContext('2d');
    barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [{
                label: 'Sample Data',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
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
    console.log(new Date().toLocaleDateString());
}

function drawPieChart() {
    setupCtxModal(false);
    clearChart();
    var pieCtx = document.getElementById('chart').getContext('2d');
    pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Label A', 'Label B', 'Label C'],
            datasets: [{
                data: [30, 50, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
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