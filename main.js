function gridCreate() {
    var tl = new TimelineMax({repeat: -1});
    tl.to($('#moving_grid'), 1, {"backgroundPositionY": "-=5rem", ease: Linear.easeNone});
}

function mountainCreate() {
    amount = 5
    for (let i = 0; i < amount; i++) {
        mountain = $(".mountain");
        var xmlns = "http://www.w3.org/2000/svg";
        var svg = mountain.createElementNS(xmlns, "svg");
        var polygon = mountain.createElementNS(xmlns, "polygon");
        polygon.setAttributeNS("points", "points","0 150, 150 15, 300 150")
        polygon.setAttributeNS("fill", "fill","rgb(55,34,89)")
    }
}

function sunDown(){
    var tl2 = new TimelineMax();
    tl2.to($('#sun'), 50, {"bottom": "-=2rem", ease: Power2.easeOut});
}

gridCreate();
sunDown();
//mountainCreate();
