const A = document.getElementById('a')
const B = document.getElementById('b')
const C = document.getElementById('c')
const D = document.getElementById('d')
const E = document.getElementById('e')
const F = document.getElementById('f')
const G = document.getElementById('g')
const H = document.getElementById('h')
const I = document.getElementById('i')
const J = document.getElementById('j')
const K = document.getElementById('k')
const L = document.getElementById('l')
const M = document.getElementById('m')
const N = document.getElementById('n')
const O = document.getElementById('o')
const P = document.getElementById('p')
const Q = document.getElementById('q')
const R = document.getElementById('r')
const S = document.getElementById('s')
const T = document.getElementById('t')
const U = document.getElementById('u')
const V = document.getElementById('v')
const W = document.getElementById('w')
const X = document.getElementById('x')
const Y = document.getElementById('y')
const Z = document.getElementById('z')


// niz
let random = document.getElementById('random')
let start = document.getElementById('pocetakIgre')
let slovo = document.getElementById('slovo')
let stop = document.getElementById('stop')
let niz = [];
 // kreiranje niza 



 
for (let i = 0; i < 26; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * 26) + 1;

    for (var y = 0; y < 26; y++) {
        if (niz[y] == randomNumber) {
            add = false; //provera da li se ponavljaju brojevi

        }
    }
    if (add) {
        niz.push(randomNumber)
    } else {
        i--;
    }

}


let redniBroj = 1;
function ispisBroja() {
    
    // if (redniBroj == 26) {
    //     redniBroj = 0
    // }
    // var DugmePritsnuto = nekiEvent()
    // console.log ('iz eventa' + pritisnutKljuc)

    // samo provera
    // if (pritisnutKljuc == niz[redniBroj-1] + 96 ) {
    // }
    // ispisiNiz();
    console.log(redniBroj)
    console.log(niz[redniBroj-1])
    random.innerHTML = niz[redniBroj];
    switch (niz[redniBroj-1]){
        case 1 : 
        A.classList.add("zeleno");
        break ;
        case 2 : 
        B.classList.add("zeleno");
        break ;
        case 3 : 
        C.classList.add("zeleno");
        break ;
        case 4 : 
        D.classList.add("zeleno");
        break ;
        case 5 : 
        E.classList.add("zeleno");
        break ;
        case 6 : 
        F.classList.add("zeleno");
        break ;
        case 7 : 
        G.classList.add("zeleno");
        break ;
        case 8 : 
        H.classList.add("zeleno");
        break ;
        case 9 : 
        I.classList.add("zeleno");
        break ;
        case 10 : 
        J.classList.add("zeleno");
        break ;
        case 11 : 
        K.classList.add("zeleno");
        break ;
        case 12 : 
        L.classList.add("zeleno");
        break ;
        case 13 : 
        M.classList.add("zeleno");
        break ;
        case 14 : 
        N.classList.add("zeleno");
        break ;
        case 15 : 
        O.classList.add("zeleno");
        break ;
        case 16 : 
        P.classList.add("zeleno");
        break ;
        case 17 : 
        Q.classList.add("zeleno");
        break ;
        case 18 : 
        R.classList.add("zeleno");
        break ;
        case 19 : 
        S.classList.add("zeleno");
        break ;
        case 20 : 
        T.classList.add("zeleno");
        break ;
        case 21 : 
        U.classList.add("zeleno");
        break ;
        case 22 : 
        V.classList.add("zeleno");
        break ;
        case 23 : 
        W.classList.add("zeleno");
        break ;
        case 24 : 
        X.classList.add("zeleno");
        break ;
        case 25 : 
        Y.classList.add("zeleno");
        break ;

        case 26 : 
       Z.classList.add("zeleno");
        break ;


        

    }
    redniBroj++

    

}



document.writeln(niz);

start.addEventListener ('click', function (){

     // vremenski period
        if ( document.getElementById('easy').checked) {
            setInterval(ispisBroja, 5000);
        } else if (document.getElementById('medium').checked) {
            setInterval(ispisBroja, 3000);
        } else {
            setInterval(ispisBroja, 2000);
        }
        // checboxovi
        document.getElementById("easy").disabled = true;
        document.getElementById("medium").disabled = true;
        document.getElementById("hard").disabled = true;
        start.style.display = "none";
        stop.style.display = "block";


})
 var trentniKljuc


 function nekiEvent (){
    function uniKeyCode(event) {
        var key = event.which;
        document.getElementById("demo2").innerHTML = "Unicode KEY code: " + key;
        return key;
        

 }

    var pritisnutKljuc = uniKeyCode(event) ;
    console.log(pritisnutKljuc)
    return pritisnutKljuc;
    
 }
 
 function reset (){
    document.getElementById("easy").disabled = false;
    document.getElementById("medium").disabled = false;
    document.getElementById("hard").disabled = false;
    start.style.display = "block";
        stop.style.display = "none";
        niz = [];

 }
 

  
  

  
  


 


