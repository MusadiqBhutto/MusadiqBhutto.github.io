import { getRandomApiKey } from './script.js';

const originalMatchDiv = document.querySelector('.match');
const allMatchesSection = document.querySelector('.all-matches');

function fetchMatchesData() 
{ 
    const randomApiKey = getRandomApiKey();
    const url = `https://api.cricapi.com/v1/matches?apikey=${randomApiKey}&offset=0`;

    fetch(url).then(response => response.json()).then(data => 
    {
        const allMatches = data.data;
        console.log(allMatches[0]);

        for(var i=0; i<allMatches.length; i++)
        {   
            const duplicateMatchDiv = originalMatchDiv.cloneNode(true);
            duplicateMatchDiv.querySelector('.match-name').textContent = allMatches[i].name.split(",")[0];
            duplicateMatchDiv.querySelector('.match-venue').textContent = allMatches[i].venue.split(" ").pop();
            if(allMatches[i].matchStarted && allMatches[i].matchEnded)  
            {
                duplicateMatchDiv.querySelector('.match-date').textContent = formatDate(allMatches[i].date);
            }
            else
            {
                duplicateMatchDiv.querySelector('.match-date').textContent = "Live";
                duplicateMatchDiv.querySelector('.match-date').classList.add('live-label');
            }

            if(allMatches[i].status == "Match not started")
            {
                duplicateMatchDiv.querySelector('.team-1-image').src = allMatches[i].teamInfo[0].img;
                duplicateMatchDiv.querySelector('.team-1-name').innerHTML = allMatches[i].teamInfo[0].shortname;
                duplicateMatchDiv.querySelector('.team-1-score').innerHTML = "";
                duplicateMatchDiv.querySelector('.team-1-overs').innerHTML = "";
                duplicateMatchDiv.querySelector('.team-2-image').src = allMatches[i].teamInfo[1].img;
                duplicateMatchDiv.querySelector('.team-2-name').innerHTML = allMatches[i].teamInfo[1].shortname;
                duplicateMatchDiv.querySelector('.team-2-score').innerHTML = "";
                duplicateMatchDiv.querySelector('.team-2-overs').innerHTML = "";
            }
            else if(allMatches[i].score[0].inning.split(" ")[0] == allMatches[i].teamInfo[0].name.split(" ")[0])
            {
                duplicateMatchDiv.querySelector('.team-1-image').src = allMatches[i].teamInfo[0].img;
                duplicateMatchDiv.querySelector('.team-1-name').innerHTML = allMatches[i].teamInfo[0].shortname;
                duplicateMatchDiv.querySelector('.team-1-score').innerHTML = allMatches[i].score[0].r + " - " + allMatches[i].score[0].w;
                duplicateMatchDiv.querySelector('.team-1-overs').innerHTML = "(" + allMatches[i].score[0].o + ")";
                duplicateMatchDiv.querySelector('.team-2-image').src = allMatches[i].teamInfo[1].img;
                duplicateMatchDiv.querySelector('.team-2-name').innerHTML = allMatches[i].teamInfo[1].shortname;

                if(allMatches[i].score[1] == null)
                {
                    duplicateMatchDiv.querySelector('.team-2-score').innerHTML = "YET TO BAT";
                    duplicateMatchDiv.querySelector('.team-2-overs').innerHTML = "";
                }
                else if(allMatches[i].score[1] != null)
                {
                    duplicateMatchDiv.querySelector('.team-2-score').innerHTML = allMatches[i].score[1].r + " - " + allMatches[i].score[1].w;
                    duplicateMatchDiv.querySelector('.team-2-overs').innerHTML = "(" + allMatches[i].score[1].o + ")";
                }  
            }
            else
            {
                duplicateMatchDiv.querySelector('.team-1-image').src = allMatches[i].teamInfo[1].img;
                duplicateMatchDiv.querySelector('.team-1-name').innerHTML = allMatches[i].teamInfo[1].shortname;
                duplicateMatchDiv.querySelector('.team-1-score').innerHTML = allMatches[i].score[0].r + " - " + allMatches[i].score[0].w;
                duplicateMatchDiv.querySelector('.team-1-overs').innerHTML = "(" + allMatches[i].score[0].o + ")";
                duplicateMatchDiv.querySelector('.team-2-image').src = allMatches[i].teamInfo[0].img;
                duplicateMatchDiv.querySelector('.team-2-name').innerHTML = allMatches[i].teamInfo[0].shortname; 
                
                if(allMatches[i].score[1] == null)
                {
                    duplicateMatchDiv.querySelector('.team-2-score').innerHTML = "YET TO BAT";
                    duplicateMatchDiv.querySelector('.team-2-overs').innerHTML = "";
                }
                else if(allMatches[i].score[1] != null)
                {
                    duplicateMatchDiv.querySelector('.team-2-score').innerHTML = allMatches[i].score[1].r + " - " + allMatches[i].score[1].w;
                    duplicateMatchDiv.querySelector('.team-2-overs').innerHTML = "(" + allMatches[i].score[1].o + ")";
                }  
            }

            if(allMatches[i].matchType == "test" && allMatches[i].score[2] != null)
            {
                duplicateMatchDiv.querySelector('.team-1-overs').innerHTML = ""; 
                duplicateMatchDiv.querySelector('.team-1-score').innerHTML += " & " + allMatches[i].score[2].r + " - " + allMatches[i].score[2].w;
            }

            if(allMatches[i].matchType == "test" && allMatches[i].score[3] != null)
            {
                duplicateMatchDiv.querySelector('.team-2-overs').innerHTML = ""; 
                duplicateMatchDiv.querySelector('.team-2-score').innerHTML += " & " + allMatches[i].score[3].r + " - " + allMatches[i].score[3].w;
            }
            
            duplicateMatchDiv.querySelector('.match-result').innerHTML = allMatches[i].status;
            allMatchesSection.appendChild(duplicateMatchDiv);
        }
        originalMatchDiv.style.display = "none";
    })
    .catch(error => 
    {
        console.error('Error fetching data:', error);
    });

}

fetchMatchesData();

function formatDate(dateStr) 
{
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const dateParts = dateStr.split('-');
    const day = parseInt(dateParts[2], 10);
    const month = months[parseInt(dateParts[1], 10) - 1];
  
    return `${day}${getOrdinalSuffix(day)} ${month}`;
}
  
function getOrdinalSuffix(day) 
{
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) 
    {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

