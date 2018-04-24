// check off specific todo list by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");

});


//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});	
	event.stopPropagation();
});


// input
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){ //check if keypress = enter
		//grabing new todo text from the input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}

});


$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})

