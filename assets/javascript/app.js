
// Countdown page timer starts at 30 seconds
var count = 30;

// Count of Right, Wrong, and unanswered Qustions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;


// ---- Game Functions ----
$(document).ready(function(){

	// TimeOut page after 30 secons

	// Intialize the game with hidden Divs
	$("#mid_game_container").hide();
	$("#end_container").hide();

	$("#start_button").on("click", function(){

		// Hide the start Div from the user
		$("#start_container").hide();

		// Show the Game Div
		$("#mid_game_container").show();

		startCountdown();
		return;

	});


	// Counts down and displays the time to the user
	function countdown(){

		// Counts down from 30 seconds
		count--;

		// Display the count to the user in the DOM
    	$('#timer_number').html(count + " Seconds");

    	

    	// ----- If Time reaches 0 Seconds ----
			// User finishes before time is up and clicks done
			$("#done_button").on("click", function(){

			// Stop the countdown and run the timeUp function
			//clearInterval(startCountdown);
			count = 0; 
			return;

			});


			// Finish the game after the timer reaches 0
			if(count == -1){

				// Collect the radio inputs
				timeUp();

				// Hide the game Div from the user
				$("#mid_game_container").hide();

			}


	}


	// Show the countdown, increment is 1 second
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// Function to be run after the timer is up
	function timeUp(){


		// Checked values of Radio Buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();



		// Determine the right/wrong/unanswered counts 
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Michael Jordan"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "John Stockton"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Wilt Chamberlain"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Golden State Warriors"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Steve Kerr"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		// After answers are validated, display the score results
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score Div
		$("#end_container").show();


	}

});