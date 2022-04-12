let screen = document.querySelector('#screen')
let ctx = screen.getContext('2d')
// HW1
let adjustCanvasSize = () => {
    let w = window.innerWidth 
    let h = window.innerHeight
    screen.width = w
    screen.height = h
    return [w, h]
}
let canvasSize = adjustCanvasSize()
let w = canvasSize[0]
let h = canvasSize[1]

// HW2
let shipWidth = 128
let shipHeight = 127
let shipSum = shipWidth + shipHeight

let drawImage = (source,calcX,calcY) => {
    let imgObject = new Image()
    imgObject.onload = () => {
        ctx.clearRect(0,0,w-shipWidth,h-shipHeight)
        ctx.drawImage(imgObject,calcX,calcY)
    } 
    imgObject.src = `images/${source}.png`
}
drawImage(`ship`, w/2-shipWidth/2, h-shipHeight)
// HW 3 & 4
let missileY = h-shipSum
let missileX = 25
let explosionY = 400
let explosionX = 400
document.body.onkeydown = (e) => {
    if(e.code === 'Space'){
        setInterval(() => {
            if( missileY > 0){
                drawImage(`missile`, w/2-missileX/2,missileY)
                missileY -= 5
            }else{
                    drawImage(`explosion`,w/2-explosionX/2,explosionY-500)
            }
        },20)
    }
    
}

