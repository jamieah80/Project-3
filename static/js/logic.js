function updateWordCloud() {
  const year = document.getElementById('yearSelect').value;
    // Fetch the new word cloud image based on the selected year and issue
    document.getElementById('wordCloud').src = `resources/wordclouds/${year}_poldem_wordcloud.png`;
}


function init() {

    
    // Populate year dropdowns
    let years = [1992, 1997, 2001, 2005, 2010, 2015, 2017];
    let dropdownMenu1 = d3.select("#yearSelect");

    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    options = dropdownMenu1.selectAll("option")
    .data(years)
    .enter()
    .append("option")
    .text(function(d) { return d; });

    let yearSelectIssues = [2011,2012,2013,2014,2015,2016,2017];
    let dropdownMenu2 = d3.select("#yearSelectIssues");

    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    options = dropdownMenu2.selectAll("option")
    .data(yearSelectIssues)
    .enter()
    .append("option")
    .text(function(d) { return d; });
  
    let issues = ['Economy', 'Healthcare', 'Education', 'Environment'];
    let dropdownMenu3 = d3.select("#issueSelect");

    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    options = dropdownMenu3.selectAll("option")
    .data(issues)
    .enter()
    .append("option")
    .text(function(d) { return d; });

  // Get the first sample from the list
  let inityear = years[0];

  // Build charts and metadata panel with the first sample
  updateWordCloud();
  updateLineChart();
  }

// Function for event listener
function optionChangedCloud() {
  // Build charts and metadata panel each time a new sample is selected
  updateWordCloud();
}

function optionChangedYearYG(){
  updateLineChart();
}

function optionChangedIssueYG(){
  updateLineChart();
}

function optionChangedDemoYG(){
  updateLineChart();
}

function updateLineChart() {
  const year = document.getElementById('yearSelectIssues').value;
  const issue = document.getElementById('issueSelect').value;

  //use Flask API with Json

  // Fetch and update the line chart data based on the selected year, issue

  //identify which row issue is

  //filter dates to year



  var options = {
    series: [{
      name: issue[i],
      data: percentages
    }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: dates,
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

function openCloseNav() {
  console.log(document.getElementById("sidebar").style.width)
  if (document.getElementById("sidebar").style.width == '0px') {
      document.getElementById("sidebar").style.width = "250px";
  } else {
     document.getElementById("sidebar").style.width = '0px'
  }
}

init();