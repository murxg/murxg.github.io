var input = document.getElementById("textbox");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
function lol(){
	var text = document.getElementById('textbox').value;
	if (text.startsWith("https://") === true) {
	    window.open(text, "_blank");
	}	
	if (text.startsWith("http://") === true) {
	    window.open(text, "_blank");
	}
	if (text.startsWith("//") === true) {
	    window.open(text.replace("//","http://"), "_blank");
        }
        if (text.startsWith("//") === false && text.startsWith("http://") === false && text.startsWith("https://") === false) {
           if (text.includes("/") === false) {
              window.location.hostname = text;
           }
           else {
              window.location = "http://" + text;
           }
    }
}
