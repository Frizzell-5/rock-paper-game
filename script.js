
const buttons = document.querySelectorAll("input");
const resetBtn = document.querySelector('#reset');
let countX = 0;
let countY = 0;
resetBtn.addEventListener('click',() => location.reload());

let i =0;
let txt = "It's Not the Usual Game...It's Knife, Fork, Spoon";
let speed  = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function showDiv() {
    document.getElementById('page').style.display = "block";
}


/*function toggle() {
    $(document).ready(function() {
        $("start").click(function() {
            $("container").toggle();
        })
    }
}*/

console.log(typeWriter());
console.log(showDiv());

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    });



function disable() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}



function ComputerPlay() 
{
    let choices = ["knife", "fork", "spoon"];
    let rand = Math.floor(Math.random() * 3);
    let choice = choices[rand];
    return choice;
}
function playRound(playerSelection) {
    
   
    let computerSelection  = ComputerPlay();
    let result = "";

    if ((playerSelection == 'knife' && computerSelection == 'spoon') || (playerSelection == 'fork' && computerSelection == 'knife') || (playerSelection == 'spoon' && computerSelection == 'fork')) {
        countY+=1;
        result = ("YOU WIN! " + playerSelection + ' beats ' + computerSelection
        +"<br><br>Player score: " + countY + " computer score: " + countX);
        if (countY == 5) {
            result = ("YOU WON THE GAME! REFRESH TO PLAY AGAIN!")
            disable();
            
        }
    
    }

    
    

    
    else if (playerSelection == computerSelection) {
        result = ('TIE! you both chose ' + playerSelection + " <br><br>Player score " + countY + " computer score " + countX);
    }
    else {
        countX+=1;
        result = ("LOSER! " + computerSelection + ' beats ' + playerSelection
        +"<br><br>Player score: " + countY + " computer score: " + countX);
        if (countX == 5) {
            result = ("YOU LOST THE GAME! REFRESH TO PLAY AGAIN!")
            disable();
            
    }
   
    }
    document.getElementById('result').innerHTML = result;
    return

    
    
}

})



