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

const random_choice = computer_random();
console.log(computer_choice(random_choice));



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
        return -1;
        break
    }
}

const entered_choice = human_choice();
console.log(choice_number(entered_choice));


//declareing score variable

let score_h = 0;
let score_c = 0;




