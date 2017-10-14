

function BgColor(){
    var color = new Array('#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857");
    var col = color[Math.floor(Math.random()*11)];

    var a=document.getElementById('author');
    var q=document.getElementById('quote');

    document.body.style.backgroundColor=col;
    a.style.color=col;
    q.style.color=col;
}
