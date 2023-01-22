function gridCreate() {
    var tl = new TimelineMax({repeat: -1});
    tl.to($('#moving_grid'), 1, {"backgroundPositionY": "-=5rem", ease: Linear.easeNone});
}

function mountainMove() {

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

   setInterval(() => {
    for (let i = 0; i < document.getElementsByClassName("cls-1")[0].points.length; i++) {
        if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11 || i == 13) {
            document.getElementsByClassName("cls-1")[0].points[i].y += randomIntFromInterval(-2,2) 
            //console.log(i, document.getElementsByClassName("cls-1")[0].points[i].y)
        }
    
   }
   }, 200);


   



}

function sunDown(){
    var tl2 = new TimelineMax();
    tl2.to($('#sun'), 50, {"bottom": "-=2rem", ease: Power2.easeOut});
}

gridCreate();
sunDown();
mountainMove();
