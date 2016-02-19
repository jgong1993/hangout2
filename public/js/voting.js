$(document).ready(function () {
	$(".voteres tr").click(function(){
		 var trid = $(this).attr("id");
		 var val = parseInt($(this).find("td").html());
		 var newDetails = val +1;
		 $("#"+trid+ " td").html(newDetails);
		 if(newDetails > 10){
		 	$(this).css('background', '#F19A3E');
		 }
		 else if(newDetails > 5){
		 	$(this).css('background', '#B9FFB7');
		 }
		 else if(newDetails > 0){
		 	$(this).css('background', '#fc8e9b');
		 }
	});
});