function updateWordCloud() {
  const year = document.getElementById('yearSelect').value;
  // Fetch the new word cloud image based on the selected year and issue
  document.getElementById('wordCloud').src = `resources/wordclouds/${year}_poldem_wordcloud.png`;
}

function updateLineChart() {
  const year = document.getElementById('yearSelectIssues').value;
  const issue = document.getElementById('issueSelect').value;
  const demographic = document.getElementById('demographicSelect').value;
  // Fetch and update the line chart data based on the selected year, issue, and demographic
  // (This part will be handled by Python backend generating the data dynamically)
}

// Example to populate dropdowns, you can modify this based on actual data
document.addEventListener('DOMContentLoaded', () => {
  // Populate year dropdowns
  const years = [1992, 1997, 2001, 2005, 2010, 2015, 2017];
  const yearSelect = document.getElementById('yearSelect');
  const yearSelectIssues = document.getElementById('yearSelectIssues');
  years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
      yearSelectIssues.appendChild(option.cloneNode(true));
  });

  // Populate issue dropdowns
  const issues = ['Economy', 'Healthcare', 'Education', 'Environment'];
  const issueSelect = document.getElementById('issueSelect');
  issues.forEach(issue => {
      const option = document.createElement('option');
      option.value = issue;
      option.textContent = issue;
      issueSelect.appendChild(option);
  });

  // Populate demographic dropdown
  const demographics = ['Adults', 'Teens', 'Seniors', 'Children'];
  const demographicSelect = document.getElementById('demographicSelect');
  demographics.forEach(demographic => {
      const option = document.createElement('option');
      option.value = demographic;
      option.textContent = demographic;
      demographicSelect.appendChild(option);
  });
});

function init() {


}