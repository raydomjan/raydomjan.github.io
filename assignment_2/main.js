const mainpic = document.querySelector('.displayed-img');
const bar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const shade = document.querySelector('.shade');



function picloop() {

for(let i = 0; i <25; i++){
    var x = "images/pic" + i + "jpg";
    const newImage = document.createElement('full-img');
    newImage.setAttribute('src', x);
    bar.appendChild(newImage);

    
}
}

picloop();



bar.addEventListener('click', (x) => {
    if(x.target && x.target.nodeName == "IMG") {
      mainpic.src = x.target.src;
  }
})





btn.onclick = function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        shade.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        shade.style.backgroundColor ='rgba(0,0,0,0)'
    }
}
