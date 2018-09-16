var cards = ["queen","queen","king","king"];
var cardsInPlay = [];


if (cardsInPlay.length === 2);


var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else {
		alert("Sorry, try again");	};
};

var flipCard = function(cardId){
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
};

flipCard(0);
flipCard(2);