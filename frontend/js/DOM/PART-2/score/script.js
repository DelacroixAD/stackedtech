var arr=[{team:'Chelsea',
    primary:'white',
    secondary:'blue',
},
{team:'PSG',
    primary:' Blue',
    secondary:'BLACK',
},
{team:'REAL MADRID',
    primary:'WHITE',
    secondary:'BLACK',
},{
    team:'FLUMINENSE',
    primary:'GREEN',
    secondary:'WHITE',
}]
    var btn=document.querySelector('button');
    var h1=document.querySelector('h1');
    function guessWinner(){
        var num=Math.floor(Math.random()*arr.length);
        var winner=arr[num];
        h1.innerHTML=winner.team;
        h1.style.color=winner.primary;
        h1.style.backgroundColor=winner.secondary;
}
btn.addEventListener('click',guessWinner);