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



