import logo from "../pictures/logo.png";

const header = document.createElement("div");
header.classList.add("navbarZ");

header.innerHTML = `
<img class='logo' src="${logo}">
<div class='divtitle'>
    <div class="options">
        |<span id="menu" class="menu option">Menu</span>|
        <span id="about" class="about option">About Us</span>|
        <span id="contact" class="contact option">Contact Us</span>|
    </div>
<h1 class='title'>Bon Appetit  </h1>
<div>
`;

export { header };