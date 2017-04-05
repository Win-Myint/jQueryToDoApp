// Strike-through individual li when clicked
$('ul').on('click', 'li', function() {
	$(this).toggleClass("liCompleted")
})

// Delete selected li when clicked
// Be aware of event bubbling
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	// Prevents the event from bubbling up the DOM tree
	event.stopPropagation();
}) 

// Adding new todo 
$("input[type = 'text']").keypress(function(event) {
	// Check if key press is equal to ENTER (13)
	if(event.which === 13) {
		var newToDo = $(this).val();
		// Clear input field
		$('input').val('');

		// Add newToDo at the end of li
		$('ul').append('<li><span>X</span> ' + newToDo + '</li>')
	}
})