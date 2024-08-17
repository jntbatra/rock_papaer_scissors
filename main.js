//Random computer choice
function computer_random() {
    return Math.floor(Math.random() * 3) + 1;
}

function computer_choice(computer_random) {
    switch(computer_random) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}




//Get human choice
function human_choice(){
    let choice = prompt ("Enter the choice");
    return choice.toLowerCase();
}

function choice_number(human_choice){
    switch(human_choice){
        case("rock"):
        return 1;
        break;

        case("paper"):
        return 2;
        break;

        case("scissors"):
        return 3;
        break;

        default:
        console.log("You didn't enter ")
        return -1;
        break
    }
}




//declareing score variable

let score_h = 0;
let score_c = 0;

//logic to play single round

function update_score(human,computer){
    if(human == computer){
        alert("Its a Draw");
    }
    else if((human ==  1 && computer == 2) || human == 2  && computer == 3 || human == 1 && computer == 3 )
    {
        alert ("Compter Won");
        score_c ++;
    }
    else if ((human ==  2 && computer == 1) || human == 3  && computer == 2 || human == 3 && computer == 1)
    {
        alert ("Human Won");
        score_h ++;
    }
}


let score_h = 0;
let score_c = 0;


while(score_h < 5 || score_c < 5){
    let entered_choice = human_choice();
    choice_number(entered_choice);

    let random_choice = computer_random();

    update_score(entered_choice,random_choice);

}


if(score_h == 5)
{
    alert("Human You won the game Gr8");
}

else if(score_c == 5)
{
    alert ("Sorry Human, skill issue");
}
