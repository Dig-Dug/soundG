
const link = document.querySelector('a');
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
const text = document.createTextNode(' — the premier source for web development knowledge.');
const text1 = document.createElement('button', t());
const linkPara = document.querySelector('p');
linkPara.appendChild(text1);

function t(){
  var btn = document.createElement("button");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);
  
}
const div = document.querySelector('div');
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
div.style.width = winWidth + 'px';
div.style.height = winHeight + 'px';

window.onresize = function() {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    div.style.width = winWidth + 'px';
    div.style.height = winHeight + 'px';
  }