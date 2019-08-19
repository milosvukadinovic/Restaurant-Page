import big from '../pictures/big.jpg';
import medium from '../pictures/medium.jpg';
import steak from '../pictures/steak.jpg';
import vegan from '../pictures/vegan.jpg';

const menu = document.createElement('div');
menu.classList.add('optionsMenu');

menu.innerHTML = `
<div class="row">
  <div class="col-sm">
    <div class="foodZ"><span>Steak 5$</span>
    <br><img class="food" src="${steak}"></div>
    <div class="foodZ"><span>Vegan 5$</span>
    <br><img class="food" src="${vegan}"></div>
  </div>
  <div class="col-sm">
  <div class="foodZ"><span>Medium 4$</span>
  <br><img class="food" src="${medium}"></div>
  <div class="foodZ"><span>Big 7$</span>
  <br><img class="food" src="${big}"> </div>
  </div>
</div>
<br><br>
  


`;

export {menu};
