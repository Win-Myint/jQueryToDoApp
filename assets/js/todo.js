// Strike-through individual li when clicked
$('li').click(function() {
	$(this).toggleClass("liCompleted")
})

// Delete selected li when clicked
// Be aware of event bubbling
$('span').click(function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	// Prevents the event from bubbling up the DOM tree
	event.stopPropagation();
}) 