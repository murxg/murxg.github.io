var input = document.getElementById("textbox");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
function lol(){
	var text = document.getElementById('textbox').value;
	if (text.startsWith("https://") == true) {
	    window.location = text.substring(8);
	}	
	if (text.startsWith("http://") == true) {
	    window.location = text.substring(7);
	}
	if (text.startsWith("//") == true) {
	    window.location = text.substring(2);
        if (text.startsWith("//") == false && text.startsWith("http://") == false && text.startsWith("https://") == false) {
            window.location = "//" + text;
        }
}
