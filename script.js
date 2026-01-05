// change greeting when button is clicked
function sayHello(){
    let name = document.getElementById("nameInput").value;
    if(name.trim() !== ""){
        document.getElementById("greeting").innerText = "Hello, " + name;
    }
}

// box color change events
document.getElementById("redBox").onclick = function(){
    this.style.backgroundColor = "red";
}

document.getElementById("blueBox").onclick = function(){
    this.style.backgroundColor = "blue";
}

document.getElementById("greenBox").onclick = function(){
    this.style.backgroundColor = "green";
}

document.getElementById("yellowBox").onclick = function(){
    this.style.backgroundColor = "yellow";
}
