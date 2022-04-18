class Rock extends HasCoordinate {
    constructor(x,y,speedX,speedY){
        super(x || randCoord(),y || randCoord(), speedX, speedY)
        this.url = `images/rock.png`
    }

    render(ctx){
        //canvas
        this.visible && drawImage(ctx,this.x,this.y,this.url)
        
    }
}