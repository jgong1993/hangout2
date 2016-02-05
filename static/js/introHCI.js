'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Experience Chan! It's not a lot of questions.");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(changeProject);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}