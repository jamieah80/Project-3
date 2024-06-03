function updateWordCloud() {
    const year = document.getElementById('yearSelect').value;
    document.getElementById('wordCloud').src = `resources/wordclouds/${year}_poldem_wordcloud.png`;
}

function init() {
    const years = [1992, 1997, 2001, 2005, 2010, 2015, 2017];
    const yearSelectIssues = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
    const issues = ['Health', 'Immigration & Asylum', 'Crime', 'The Economy', 'Tax', 'Pensions', 'Education', 'Family life & childcare', 'Housing', 'The environment', 'Britain leaving the EU', 'Transport', 'Welfare benefits', 'Defence and security', 'None of these', 'Afghanistan', 'Defence and terrorism', 'Don\'t know / None of these'];

    let dropdownMenu1 = d3.select("#yearSelect");
    dropdownMenu1.selectAll("option")
        .data(years)
        .enter()
        .append("option")
        .text(d => d);

    let dropdownMenu2 = d3.select("#yearSelectIssues");
    dropdownMenu2.selectAll("option")
        .data(yearSelectIssues)
        .enter()
        .append("option")
        .text(d => d);

    let dropdownMenu3 = d3.select("#issueSelect");
    dropdownMenu3.selectAll("option")
        .data(issues)
        .enter()
        .append("option")
        .text(d => d);

    updateWordCloud();
    updateLineChart();
}

function optionChangedCloud() {
    updateWordCloud();
}

function optionChangedYearYG() {
    updateLineChart();
}

function optionChangedIssueYG() {
    updateLineChart();
}

function updateLineChart() {
    const issues = ['Health', 'Immigration & Asylum', 'Crime', 'The Economy', 'Tax', 'Pensions', 'Education', 'Family life & childcare', 'Housing', 'The environment', 'Britain leaving the EU', 'Transport', 'Welfare benefits', 'Defence and security', 'None of these', 'Afghanistan', 'Defence and terrorism', 'Don\'t know / None of these'];
    const year = document.getElementById('yearSelectIssues').value;
    const issue = document.getElementById('issueSelect').value;
    const issueIndex = issues.indexOf(issue);

    // Direct URL to the hosted JSON file
    const apiUrl = 'https://jamieah80.github.io/Project-3/data.json';

    console.log(`Fetching data from API: ${apiUrl}`);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('API data received:', data);

            // Extract the specific year and issue data
            const yearData = data[year];
            if (!yearData) {
                throw new Error(`Data for year ${year} not found`);
            }
            const issueData = yearData[issueIndex];
            if (!issueData) {
                throw new Error(`Data for issue ${issue} not found in year ${year}`);
            }

            const dates = issueData.dates;
            const percentages = issueData.percentages;

            const options = {
                series: [{
                    name: issue,
                    data: percentages
                }],
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: true
                    },
                    id: 'issueTrendChart'
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Issue Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: dates
                }
            };

            // Clear previous chart instance if it exists
            const existingChart = ApexCharts.getChartByID('issueTrendChart');
            if (existingChart) {
                existingChart.destroy();
            }

            const chart = new ApexCharts(document.querySelector("#chart"), options);
            chart.render();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function openCloseNav() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width == '0px') {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = '0px';
    }
}

document.addEventListener("DOMContentLoaded", init);
