(()=>{"use strict";function e(e,t){const n=document.createElement("div");n.classList.add("menuCard");const i=document.createElement("h2");i.textContent=e;const d=document.createElement("p");return d.textContent=t,n.appendChild(i),n.appendChild(d),n}const t=function(){const t=document.getElementById("body");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","menu"),t.innerHTML="\n        <h1>Menu</h1>\n    ";const n=document.createElement("div");return n.classList.add("menuCards"),t.appendChild(n),n.appendChild(e("Pineapple Pizza","This pineapple pizza brings the finest pineapple to the table!")),n.appendChild(e("Cheese Pizza","Looking for the most cheesiest pizza in the land? We got it right here!")),n.appendChild(e("Pepperoni Pizza","We supply the most fresh pepperoni with each carefully individually placed!")),n.appendChild(e("Ultimate Pizza","The ultimate pizza is the most delicious and scrumptious pizza you will ever taste!")),n.appendChild(e("Extra Cheesy Alfredo Pizza","If you like alfredo and extra cheese this is the pizza for you!")),n.appendChild(e("Create Your Own Pizza","If you want a delicious customizable pizza than this is the option for you!")),t}())},n=function(){const e=document.getElementById("body");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","home"),e.innerHTML="<h1>Crusty Pizza</h1>\n    <h2>Order with us now!</h2>\n    <p>Pizza gets you movin'</p>\n    ";const n=document.createElement("button");return n.innerText="Order Now",n.addEventListener("click",(e=>{t()})),e.appendChild(n),e}())},i=document.getElementById("content");i.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const i=document.createElement("div");i.classList.add("logo");const d=document.createElement("h1");d.innerText="Crusty Pizza";const a=document.createElement("img");return a.src="images/pizza-img.png",a.alt="Pizza",i.appendChild(a),i.appendChild(d),e.appendChild(i),e.appendChild(function(){const e=document.createElement("nav"),i=document.createElement("button");i.classList.add("btn"),i.textContent="Home",i.addEventListener("click",(e=>{n()}));const d=document.createElement("button");d.classList.add("btn"),d.textContent="Menu",d.addEventListener("click",(e=>{t()}));const a=document.createElement("button");return a.classList.add("btn"),a.textContent="About",a.addEventListener("click",(e=>{!function(){const e=document.getElementById("body");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","about"),e.innerHTML="\n        <h1>About</h1>\n        <p>Crusty Pizza motives are always to create the most delicious pizzas.\n        We strive on 100% customer satisfaction and service. 9/10 pizza chefs recommend Crusty Pizza.</p>\n    ",e}())}()})),e.appendChild(i),e.appendChild(d),e.appendChild(a),e}()),e}()),i.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","body"),e}()),n()})();