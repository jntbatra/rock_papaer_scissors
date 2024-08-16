//Get computers choice

function computer_random(){
    return (math.random(2)+1);
}

function computer_choice(computer_random){
    switch(computer_random){
    case(1):
        return "Rock";
        break;
    case(2):
        return "Paper";
        break;
    case(3):
        return "Scissors";
        break;
}
}

