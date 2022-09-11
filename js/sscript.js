img = document.querySelectorAll('.default');
choix = document.querySelectorAll('.option');
/*ito xD */
bImg = ["url('./image/slide.PNG')","url('./image/svg/slide_rec.svg')"  ,"url('./image/slide3.png')"];
/*ioto xD*/
dot = document.querySelectorAll(".pt");
var x;
var v;
var wiidth;
var test2;

//width selon screen xD !!!
function verif(test2){
    if(test2<700){
        wiidth=295;
    }
    else if(test2<=1920 && test2> 1580){
      wiidth= 398;
     
    }
    else if(test2<=1565 &&  test2> 1424){ //1565
      wiidth= 380;
      console.log('first')
    }
    else if(test2<=1424 &&  test2> 1350){ //1565
      wiidth= 355;
      console.log('first')
    }
    else if(test2<=1350 &&  test2> 1305){ //1565
      wiidth= 345;
      console.log('first')
    }
    else if(test2<=1300 &&  test2> 1290){ //1565
      wiidth= 325;
      console.log('first')
    }
    else if(test2<1290){ //1565
      wiidth= 320;
      console.log('first')
    }
}

choix[1].classList.add("activexD");
/*ito xD */
dot[1].classList.add("activeP");

function resetA(){
    for(var i = 0 ; i<img.length;i++){
        choix[i].classList.remove("activexD");  
        dot[i].classList.remove("activeP");   
         
    }
}

for(var i=0 ; i<img.length ; i++){
    img[i].style.zIndex=""+(i)+"";
    img[i].style.backgroundImage=bImg[i];
}
x=img.length;
img[1].style.zIndex=""+x+"";
wiidth=img[1].offsetWidth;

function reset(v){
    for(var i=0 ; i<img.length;i++){
        if(i!=v){
            console.log( wiidth);
            img[i].style.animation="reverseX 0.01s ease-in-out 0.5s forwards";
        }
    }
}
    

        choix[0].addEventListener("click", function(){
            test2 =window.innerWidth;
            //test écran
            verif(test2);
            x+=1;
            resetA();
            img[0].style.zIndex=""+x+"";
            img[0].style.width="0px";
            choix[0].classList.add("activexD");
            img[0].style.animation="affichePerso 0.4s ease-in-out forwards";
            reset(0)
            img[1].style.width=""+wiidth+"px";
            img[2].style.width=""+wiidth+"px";

            dot[0].classList.add("activeP");

        })

        choix[1].addEventListener("click", function(){
             //test écran
             test2 =window.innerWidth;

             verif(test2);
            x+=1;
            resetA();
            img[1].style.zIndex=""+x+"";
            img[1].style.width="0px";
            choix[1].classList.add("activexD");
            img[1].style.animation="affichePerso 0.4s ease-in-out forwards";
            reset(1)
            img[0].style.width=""+wiidth+"px";
            img[2].style.width=""+wiidth+"px";

            dot[1].classList.add("activeP");
        })

        choix[2].addEventListener("click", function(){
             //test écran
              test2 =window.innerWidth;
              verif(test2);
             console.log(test2);
            x+=1;
            resetA();
            img[2].style.zIndex=""+x+"";
            img[2].style.width="0px";
            choix[2].classList.add("activexD");
            img[2].style.animation="affichePerso 0.4s ease-in-out forwards";
            reset(2)
            img[1].style.width=""+wiidth+"px";
            img[0].style.width=""+wiidth+"px";
            dot[2].classList.add("activeP");
        })


        /*Eto xD */

        dot[0].addEventListener("click", function(){
            test2 =window.innerWidth;
            //test écran
            verif(test2);
            x+=1;
            resetA();
            img[0].style.zIndex=""+x+"";
            img[0].style.width="0px";
            choix[0].classList.add("activexD");
            img[0].style.animation="affichePerso 0.4s ease-in-out forwards";
            reset(0)
            img[1].style.width=""+wiidth+"px";
            img[2].style.width=""+wiidth+"px";

            dot[0].classList.add("activeP");

        })

        dot[1].addEventListener("click", function(){
             //test écran
             test2 =window.innerWidth;

             verif(test2);
            x+=1;
            resetA();
            img[1].style.zIndex=""+x+"";
            img[1].style.width="0px";
            choix[1].classList.add("activexD");
            img[1].style.animation="affichePerso 0.4s ease-in-out forwards";
            reset(1)
            img[0].style.width=""+wiidth+"px";
            img[2].style.width=""+wiidth+"px";

            dot[1].classList.add("activeP");
        })

        dot[2].addEventListener("click", function(){
             //test écran
              test2 =window.innerWidth;
              verif(test2);
             console.log(test2);
            x+=1;
            resetA();
            img[2].style.zIndex=""+x+"";
            img[2].style.width="0px";
            choix[2].classList.add("activexD");
            img[2].style.animation="affichePerso 0.4s ease-in-out forwards";
            reset(2)
            img[1].style.width=""+wiidth+"px";
            img[0].style.width=""+wiidth+"px";
            dot[2].classList.add("activeP");
        })



/*Partie api observer xD */

var observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){
        if(entry.intersectionRatio>0.5){
            //animation visible xD
            entry.target.classList.add("reveal-active");
            console.log("visible xD");
            observer.unobserve(entry.target)
        }else{
            //animation invisible xD
            console.log("invisible xD");
        }
    })

    console.log(entries);
},{
    threshold:[0.5]
})

/* application sur u ou plusieurs elements suivant leurs classes xD*/
var items = document.querySelectorAll(".reveal");
    items.forEach(function(item){
    observer.observe(item);
})
/*fin api observer xD */
