const A = document.getElementById('97')
const B = document.getElementById('98')
const C = document.getElementById('99')
const D = document.getElementById('100')
const E = document.getElementById('101')
const F = document.getElementById('102')
const G = document.getElementById('103')
const H = document.getElementById('104')
const I = document.getElementById('105')
const J = document.getElementById('106')
const K = document.getElementById('107')
const L = document.getElementById('108')
const M = document.getElementById('109')
const N = document.getElementById('110')
const O = document.getElementById('111')
const P = document.getElementById('112')
const Q = document.getElementById('113')
const R = document.getElementById('114')
const S = document.getElementById('115')
const T = document.getElementById('116')
const U = document.getElementById('117')
const V = document.getElementById('118')
const W = document.getElementById('119')
const X = document.getElementById('120')
const Y = document.getElementById('121')
const Z = document.getElementById('122')


// niz
let random = document.getElementById('random')
let start = document.getElementById('pocetakIgre')
let slovo = document.getElementById('slovo')
let stop = document.getElementById('stop')
let niz = [];

/// skorovi

let hit = document.getElementById('hit')
let miss = document.getElementById('miss')
let left = document.getElementById('left')

//skorovi varijable

let missScore =0
let hitScore = 0
let leftScore = 26

 // kreiranje niza 

function kreiranjeNiza(){

 
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
}


let redniBroj = 0;
function ispisBroja() {
    
    console.log(redniBroj)
    console.log(niz[redniBroj])
    if (redniBroj == 0 ) {
        
    }
    random.innerHTML = niz[redniBroj];
    
    switch (niz[redniBroj+1]){
        case 1 : 
        A.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 2 : 
        B.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 3 : 
        C.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 4 : 
        D.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 5 : 
        E.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 6 : 
        F.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 7 : 
        G.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 8 : 
        H.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 9 : 
        I.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 10 : 
        J.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 11 : 
        K.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 12 : 
        L.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 13 : 
        M.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 14 : 
        N.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 15 : 
        O.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 16 : 
        P.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 17 : 
        Q.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 18 : 
        R.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 19 : 
        S.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 20 : 
        T.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 21 : 
        U.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 22 : 
        V.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 23 : 
        W.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 24 : 
        X.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;
        case 25 : 
        Y.classList.add("crveno");
        missScore++
        miss.innerHTML = missScore
        leftScore--
        left.innerHTML = leftScore
        break ;

        case 26 : 
       Z.classList.add("crveno");
       missScore++
       miss.innerHTML = missScore
       leftScore--
       left.innerHTML = leftScore
        break ;


        

    }
    redniBroj++

    

}



document.writeln(niz);

start.addEventListener ('click', function (){
          kreiranjeNiza() // poziv niza
          console.log(niz);
          

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
    if (pritisnutKljuc == niz[redniBroj-1]+96) {
        console.log ('pogodak')
        switch (niz[redniBroj-1]){
            case 1 : 
            A.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 2 : 
            B.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 3 : 
            C.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 4 : 
            D.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 5 : 
            E.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 6 : 
            F.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 7 : 
            G.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 8 : 
            H.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 9 : 
            I.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 10 : 
            J.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 11 : 
            K.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 12 : 
            L.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 13 : 
            M.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 14 : 
            N.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 15 : 
            O.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 16 : 
            P.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 17 : 
            Q.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 18 : 
            R.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 19 : 
            S.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 20 : 
            T.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 21 : 
            U.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 22 : 
            V.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 23 : 
            W.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 24 : 
            X.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
            case 25 : 
            Y.classList.add("zeleno");
            hitScore++
            hit.innerHTML =hitScore
            leftScore--
            left.innerHTML = leftScore
            break ;
    
            case 26 : 
           Z.classList.add("zeleno");
           hitScore++
            hit.innerHTML =hitScore
           leftScore--
           left.innerHTML = leftScore
            break ;
    
    
            
    
        }
        redniBroj++
    }
    console.log(pritisnutKljuc)
    return pritisnutKljuc;
    
 }
 
 function reset (){
    document.getElementById("easy").disabled = false;
    document.getElementById("medium").disabled = false;
    document.getElementById("hard").disabled = false;
    resetPolja()
    start.style.display = "block";
        stop.style.display = "none";
        niz = [];
         missScore = 0
         hitScore = 0
        leftScore = 26
        random.innerHTML = 0;

        miss.innerHTML = missScore
        hit.innerHTML = hitScore
        left.innerHTML = leftScore


 }
 

  function resetPolja() {
      for ( let i = 97 ; i<123 ; i++) {
          document.getElementById (`${i}`).classList.remove("crveno")
          document.getElementById (`${i}`).classList.remove("zeleno")
      }
  }
  

  
  


 


