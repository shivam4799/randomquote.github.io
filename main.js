var val=[
{quote:"Belive in your dreams and that anything is possible.",
author:"usain bolt"
},{quote:"Time goes on. So whatever you're going to do,do it.Do it now.Don't wait.",
author:"carol Burnett"
},{quote:"People who are crazy enough to think they can change the world,are the ones who do.",
        author:"Rob siltanen"
},{quote:"Don't give up. Great things take time.",
        author:"Anonymous"
},{quote:"Remember. It's just a bad day.Not a bad life.",
        author:"Anonymous"
},{quote:"Never stop learning, because life never stops teaching.",
        author:"anonymous"
},{quote:"Only i can change my life.No one can do it for me.",
        author:"carol Burnett"

},{quote:"Don't make excuses,maek improvements.",
        author:"tyra Banks"
},{quote:"If you want to increase your success rate,double your failure rate.",
        author:"Thomas J. Watson"
},{quote:"Foucus on where you want to go,not on what you fear.",
        author:"Tony Robbins"
}]

function randomQuote(){
    return Math.floor(Math.random()*10);
}

function changeText(){
    var value=val[randomQuote()];

    var a=document.getElementById('author');
    a.innerHTML = value.author;

    var q=document.getElementById('quote');
    q.innerHTML = '" '+value.quote;
}

function BgColor(){
    var color = new Array('#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857");
    var col = color[Math.floor(Math.random()*11)];

    var a=document.getElementById('author');
    var q=document.getElementById('quote');

    document.body.style.backgroundColor=col;
    a.style.color=col;
    q.style.color=col;
}
