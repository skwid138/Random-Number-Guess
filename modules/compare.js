function compare ( random, playerArray) {
    var results = [];
    for (var i = 0; i < playerArray.length; i++) {
        if (random === playerArray[i]) {
            if (playerArray[i] === playerArray[0]){
                var player1 = "You got it!";
                results.push(player1);
            } else if (playerArray[i] === playerArray[1]){
                var player2 = "You got it!";
                results.push(player2);
            } else if (playerArray[i] === playerArray[2]){
                var player3 = "You got it!";
                results.push(player3);
            } else {
                var player2 = "You got it!";
                results.push(player2);
        } else 
        
    }
}

// this wont work
// maybe input the post objects for player input into an array
// add a new property to each object with the result
