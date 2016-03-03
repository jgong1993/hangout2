'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('.story_v_photos').click(storyClick);
}

function storyClick() {
	ga('send', 'event', 'story_v_photos', 'click');
}