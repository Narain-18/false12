class Form {
    constructor(){
this.input = createInput("Name");
this.button = createButton("Play");
this.greeting = createElement("h3");
    }

hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}

display(){

var title = createElement("H2");
title.html("Narain's Pro Car Racing Game");
title.position(130,0);
input.position(130,160);
button.position(250,200);

this.button.mousePressed(()=>{

    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount = playerCount + 1; 
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("Welcome To The Game  "  + player.name);   
    this.greeting.position(130,160);

    

})

}

}