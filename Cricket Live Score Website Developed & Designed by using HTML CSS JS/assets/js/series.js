import { getRandomApiKey } from './script.js';

const randomApiKey = getRandomApiKey();
const url = `https://api.cricapi.com/v1/series?apikey=${randomApiKey}&offset=0`;

fetch(url).then(response => response.json()).then(data => 
{   
    const apiData = data.data;
    const tableBody = document.querySelector('#apiTable tbody');

    apiData.forEach(series => 
    {
      const row = document.createElement('tr');
      row.innerHTML = ` <th scope="row">${series.name}</th> <td>${formatDate(series.startDate, true)}</td> <td>${formatDate(series.endDate, false)}</td> <td>${series.odi}</td> <td>${series.t20}</td> <td>${series.test}</td> <td>${series.matches}</td> <td><button class="btn btn-primary btn-sm" data-id="${series.id}">See More</button></td> `;
      row.querySelectorAll('td').forEach(td => td.classList.add('font-monospace'));
      const button = row.querySelector('button');
      button.addEventListener('click', () => getMatchesBySeries(series.id));
      tableBody.appendChild(row);

    });
})
.catch(error => console.log(error));

function formatDate(dateStr, includeYear) 
{
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const year = date.getFullYear();
  
  if (includeYear) 
  {
    return `${day}-${month}-${year}`;
  } else 
  {
    return `${day}-${month}`;
  }
}

function getMatchesBySeries(seriesId)
{
  window.fetch("https://api.cricapi.com/v1/currentMatches?apikey=b6d2d036-8ea1-4150-9a85-aebb65fcbf2a&offset=0").then(response => response.json()).then(data => 
  {
         const selectedMatchesArray = data.data.filter(series => series.series_id === seriesId);
         console.log(selectedMatchesArray);
  })
}















