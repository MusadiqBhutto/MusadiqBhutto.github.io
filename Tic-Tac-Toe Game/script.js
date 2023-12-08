var currentTurn = 1;

function message(buttonId)
{   
    var heading = document.getElementById("player-turn");
    var button = document.getElementById(buttonId);

    button.disabled = true;

    if(currentTurn%2 != 0)
    {
        button.innerHTML = "X";
        button.style.color = "red"
    }
    else
    {
        button.innerHTML = "O";
        button.style.color = "green"
    }

    if(currentTurn >= 5)
    {   
        let button1Text = document.getElementById("button1").innerHTML;
        let button2Text = document.getElementById("button2").innerHTML;
        let button3Text = document.getElementById("button3").innerHTML;
        let button4Text = document.getElementById("button4").innerHTML;
        let button5Text = document.getElementById("button5").innerHTML;
        let button6Text = document.getElementById("button6").innerHTML;
        let button7Text = document.getElementById("button7").innerHTML;
        let button8Text = document.getElementById("button8").innerHTML;
        let button9Text = document.getElementById("button9").innerHTML;

        if(button1Text == button2Text && button1Text == button3Text)
        {
            displayAlert(button1Text + " Wins !!!"); 
        }
        else if(button4Text == button5Text && button4Text == button6Text)
        {
            displayAlert(button4Text + " Wins !!!");
        }
        else if(button7Text == button8Text && button7Text == button9Text)
        {
            displayAlert(button7Text + " Wins !!!");
        }
        else if(button1Text == button4Text && button1Text == button7Text)
        {
            displayAlert(button1Text + " Wins !!!");
        }
        else if(button2Text == button5Text && button2Text == button8Text)
        {
            displayAlert(button2Text + " Wins !!!");
        }
        else if(button3Text == button6Text && button3Text == button9Text)
        {
            displayAlert(button3Text + " Wins !!!");
        }
        else if(button1Text == button5Text && button1Text == button9Text)
        {
            displayAlert(button1Text + " Wins !!!");
        }
        else if(button3Text == button5Text && button3Text == button7Text)
        {
            displayAlert(button3Text + " Wins !!!");
        }
        else 
        {
            if(currentTurn == 9)
            {   
                displayAlert("Game Draw!");
            } 
        }
        
    }

    currentTurn++;

    if(currentTurn%2 == 0)
    {
        heading.innerHTML = "Player 2's turn";
    }
    else
    {
        heading.innerHTML = "Player 1's turn";
    }
 
}

function displayAlert(text)
{
    setTimeout(function() 
    {
        alert(text);
        location.reload();
    },  100);
}