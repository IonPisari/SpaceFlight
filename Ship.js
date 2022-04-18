class Ship extends HasCoordinate {
    constructor(missiles = [],x = 0.5,y = 0.9,speedX = 0,speedY = 0,damage = 0.0) {
        super(x, y, speedX, speedY)
        this.damage = damage
        this.missiles = missiles
        this.url = `images/ship.png`

        // let w = 128
        // let h = 127
        // let shipSum = w + h
    }

    render(ctx){
        //canvas

        this.visible && drawImage(ctx,this.x,this.y,this.url)

        this.missiles.forEach(missile => missile.render(ctx))
    }

    flyRight(){
        this.x += 0.05
    }
    flyLeft(){
        this.x -= 0.05 
    }

    fire(){
        let missile = this.missiles.pop()
        missile.visible = true
        return missile
    }
}