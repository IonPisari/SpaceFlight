class Game {
    constructor(space = null) {
        //TOM
        this.space = space

        let screen = document.querySelector('#screen')
        this.ctx = screen.getContext('2d')

        let adjustCanvasSize = () => {
            let w = window.innerWidth 
            let h = window.innerHeight
            screen.width = w
            screen.height = h
            return [w, h]
        }
        let canvasSize = adjustCanvasSize()
        this.w = canvasSize[0]
        this.h = canvasSize[1]
    }

    render(){
        this.space.render(this.ctx)

        this.ctx.clearRect(0,0,this.w,this.h)
    }

    start(){
        document.body.addEventListener('keydown',this.action.bind(this))
        this.render()
    }

    action(e){
        switch(e.code){
            case "ArrowLeft" :
                this.space.ship.flyLeft()
                break;
            case "ArrowRight":
                this.space.ship.flyRight()
                break;
            case "Space" :
                let missile = this.space.ship.fire()
                this.space.missiles.push(missile)
                break;
        }
         this.render()

    }




    // action(e){
    //     // console.log(e);
    //     //hw1 use switch in loc de if
    //     if(e.code === "ArrowRight") {
    //         this.space.ship.flyRight()
    //     }
    //     if(e.code === "ArrowLeft"){
    //         this.space.ship.flyLeft()
    //     }
    //     if(e.code === "Space"){
    //         this.space.ship.fire()
    //     }

    //     this.render()
    // }
}