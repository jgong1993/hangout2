$(document).ready(function () {

	$("tr").each(function() {
	  $this = $(this)
	  var val = parseInt($(this).find("td").html());
	  if(val > 10){
		 	$(this).css('background', '#F19A3E');
		 }
		 else if(val > 5){
		 	$(this).css('background', '#B9FFB7');
		 }
		 else if(val > 0){
		 	$(this).css('background', '#fc8e9b');
		 }
	});

	$(".voteres tr").click(function(){
		if($(this).css('background-color') == "rgba(0, 0, 0, 0)" || $(this).css('background-color') == "rgb(255, 255, 255)"){
			 var trid = $(this).attr("id");
			 var val = parseInt($(this).find("td").html());
			 var newDetails = val +1;
			 $("#"+trid+ " td").html(newDetails);
			 $(this).css('background', '#B9FFB7');
		}
		else{
			var trid = $(this).attr("id");
			 var val = parseInt($(this).find("td").html());
			 var newDetails = val -1;
			 $("#"+trid+ " td").html(newDetails);
			 $(this).css('background', '#FFFFFF');
		}
	});

});