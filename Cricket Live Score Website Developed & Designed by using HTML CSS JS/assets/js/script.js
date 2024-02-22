// Make a request to the API
window.fetch("https://api.cricapi.com/v1/currentMatches?apikey=b5a0aeae-25a6-40ed-a943-08bcc8eb393d&offset=0").then(response => response.json()).then(data => 
{
  // Find the match with the specified ID
  const matchId = "ec04b1fe-fdf3-46c7-a627-1850872cb7be";
  const selectedMatch = data.data.find(match => match.id === matchId);

  if (selectedMatch) 
  { 
    
    var team1 = "";
    var team2 = "";
    var choose = "";
  
    const status = selectedMatch.status;
    const words = status.split(' ');
    const firstTwoWords = words.slice(0, 2);
    const firstTwoWordsResult = firstTwoWords.join(' ');
    const lastWord = words[words.length - 1];
      
    const venue = selectedMatch.venue;
    const venueElement = document.getElementsByClassName("venue")[0];
    venueElement.innerHTML = venue;

    const matchNumber = selectedMatch.name.match(/\d+/)[0]
    if(lastWord == "bat" || lastWord == "bowl")
    { 
      if(selectedMatch.teamInfo[0].name == firstTwoWordsResult && lastWord == "bat")
      {  
         choose = "bat";
         team1 = selectedMatch.teamInfo[0].name;
         team2 = selectedMatch.teamInfo[1].name;
      }
      if(selectedMatch.teamInfo[0].name == firstTwoWordsResult && lastWord == "bowl;")
      {
        choose = "bowl";
        team1 = selectedMatch.teamInfo[1].name;
        team2 = selectedMatch.teamInfo[0].name;
      }  
      if(selectedMatch.teamInfo[1].name == firstTwoWordsResult && lastWord == "bat")
      {
        choose = "bat";
        team1 = selectedMatch.teamInfo[1].name;
        team2 = selectedMatch.teamInfo[0].name;
      }  
      if(selectedMatch.teamInfo[1].name == firstTwoWordsResult && lastWord == "bowl")
      {
        choose = "bowl";
        team1 = selectedMatch.teamInfo[0].name;
        team2 = selectedMatch.teamInfo[1].name;
      } 
    }

    const match = "Match " + matchNumber + ": " + team1 + " VS " + team2;
    const matchElement = document.getElementsByClassName("match")[0];
    matchElement.innerHTML = match;

    if(selectedMatch.score[1] == null && firstTwoWordsResult != "Innings Break")
    {
      const toss = "Toss: " + firstTwoWordsResult + ", Choose: " + choose;
      const tossElement = document.getElementsByClassName("toss")[0];
      tossElement.innerHTML = toss;

      const team1NameElement = document.getElementsByClassName("team-1-name")[0];
      team1NameElement.innerHTML = team1;

      const team2NameElement = document.getElementsByClassName("team-2-name")[0];
      team2NameElement.innerHTML = team2;

      const team1Score = selectedMatch.score[0].r + " - " + selectedMatch.score[0].w;
      const team1ScoreElement = document.getElementsByClassName("team-1-score")[0];
      team1ScoreElement.innerHTML = team1Score;

      const team1Overs = "Overs: (" + selectedMatch.score[0].o + ")";
      const team1OversElement = document.getElementsByClassName("team-1-over")[0];
      team1OversElement.innerHTML = team1Overs;

      const team2Score = "Yet to bat";
      const team2ScoreElement = document.getElementsByClassName("team-2-score")[0];
      team2ScoreElement.innerHTML = team2Score;

      if(team1 == selectedMatch.teamInfo[0].name)
      { 
        const img1Src =   selectedMatch.teamInfo[0].img;
        const img2Src =   selectedMatch.teamInfo[1].img;
        const team1Img = document.getElementsByClassName("team-1-img")[0];
        const team2Img = document.getElementsByClassName("team-2-img")[0];
        team1Img.src = img1Src;
        team2Img.src = img2Src;

      }
      else
      {
        const team1Img = document.getElementsByClassName("team-1-img")[0];
        const team2Img = document.getElementsByClassName("team-2-img")[0];
        team1Img.src = selectedMatch.teamInfo[1].img;
        team2Img.src = selectedMatch.teamInfo[0].img;
      }


    }
     if (firstTwoWordsResult == "Innings Break")
    { 
      const target = parseInt(selectedMatch.score[0].r, 10) + 1;
      const toss = "Target: " + target;
      const tossElement = document.getElementsByClassName("toss")[0];
      tossElement.innerHTML = toss;
    }
    else if (selectedMatch.score[1] != null )
    {
      const target = parseInt(selectedMatch.score[0].r) + 1;
      const toss = "Target: " + target;
      const tossElement = document.getElementsByClassName("toss")[0];
      tossElement.innerHTML = toss;
    }

    if(selectedMatch.score[1] != null)
    {
      const team1String = selectedMatch.score[0].inning;
      const team1words = team1String.split(' ');
      const team1firstTwoWords = team1words.slice(0, 2);
      const team1 = team1firstTwoWords.join(' ');
      const team1NameElement = document.getElementsByClassName("team-1-name")[0];
      team1NameElement.innerHTML = team1;

      const team2String = selectedMatch.score[1].inning;
      const team2words = team2String.split(' ');
      const team2firstTwoWords = team2words.slice(0, 2);
      const team2 = team2firstTwoWords.join(' ');
      const team2NameElement = document.getElementsByClassName("team-2-name")[0];
      team2NameElement.innerHTML = team2;

      const match = "Match " + matchNumber + ": " + team1 + " VS " + team2;
      const matchElement = document.getElementsByClassName("match")[0];
      matchElement.innerHTML = match;

      const team1Score = selectedMatch.score[0].r + " - " + selectedMatch.score[0].w;
      const team1ScoreElement = document.getElementsByClassName("team-1-score")[0];
      team1ScoreElement.innerHTML = team1Score;

      const team2Score = selectedMatch.score[1].r + " - " + selectedMatch.score[1].w;
      const team2ScoreElement = document.getElementsByClassName("team-2-score")[0];
      team2ScoreElement.innerHTML = team2Score;

      const team1Overs = "Overs: (" + selectedMatch.score[0].o + ")";
      const team1OversElement = document.getElementsByClassName("team-1-over")[0];
      team1OversElement.innerHTML = team1Overs;

      const team2Overs = "Overs: (" + selectedMatch.score[1].o + ")";
      const team2OversElement = document.getElementsByClassName("team-2-over")[0];
      team2OversElement.innerHTML = team2Overs;


      if(team1 == selectedMatch.teamInfo[0].name)
      { 
        const img1Src =   selectedMatch.teamInfo[0].img;
        const img2Src =   selectedMatch.teamInfo[1].img;
        const team1Img = document.getElementsByClassName("team-1-img")[0];
        const team2Img = document.getElementsByClassName("team-2-img")[0];
        team1Img.src = img1Src;
        team2Img.src = img2Src;

      }
      else
      {
        const team1Img = document.getElementsByClassName("team-1-img")[0];
        const team2Img = document.getElementsByClassName("team-2-img")[0];
        team1Img.src = selectedMatch.teamInfo[1].img;
        team2Img.src = selectedMatch.teamInfo[0].img;
      }

      

    }

    const resultElement = document.getElementsByClassName("result")[0];
    resultElement.innerHTML = selectedMatch.status;



    





   
    

    

    // Extract values and store them in local variables
    
    


    
    // const matchDetails = document.createElement('p');
    // matchDetails.style.textAlign = 'center'; 
    // matchDetails.style.marginTop = '20px'; 
    // matchDetails.style.color = 'black';
    // matchDetails.style.fontSize = '20px'
    // matchDetailsContainer.appendChild(matchDetails);

    // const team1Img = document.createElement('img');
    // team1Img.src = selectedMatch.teamInfo[0].img;
    // team1Img.style.marginLeft = "20px";
    // team1Img.style.marginTop = '40px'; 
    // team1Img.style.width = '50px';
    // team1Img.style.height = '50px';
    // matchDetailsContainer.appendChild(team1Img);

    // const team1Score = document.createElement("h1");
    // team1Score.innerHTML = team1 + ": <span style='color: blue;'>" + selectedMatch.score[0].r + " - " + selectedMatch.score[0].w + "</span> <span style='color: green;'>(" + selectedMatch.score[0].o + ") </span>";
    // team1Score.style.marginLeft = "80px";
    // team1Score.style.marginTop = '53px';
    // matchDetailsContainer.appendChild(team1Score);

    // const team2Img = document.createElement('img');
    // team2Img.src = selectedMatch.teamInfo[1].img;
    // team2Img.style.marginLeft = "-50px";
    // team2Img.style.marginTop = '40px'; 
    // team2Img.style.width = '50px';
    // team2Img.style.height = '50px';
    // matchDetailsContainer.appendChild(team2Img);

    // const team2Score = document.createElement("h1");
    // team2Score.innerHTML = team2 + ": <span style='color: blue;'>" + selectedMatch.score[1].r + " - " + selectedMatch.score[1].w + "</span> <span style='color: green;'>(" + selectedMatch.score[1].o + ") </span>";
    // team2Score.style.marginLeft = "80px";
    // team2Score.style.marginTop = '53px';
    // matchDetailsContainer.appendChild(team2Score);




   

   
   

   
   
    
    // matchDetailsContainer.innerHTML = `
    //   <div class="match-container">
    //     <h3>${team1} vs ${team2}, ${matchNumber}</h3>
    //     <p>Match Type: ${selectedMatch.matchType}</p>
    //     <p>Status: ${selectedMatch.status}</p>
    //     <p>Venue: ${selectedMatch.venue}</p>
    //     <p>Date: ${selectedMatch.date}</p>
    //     <p>Teams: ${team1} vs ${team2}</p>
    //     <p>Score: ${selectedMatch.score[0].r}/${selectedMatch.score[0].w} in ${selectedMatch.score[0].o} overs (${selectedMatch.score[0].inning})</p>

    //     <img src="${selectedMatch.teamInfo[0].img}" alt="${team1}">
    //     <img src="${selectedMatch.teamInfo[1].img}" alt="${team2}">
    //   </div>
    // `;
  } else {
    console.error("Match not found with ID:", matchId);
  }
})
.catch(err => {
  document.write("An error occurred while fetching data:", err);
  document.write("Possible Reason: hits today exceeded hits limit");
});



// Reload the page every minute (60000 milliseconds)
setInterval(function() {
    location.reload();
}, 60000);

