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

function changeProject(e){
	var projectId = $('#project').val();
	$(projectId).animate({
		width: $('#width').val() 
	});

	// To get this to work, you need there to be a project description first.
	// If there isn't any description box, there you can't change the description.
	var projDescription = $('#description').val();
	$(projectId + " .project-description").text(projDescription);
}

function projectClick(e){
	// This precent the page from reloading
	e.preventDefault();

	// $(this) refers to object that triggered the event
	//$(this).css("background-color", "#7fff00");

	// #jumbotron refers to id
	// .jumbotron refers to class
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if(description.length == 0){
		$(containingProject).append("<div class='project-description'><img src=\"https://i.imgur.com/Yvq8eXZ.jpg\" alt=\"Lorem Pixel image\" class=\"img\"></div>");
		//$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	}else{
		//description.html("<p>Stop clicking on me! " + (new Date()) + "</p>");
		description.toggle();
	}

}