var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods

//I want to use JavaScript to create an ordered list of my favorite foods on my webpage.
li1.appendChild(document.createTextNode("Pizza"));
li2.appendChild(document.createTextNode("Tacos"));
li3.appendChild(document.createTextNode("Ice Cream"));
li4.appendChild(document.createTextNode("Sushi"));

//I want an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

//I want the ordered list has a background color of `#333333` and padding of `20px`.
listEl.setAttribute("style", "background-color:#333333; padding:20px;");

//I want each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.
li1.setAttribute("style", "color:white; padding:5px; margin-left:35px;");

//I want each list item has a different background color.
li2.setAttribute("style", "color:white; padding:5px; margin-left:35px; background-color:blue;");
li3.setAttribute("style", "color:white; padding:5px; margin-left:35px; background-color:red;");
li4.setAttribute("style", "color:white; padding:5px; margin-left:35px; background-color:purple;");



