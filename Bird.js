class Bird extends BaseClass{
    constructor(x,y){ //properties
        super(x,y,50,50)
        this.image = loadImage("sprites/bird.png")
    }

    //functions
    display(){
        //nickname
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        super.display()
    }
}