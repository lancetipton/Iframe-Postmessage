$(document).ready(function(){

	// This is jsut a div to show messages sent from the Iframe:
	var mainContent = $("#mainContent");

	// Get reference to the Ifame, and the target Iframe:
	var iframe = $("#iframe");
	var targetIframe = iframe[0].contentWindow;

	// Create a new actions object for the parent:
	var parentActions = new Actions();

	// Event listener for clicking the button:
	$("#parent-btn").on('click', function(e){
		e.preventDefault();
		// Build out data to sent to iframe:
		var message = {
			method: $("#method").val(),
			text: $("#sendText").val(),
			from: "parent",
			to: "iframe",
		}
		// Call postmessage on the target iframe:
		targetIframe.postMessage( JSON.stringify(message), 'http://localhost:8080');
	})


	// Event listener to recive the messages from the iframe:
	window.addEventListener('message', function(e){
		//  Parse out data:
		 var data = JSON.parse(e.data);
		 // If a valid method is passed from the Iframe, run the method and pass the content:
		if(typeof parentActions[data['method']] === "function"){
			parentActions[data['method']](data, mainContent)
		}

	});


})