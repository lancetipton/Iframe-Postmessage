// Helper object to run some methods:
function Actions() {
	this.set = function(data, container){
		container.html(data['text']);
	}
	this.log =  function(data){
		console.log(data);
		console.log("Data logged by: " + data["to"]);
		console.log("Data sent From: " + data["from"]);
	}
	this.alert = function(data){
		alert("Alert displayed by: " +  data["to"] +  "\nAlert sent from: " +  data["from"] + "\nMessage: " +  data['text']);
	}
	return this;
}