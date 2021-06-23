class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play")
        this.greeting = createElement('h2');
        this.title = createElement('h2');

        }
            display(){
                this.title.html("Hunger Chase");
                this.title.position(displayWidth/2 - 20, 0);
                this.title.style("color","brown")
                this.title.style("font-size","70px")
                this.input.position(displayWidth/2 + 30 , displayHeight/2 - 80);
                this.input.style("width","200px")
                this.input.style("height","30px")
                this.button.position(displayWidth/2 + 30, displayHeight/2);
                this.button.style("background","blue")
                this.button.style("border-radius","30px")
                this.button.style("width","200px")
                this.button.style("height","50px")

                this.button.mousePressed(()=>{
                    this.input.hide();
                    this.button.hide();
                    player.name = this.input.value();
                    playerCount+=1;
                    player.index = playerCount;
                    player.update();
                    player.updateCount(playerCount);
                    this.greeting.html("Hello " + player.name)
                    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
                  });
        }
        
    }
