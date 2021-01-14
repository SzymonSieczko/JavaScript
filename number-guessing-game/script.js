let Random_Number = Math.floor(Math.random()*100+1);

const guessField = document.querySelector(".guessfield");
const guessSubmit = document.querySelector(".guesssubmit");

const previous = document.querySelector(".previous");
const result = document.querySelector(".result");
const hiorlow = document.querySelector(".hiorlow");

let guessCount = 1;
let resetbutton;

function CheckGuess() {

    let guessedNumber = Number(guessField.value);

    result.style.padding = "3px 8px";

    if(guessCount===1)
    {
        previous.textContent="Previous guesses: ";
    }
    previous.textContent += guessedNumber + ' ';

    if(guessedNumber===Random_Number)
    {
        result.style.backgroundColor="green";
        result.style.color = "white";
        result.textContent = "Congratulations! You got it right after "+ guessCount+ " tries!";
        GameOver();
    }
    else
    {
        if(guessCount===10)
        {
            result.style.backgroundColor="red";
            result.style.color = "white";
            result.textContent = "!!!GAME OVER!!!"
            GameOver();
        }
        else
        {
            result.style.backgroundColor="red";
            result.style.color = "white";
            result.textContent = "Wrong! Try again!"
            if(guessedNumber>Random_Number)
            {
                hiorlow.textContent = 'Last guess was too high!';
            }
            else
            {
                hiorlow.textContent = 'Last guess was too low!';
            }
        }
    }

    guessCount++;
    guessField.value="";
    guessField.focus();

}

guessSubmit.addEventListener("click",CheckGuess);

function GameOver(){

    guessField.disabled=true;
    guessSubmit.disabled=true;
    //hiorlow.style.visibility="hidden";
    hiorlow.textContent='';
    resetbutton = document.createElement("button");
    resetbutton.textContent = "Start new game";
    document.body.append(resetbutton);
    resetbutton.addEventListener("click",resetgame);
}

function resetgame(){

    Random_Number = Math.floor(Math.random()*100)+1;

    guessField.disabled=false;
    guessSubmit.disabled=false;

    const ptoreset=document.querySelectorAll('.game p');
    for(let i =0;i<ptoreset.length;i++)
    {
        ptoreset[i].textContent='';
    }

    resetbutton.parentNode.removeChild(resetbutton);
    
    guessField.value='';

    result.style.backgroundColor="white";

    result.style.padding = "0";

    guessCount = 1;

}