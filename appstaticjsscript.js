// Load the data
const data = [
    {issue: 'Economy', voters: 40},
    {issue: 'Healthcare', voters: 30},
    {issue: 'Education', voters: 20},
    {issue: 'Immigration', voters: 10},
    {issue: 'Housing', voters: 8},
    {issue: 'Environment', voters: 7},
    {issue: 'Defense', voters: 5},
    {issue: 'Transport', voters: 4},
    {issue: 'Foreign Policy', voters: 3},
    {issue: 'Welfare', voters: 2}
];

// Set dimensions and margins for the graph
const margin = {top: 20, right: 30, bottom: 40, left: 40},
      width = 800 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

// Append SVG object to the body of the page
const svg = d3.select("#bar-chart")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", `translate(${margin.left},${margin.top})`);

// X axis
const x = d3.scaleBand()
            .domain(data.map(d => d.issue))
            .range([0, width])
            .padding(0.2);

svg.append("g")
   .attr("transform", `translate(0, ${height})`)
   .call(d3.axisBottom(x))
   .selectAll("text")
   .attr("class", "axis-label")
   .attr("transform", "rotate(-45)")
   .style("text-anchor", "end");

// Y axis
const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.voters)])
            .nice()
            .range([height, 0]);

svg.append("g")
   .call(d3.axisLeft(y));

// Bars
svg.selectAll(".bar")
   .data(data)
   .enter()
   .append("rect")
   .attr("class", "bar")
   .attr("x", d => x(d.issue))
   .attr("y", d => y(d.voters))
   .attr("width", x.bandwidth())
   .attr("height", d => height - y(d.voters));
