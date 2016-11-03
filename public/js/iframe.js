$(document).ready(function(){

	// This is just a div to show messages sent from the Parent:
	var mainContent = $("#mainContent");

	// Create a new actions object for the iframe:
	var iframeActions = new Actions();

	// Event listener to recive the message:
	window.addEventListener('message', function(e){
		// Parse the data and check if we can run the sent method:
		var data = JSON.parse(e.data);
		// If a valid method is passed from the Parent, run the method and pass the content:
		if(typeof iframeActions[data['method']] === "function"){
			iframeActions[data['method']](data, mainContent)
		}
	});

	// Event listener for clicking the button:
	$("#iframe-btn").on('click', function(e){
		e.preventDefault();
		// Build out data to sent to Parent:
		var message = {
			method: $("#method").val(),
			text: $("#sendText").val(),
			from: "iframe",
			to: "parent",
		}
		// Call postmessage on the target parent:
		parent.postMessage( JSON.stringify(message), '*');
	})
	
})

