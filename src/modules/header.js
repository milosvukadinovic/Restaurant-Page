import logo from "../pictures/logo.png";

const header = document.createElement("nav");
header.classList.add("navbarZ");

header.innerHTML = `
<img class='logo' src="${logo}">
<div class='divtitle'>
    <div class="options">
        |<span class="menu option">Menu</span>|
        <span class="about option">About Us</span>|
        <span class="contact option">Contact Us</span>|
    </div>
<h1 class='title'>Bon Appetit  </h1>
<div>
`;

export { header };