class Game {

    constructor(){
    
    }
    
    getState(){

var getStateref = database.ref("gameState");
getStateref.on("value" , function (data) {
getState = data.val();
} )

}

update(state){
    database.ref("/").update({
        gameState:state
    })
}

start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();

    }
}

play (){
    form.hide();
    text("Ready To Start" , 120,100);
    player.getPlayerInfo();
    if(allPlayers !== undefined){
        var display_Position = 120 ;
        for(var plr in allPlayers){
            if(plr === "player" + player.index){
                fill("aqua");
            }
            else{
                fill("black");
            }
        } 
        display_Position = display_Position + 30;
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance , 120,display_Position);

    }
}

if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance = player.distance + 5;
    player.update();

}
}
}