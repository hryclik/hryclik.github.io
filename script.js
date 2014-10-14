window.onload = init;
divCount = 0;

function init(){
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}

function handleButtonClick(e){
	//alert("Button Has Been Clicked")
	divCount++;
	var div = document.createElement("newDiv");
	div.id = "newish";
	div.innerHTML= "This is div number " + divCount;
	div.style.backgroundColor= "red";
	document.body.appendChild(div);
}