$(document).ready(function(){

		var lukeSkywalker = 100;
		var obiWan = 120;
		var darthMaul = 180;
		var darthSidious = 150;
		var opponent;
		var player;
		var playerHealthPower;
		var opponentHealthPower;
		var playerAttack;
		var opponentAttack;

		$("#characters div").on("click", function(){
			//store the id of what has been clicked in the variable yourPlayer
			var yourPlayer = (this.id);
			// Add a # to the id string, so it knows what div to find and append that div 
			// to #player-character div
			$(("#" + yourPlayer)).appendTo($("#player-character"));
			player = $("#player-character").children("#" + yourPlayer).text();
			// console.log(player);
			var myPlayer = $.trim(player)
			// console.log(myPlayer);
			if(myPlayer === "Luke Skywalker"){
				playerHealthPower = lukeSkywalker;
				playerAttack = 5;
			}else if(myPlayer === "Obi-Wan"){
				playerHealthPower = obiWan;
				playerAttack = 8;
			}else if(myPlayer === "Darth Maul"){
				playerHealthPower = darthMaul;
				playerAttack = 20;
			}else if(myPlayer === "Darth Sidious"){
				playerHealthPower = darthSidious;
				playerAttack = 25;
			};

			$("#player-character div").off("click");
			//get the remaining divs and put them in the #enemies-available div
			for (var i = 0; i < 3; i++){
				var enemy = ($("#characters div").get(0));
				$(enemy).appendTo($("#enemies-available"));
			}

			$("#enemies-available div").off("click");
			$("#enemies-available div").on("click", function(){
				var defender = (this.id);;
				$(("#" + defender)).appendTo($("#defender"));
				opponent = $("div").children("#" + defender).text();
				console.log(opponent);
				var myOpponent = $.trim(opponent)
				console.log(myOpponent);
				if(myOpponent === "Luke Skywalker"){
					opponentHealthPower = lukeSkywalker;
					opponentAttack = 5;
				}else if(myOpponent === "Obi-Wan"){
					opponentHealthPower = obiWan;
					opponentAttack = 8;
				}else if(myOpponent === "Darth Maul"){
					opponentHealthPower = darthMaul;
					opponentAttack = 20;
				}else if(myOpponent === "Darth Sidious"){
					opponentHealthPower = darthSidious;
					opponentAttack = 25;
				}
			$("#p-health-power").text("Your Health Power: " + playerHealthPower);
			$("#o-health-power").text(opponent + "Health Power: " + opponentHealthPower);
			});
			// $("#defender div").off("click");
			$("#attack").click(function(){
				$("#game-status").empty();
				attack();

			});

		});

		function attack(){
			$("#game-status").append("You attacked " + opponent + " for " + playerAttack + " damage."); 
			$("#game-status").append("<div>" + opponent + "attacked you" + " for " + opponentAttack + " damage.</div>");

			playerHealthPower = playerHealthPower - opponentAttack;
			opponentHealthPower = opponentHealthPower - playerAttack;

			$("#p-health-power").text("Your Health Power: " + playerHealthPower);
			$("#o-health-power").text(opponent + "Health Power: " + opponentHealthPower);

			if(playerHealthPower > 0 & opponentHealthPower > 0){
				$("#game-status").empty();
				playerAttack = playerAttack + playerAttack;
				playerHealthPower = playerHealthPower - opponentAttack;
				opponentHealthPower = opponentHealthPower - playerAttack;

				$("#game-status").append("You attacked " + opponent + " for " + playerAttack + " damage."); 
				$("#game-status").append("<div>" + opponent + "attacked you" + " for " + opponentAttack + " damage.</div>");
			}else if(playerHealthPower <= 0 & opponentHealthPower > 0){
				$("#game-status").empty();
				$("#game-status").append("You lose!");
				$("#game-status").append('</br><button id="restartGame">Restart</button>');
			}else if(opponentHealthPower <= 0 & playerHealthPower > 0){
				$("#game-status").empty();
				$("#game-status").append("You win!");

			}

		}


// player attack increases by same #
// opponent attack stays the same


});