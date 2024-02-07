window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
    alert("Added "+ songName);
    
    
}

//Functions will  
//1.Get your element into terms JS can understand by getting the element by ID. Stick it into a variable and it becomes what I believe to be an object whose properties (such as value, in this case the text currently typed into it) can be accessed via the dot (.) operator.
//2. Make sure you're getting the value of the right element, otherwise you'll be trying to get the value of a button, like I did.
//3. Make sure all your function names are capitalized (or not, in this case) properly. It's "Id", not "ID".
//4. Do not add parentheses to a conditional function call, or else it seems the function will be called regardless as if it weren't preceded by a condition upon which to call the function.
//Remember <document> is the root of the HTML tree.

//Get the element onto JS's turf:            .getElementById
//Get the element's value onto JS's turf :   .value
//Create an element on JS's turf:            .createElement("element name")
//Fill it with text on JS's turf:            .innerHTML