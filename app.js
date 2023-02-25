const GuessTheNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber, 'randomNumber')

    let NumberOfPlayer = parseInt(prompt("Insert Number from 0 to 10"));
    console.log(NumberOfPlayer, 'NumberOfPlayer')

    while(randomNumber !== NumberOfPlayer) {
NumberOfPlayer = parseInt(prompt("Wrong Number. Try Again !"));
    }
    if(randomNumber === NumberOfPlayer) {
        alert("Congratulations ! You gess the Number.");
    }
}
GuessTheNumber();