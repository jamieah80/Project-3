const APIseries = [];
const dates = [];

function updateWordCloud() {
    const year = document.getElementById('yearSelect').value;
      // Fetch the new word cloud image based on the selected year and issue
      document.getElementById('wordCloud').src = `resources/wordclouds/${year}_poldem_wordcloud.png`;
  }

function roundNum(number){
    return +(Math.round(number + "e+2") + "e-2");
}

  function init() {
    var APIseries = [];
    const years = [1992, 1997, 2001, 2005, 2010, 2015, 2017];
    const yearSelectIssues = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
    const issues = ['Health', 'Immigration & Asylum', 'Crime', 'The economy', 'Tax', 'Pensions', 'Education', 'Family life & childcare', 'Housing', 'The environment', 'Britain leaving the EU', 'Transport', 'Welfare benefits', 'Defence and security', 'None of these', 'Afghanistan', 'Defence and terrorism', 'Don\'t know / None of these'];

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

    updateWordCloud();
    updateLineChart();
    identifychecks();
}

// Function for event listener
function optionChangedCloud() {
    // Build charts and metadata panel each time a new sample is selected
    updateWordCloud();
  }

function optionChangedYearYG() {
    updateLineChart();
}

function optionChangedIssueYG() {
    updateLineChart();
}

function updateLineChart() {
            const options = {
                series: APIseries,
                chart: {
                    height: 500,
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
                    text: 'Trends in Polled Voter Issues',
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
                },
                yaxis: {
                    min: 0,
                    max: 100
                }
            };
  
            // Clear previous chart instance if it exists
            const existingChart = ApexCharts.getChartByID('issueTrendChart');
            if (existingChart) {
                existingChart.destroy();
            }
  
            const chart = new ApexCharts(document.querySelector("#chart"), options);
            chart.render();
            
        }
        
  

function openCloseNav() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width == '0px') {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = '0px';
    }
}

function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
    identifychecks();
  }

function identifychecks(){
    var items = document.querySelectorAll('[name="foo"]:checked');
    var selectedlist=[];
    for(var i=0; i<items.length; i++)       
    {
        if(items[i].type=='checkbox' && items[i].checked==true)                 
            selectedlist.push(items[i].value);
    }

    for(var j=0; j<selectedlist.length; j++)
    {
        const year = document.getElementById('yearSelectIssues').value;
        var issue = selectedlist[j];
        // Direct URL to the hosted JSON file
    const apiUrl = 'https://jamieah80.github.io/Project-3/data.json';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('API data received:', data);
  
            // Filter data for the selected year and issue
            let filteredData = data.filter(entry => entry.Year == year && entry.Issue === issue);
            console.log(filteredData);
            if (filteredData.length === 0) {
                throw new Error(`No data found for issue "${issue}" in year ${year}`);
            }
  
            // Extract dates and percentages
            let dates = filteredData.map(entry => entry.Date);
            let percentages = filteredData.map(entry => (parseFloat(entry.Decimal) * 100).toFixed());
            console.log(issue);
            console.log(percentages);
            let dict = {names: issue, data: percentages};
            APIseries.push(dict);
        })
    console.log(APIseries);
    updateLineChart();
    APIseries.length = 0;
    }
}

document.addEventListener("DOMContentLoaded", init);
