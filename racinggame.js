let icon = document.getElementsByClassName("icons");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let reset = document.querySelector(".btn-danger")
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let t = document.getElementById("Player1");
let z = document.getElementById("Player2");

let icons = [...icon];

for (var i = 0; i < icons.length; i++) {
	icons[i].addEventListener("click", function () { //creates player image
		let player1Array = [];
		player1Array.push(this);
		if (player1Array[0].type === "ambulance") {
			player1.className = "fa fa-ambulance fa-5x";
		} else if (player1Array[0].type === "plane") {
			player1.className = "fa fa-plane fa-5x"
		} else if (player1Array[0].type === "rocket") {
			player1.className = "fa fa-rocket fa-5x"
		} else if (player1Array[0].type === "car") {
			player1.className = "fa fa-car fa-5x"
		} else if (player1Array[0].type === "bicycle") {
			player1.className = "fa fa-bicycle fa-5x"
		}
		const randomIndex = Math.floor((Math.random() * icons.length))
		const currentIcons = icons[randomIndex];
		let player2Array = [];
		player2Array.push(currentIcons);
		if (player2Array[0].type === "ambulance") {
			player2.className = "fa fa-ambulance fa-5x";
		} else if (player2Array[0].type === "plane") {
			player2.className = "fa fa-plane fa-5x"
		} else if (player2Array[0].type === "rocket") {
			player2.className = "fa fa-rocket fa-5x"
		} else if (player2Array[0].type === "car") {
			player2.className = "fa fa-car fa-5x"
		} else if (player2Array[0].type === "bicycle") {
			player2.className = "fa fa-bicycle fa-5x"
		}
		document.querySelector(".leftside").addEventListener("click", chooseSide);
		document.querySelector(".rightside").addEventListener("click", chooseSide)
	})
}

function chooseSide() {
	let button = document.getElementsByClassName("buttons");
	let buttons = [...button];
	for (let j = 0; j < buttons.length; j++) {
		buttons[j].addEventListener("click", function () {
			if (buttons[j].value === "left") { // picking left side
				left.classList.add("show");
				document.getElementById("rightside").classList.add("noshow");
			} else { // picking right side
				right.classList.add("show");
				document.getElementById("leftside").classList.add("noshow");
			}
			document.getElementById("go").addEventListener("click", countDown);
		})
	}
}


function countDown() {
	setTimeout(function Three() {
		document.querySelector(".three").classList.add("show");
		setTimeout(function Two() {
			document.querySelector(".three").classList.remove("show");
			document.querySelector(".two").classList.add("show");
			setTimeout(function One() {
				document.querySelector(".two").classList.remove("show")
				document.querySelector(".one").classList.add("show");
				setTimeout(Go, 1000);
			}, 1000);
		}, 1000);
	}, 1000)
}

function computerStart() {
	let computerMove = 0;
	let move = 10;
	computerMove = parseInt(z.style.left, 10) || 0; // passed the element as a string to turn into
	computerMove += move;
	z.style.left = computerMove + "px";
}

function Go() {
	let t = document.getElementById("Player1");
	let z = document.getElementById("Player2");
	// CHANGE PLAYER SPEED SO ITS RANDOMISED
	document.querySelector(".one").classList.remove("show")
	document.querySelector(".go").classList.add("show");
	let myMove = setInterval(computerStart, 300);
	document.addEventListener("keyup", function leftSide(e) {
		let move = 10;
		let x = e.keyCode;
		if (x === 65 || x === 76) { // if key a is pressed
			let playerMove = 0;
			playerMove = parseInt(t.style.left, 10) || 0; // passed the element as a string to turn into a number 10;
			playerMove += move;
			t.style.left = playerMove + "px";
			if (t.style.left === 1300 + "px") {
				clearInterval(myMove)
				alert("WELL DONE WINNER")
				console.log(z.style.left)
			}
			if (z.style.left === 1300 + "px") {
				clearInterval(myMove);
				alert("COMPUTER WINS")
			}
		}
	})


	function resetGame() {
		player1.className = "player1";
		player2.className = "player2";
		left.className = "left";
		right.className = "right";
		document.querySelector(".buttonarea").classList.remove("noshow")
		document.getElementById("rightside").className = "btn btn-danger buttons rightside"
		document.getElementById("leftside").className = "btn btn-danger buttons leftside";
		t.style.left = 0 + "px";
		z.style.left = 0 + "px";
		clearInterval(myMove)
		document.querySelector(".go").classList.remove("show");
	}
	document.getElementById("reset").addEventListener("click", resetGame)
}

function exit() {
	let exitButton = document.querySelector(".exit");
	document.querySelector(".buttonarea").classList.add("noshow")
}
