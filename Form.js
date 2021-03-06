class Form {

    constructor() {
      this.input = createInput("Name");
      //this.button = createButton('Play');
      this.greeting = createElement('Namaste');
    }
    hide(){
      this.greeting.hide();
      //this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('Namaste')
      title.html("Trex Running Game(Coloured Version)");
      title.position(displayWidth/2-15,0);
  
      this.input.position(displayWidth/2-40,displayHeight/2-80);
      this.button.position(displayWidth/2, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-70, displayHeight/4);
      });
  
    }
  }
  