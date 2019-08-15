import logo from "../pictures/logo.png";
import big from "../pictures/big.jpg";
import medium from "../pictures/medium.jpg";
import steak from "../pictures/steak.jpg";
import vegan from "../pictures/vegan.jpg";

const menu = document.createElement("div");
menu.classList.add("optionsMenu");

menu.innerHTML = `
<div class="row">
  <div class="col-sm">
   <span>Steak 5$</span> <div class="foodZ"><img class="food" src="${steak}"></div>
    <div class="foodZ"><img class="food" src="${vegan}"> <span>Vegan 6$</span></div>
  </div>
  <div class="col-sm">
  <span>Medium 4$</span><div class="foodZ"><img class="food" src="${medium}"></div>
  <div class="foodZ"><img class="food" src="${big}"> <span>Big 7$</span></div>
  </div>
</div>
<br><br>
  


`;

export { menu };