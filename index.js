// DOM elements
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
b4 = document.getElementById("b4");
b5 = document.getElementById("b5");
b6 = document.getElementById("b6");
b7 = document.getElementById("b7");
b8 = document.getElementById("b8");
b9 = document.getElementById("b9");

let gameStatus = document.getElementById("status");

// variable that keeps track of whose turn currently is
let currentTurn = "x";

/*
this function is called whenever a box is clicked;
it checks if someone has won or if the game is a tie.
Additionally, it also changes the status of which player's turn it is.
*/
const myFunc = () => {
	let bv1, bv2, bv3, bv4, bv5, bv6, bv7, bv8, bv9;
	bv1 = document.getElementById("b1").value;
	bv2 = document.getElementById("b2").value;
	bv3 = document.getElementById("b3").value;
	bv4 = document.getElementById("b4").value;
	bv5 = document.getElementById("b5").value;
	bv6 = document.getElementById("b6").value;
	bv7 = document.getElementById("b7").value;
	bv8 = document.getElementById("b8").value;
	bv9 = document.getElementById("b9").value;

	if (bv1 === "X" && bv2 === "X" && bv3 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (bv1 === "X" && bv4 === "X" && bv7 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b2.disabled = true;
		b3.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (bv7 === "X" && bv8 === "X" && bv9 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
	} else if (bv3 === "X" && bv6 === "X" && bv9 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	} else if (bv1 === "X" && bv5 === "X" && bv9 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	} else if (bv3 === "X" && bv5 === "X" && bv7 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (bv2 === "X" && bv5 === "X" && bv8 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b9.disabled = true;
	} else if (bv4 === "X" && bv5 === "X" && bv6 === "X") {
		gameStatus.innerHTML = "Player X Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (bv1 === "O" && bv2 === "O" && bv3 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (bv1 === "O" && bv4 === "O" && bv7 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b2.disabled = true;
		b3.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (bv7 === "O" && bv8 === "O" && bv9 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
	} else if (bv3 === "O" && bv6 === "O" && bv9 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	} else if (bv1 === "O" && bv5 === "O" && bv9 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	} else if (bv3 === "O" && bv5 === "O" && bv7 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (bv2 === "O" && bv5 === "O" && bv8 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b9.disabled = true;
	} else if (bv4 === "O" && bv5 === "O" && bv6 === "O") {
		gameStatus.innerHTML = "Player O Has Won!";
		gameStatus.style.backgroundColor = "green";
		b1.disabled = true;
		b2.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	} else if (
		(bv1 === "X" || bv1 === "O") &&
		(bv2 === "X" || bv2 === "O") &&
		(bv3 === "X" || bv3 === "O") &&
		(bv4 === "X" || bv4 === "O") &&
		(bv5 === "X" || bv5 === "O") &&
		(bv6 === "X" || bv6 === "O") &&
		(bv7 === "X" || bv7 === "O") &&
		(bv8 === "X" || bv8 === "O") &&
		(bv9 === "X" || bv9 === "O")
	) {
		gameStatus.innerHTML = "Tie!";
		gameStatus.style.backgroundColor = "orange";
	} else {
		if (currentTurn === "x") {
			gameStatus.innerHTML = "It is Player X's turn.";
			gameStatus.style.backgroundColor = "red";
		} else {
			gameStatus.innerHTML = "It is Player O's turn.";
			gameStatus.style.backgroundColor = "blue";
		}
	}
};

// this function simply reloads the page (a.k.a. resets the game)
const reset = () => {
	location.reload();
};

/*
these functions disable each box after it has been clicked;
they also render the appropriate symbol according to whose turn it currently is.
Finally, they also call the function that's responsible for checking if someone has won/the game is a draw
*/
const myFunc1 = () => {
	if (currentTurn === "x") {
		b1.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b1.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b1.disabled = true;
};

const myFunc2 = () => {
	if (currentTurn === "x") {
		b2.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b2.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b2.disabled = true;
};

const myFunc3 = () => {
	if (currentTurn === "x") {
		b3.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b3.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b3.disabled = true;
};

const myFunc4 = () => {
	if (currentTurn === "x") {
		b4.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b4.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b4.disabled = true;
};

const myFunc5 = () => {
	if (currentTurn === "x") {
		b5.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b5.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b5.disabled = true;
};

const myFunc6 = () => {
	if (currentTurn === "x") {
		b6.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b6.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b6.disabled = true;
};

const myFunc7 = () => {
	if (currentTurn === "x") {
		b7.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b7.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b7.disabled = true;
};

const myFunc8 = () => {
	if (currentTurn === "x") {
		b8.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b8.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b8.disabled = true;
};

const myFunc9 = () => {
	if (currentTurn === "x") {
		b9.value = "X";
		currentTurn = "o";
		myFunc();
	} else {
		b9.value = "O";
		currentTurn = "x";
		myFunc();
	}
	b9.disabled = true;
};
