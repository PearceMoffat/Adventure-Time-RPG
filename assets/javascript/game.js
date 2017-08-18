var finn = {
    name: "Finn the Human",
    imgsrc: "assets/images/finn.png",
    attack: 0,
    baseattack: 8,
    counterAttack: 25,
    health: 0,
    baseHealth: 125
};
var bubblegum = {
    name: "Princess Bubblegum",
    imgsrc: "assets/images/bubblegum.png",
    attack: 0,
    baseattack: 5,
    counterAttack: 20,
    health: 0,
    baseHealth: 150
};
var iceKing = {
    name: "The Ice King",
    imgsrc: "assets/images/iceking.png",
    attack: 0,
    baseattack: 6,
    counterAttack: 8,
    health: 0,
    baseHealth: 180
};
var flamePrincess = {
    name: "Flame Princess",
    imgsrc: "assets/images/flameprincess.png",
    attack: 0,
    baseattack: 8,
    counterAttack: 14,
    health: 0,
    baseHealth: 145
};

var activeCharacter;
var defendingCharacter;
var gameStage = 1;
var wins = 0;

function initializeGame() {
	console.log("Game initialized");
	$('body').css("background-image", "url(assets/images/background_nuetral.png)");
	$("#attackBox").attr("class", "hidden");
	$("#defendBox").attr("class", "hidden");
	$("#combat-text").attr("class", "hidden");
	$("#finnBox").attr("class", "showing");
	$("#gumBox").attr("class", "showing");
	$("#iceBox").attr("class", "showing");
	$("#flameBox").attr("class", "showing");
	$("#fight").attr("class", "hidden");
	gameStage = 1;
	wins = 0;
	finn.attack = finn.baseattack;
	bubblegum.attack = bubblegum.baseattack;
	iceKing.attack = iceKing.baseattack;
	flamePrincess.attack = flamePrincess.baseattack;
	finn.health = finn.baseHealth;
	bubblegum.health = bubblegum.baseHealth;
	iceKing.health = iceKing.baseHealth;
	flamePrincess.health = flamePrincess.baseHealth;
	$("#finnBox").html(finn.name + "<img src='" + finn.imgsrc + "'>" + finn.health);
	$("#gumBox").html(bubblegum.name + "<img src='" + bubblegum.imgsrc + "'>" + 
		bubblegum.health);
	$("#iceBox").html(iceKing.name + "<img src='" + iceKing.imgsrc + "'>" + iceKing.health);
	$("#flameBox").html(flamePrincess.name + "<img src='" + flamePrincess.imgsrc + 
		"'>" + flamePrincess.health);
	$("#fight").html("Attack!");
	$("#game-text").html("Choose Your Character");
}

initializeGame();

$("#finnBox").on("click", function() {
    if (gameStage === 1) {
    	$("#attackBox").attr("class", "showing");
        $("#attackBox").html(finn.name + "<img src='" + finn.imgsrc + "'>" + finn.health);
        $('body').css("background-image", "url(assets/images/background_finn.jpg)");
        $("#game-text").html("Choose Your Opponent");
        $("#finnBox").attr("class", "hidden");
        activeCharacter = finn;
        gameStage++;
    } else if (gameStage === 2) {
    	$("#defendBox").attr("class", "showing");
        $("#defendBox").html(finn.name + "<img src='" + finn.imgsrc + "'>" + finn.health);
        $("#game-text").html("Fight!");
        $("#finnBox").attr("class", "hidden");
        $("#fight").attr("class", "showing-inline");
        $("#combat-text").attr("class", "hidden");
        defendingCharacter = finn;
        gameStage++;
    }
})

$("#gumBox").on("click", function() {
    if (gameStage === 1) {
    	$("#attackBox").attr("class", "showing");
        $("#attackBox").html(bubblegum.name + "<img src='" + bubblegum.imgsrc + "'>" + 
        	bubblegum.health);
        $('body').css("background-image", "url(assets/images/background_bubblegum.jpg)");
        $("#game-text").html("Choose Your Opponent");
        $("#gumBox").attr("class", "hidden");
        activeCharacter = bubblegum;
        gameStage++;
    } else if (gameStage === 2) {
    	$("#defendBox").attr("class", "showing");
        $("#defendBox").html(bubblegum.name + "<img src='" + bubblegum.imgsrc + "'>" + 
        	bubblegum.health);
        $("#game-text").html("Fight!");
        $("#gumBox").attr("class", "hidden");
        $("#fight").attr("class", "showing-inline");
        $("#combat-text").attr("class", "hidden");
        defendingCharacter = bubblegum;
        gameStage++;
    }
})

$("#iceBox").on("click", function() {
    if (gameStage === 1) {
    	$("#attackBox").attr("class", "showing");
        $("#attackBox").html(iceKing.name + "<img src='" + iceKing.imgsrc + "'>" + 
        	iceKing.health);
        $('body').css("background-image", "url(assets/images/background_iceking.png)");
        $("#game-text").html("Choose Your Opponent");
        $("#iceBox").attr("class", "hidden");
        activeCharacter = iceKing;
        gameStage++;
    } else if (gameStage === 2) {
    	$("#defendBox").attr("class", "showing");
        $("#defendBox").html(iceKing.name + "<img src='" + iceKing.imgsrc + "'>" + 
        	iceKing.health);
        $("#game-text").html("Fight!");
        $("#iceBox").attr("class", "hidden");
        $("#fight").attr("class", "showing-inline");
        $("#combat-text").attr("class", "hidden");
        defendingCharacter = iceKing;
        gameStage++;
    }
})

$("#flameBox").on("click", function() {
    if (gameStage === 1) {
    	$("#attackBox").attr("class", "showing");
        $("#attackBox").html(flamePrincess.name + "<img src='" + flamePrincess.imgsrc + 
        	"'>" + flamePrincess.health);
        $('body').css("background-image", "url(assets/images/background_flameprincess.jpg)");
        $("#game-text").html("Choose Your Opponent");
        $("#flameBox").attr("class", "hidden");
        activeCharacter = flamePrincess;
        gameStage++;
    } else if (gameStage === 2) {
    	$("#defendBox").attr("class", "showing");
        $("#defendBox").html(flamePrincess.name + "<img src='" + flamePrincess.imgsrc +
        	"'>" + flamePrincess.health);
        $("#game-text").html("Fight!");
        $("#flameBox").attr("class", "hidden");
        $("#fight").attr("class", "showing-inline");
        $("#combat-text").attr("class", "hidden");
        defendingCharacter = flamePrincess;
        gameStage++;
    }
})

$("#fight").on("click", function() {
	
	if (wins === 3) {
		initializeGame();
	}
    else if (gameStage === 3) {
    	$("#combat-text").attr("class", "showing");
	    
	    defendingCharacter.health -= activeCharacter.attack;

	    if (defendingCharacter.health > 0) {
	        activeCharacter.health -= defendingCharacter.counterAttack;
	        $("#combat-text").html("You attacked " + defendingCharacter.name + " for " + 
	        	activeCharacter.attack + " damage.<br>You were attacked for " + 
	        	defendingCharacter.counterAttack + " damage.");
	        $("#attackBox").html(activeCharacter.name + "<img src='" + 
	        	activeCharacter.imgsrc + "'>" + activeCharacter.health);
	        $("#defendBox").html(defendingCharacter.name + "<img src='" + 
	        	defendingCharacter.imgsrc + "'>" + defendingCharacter.health);
	        //Player is out of health
	        if (activeCharacter.health <= 0) {
	    		$("#attackBox").attr("class", "hidden");
    			$("#combat-text").html("You have been defeated!<br>Press the Reset" +
    			" button to play again");
    			$("#fight").html("Reset");
    			$("#game-text").html("Try Again!");
    			wins = 3;
	    	}
	    }

	    //Enemy is out of health
	    else {
	    	if (wins === 2) {
	    		$("#game-text").html("Winner winner chicken dinner!");
	    		$("#fight").html("Reset");
	    		$("#defendBox").attr("class", "hidden");
	    		$("#combat-text").html("You attacked " + defendingCharacter.name + " for " + 
		        	activeCharacter.attack + " damage.<br>And they were defeated! You" +
		        	" win! Click Reset button to play again");
	    		wins++;
	    	}
	    	else {
	    		$("#fight").attr("class", "hidden");
	    		$("#game-text").html("Choose Your Opponent");
		    	$("#defendBox").attr("class", "hidden");
		    	$("#combat-text").html("You attacked " + defendingCharacter.name + " for " + 
		        	activeCharacter.attack + " damage.<br>And they were defeated! Choose" +
		        	" your next foe!");
		    	wins++;
		    	gameStage--;
		    }
	    }
	    activeCharacter.attack += activeCharacter.baseattack;
	}
	else {
		$("#combat-text").html("No foe to attack, choose one above.");
	}
})