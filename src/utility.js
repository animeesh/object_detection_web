export const drawRect = (detections,ctx)=>{
    detections.forEach(predictions=>{
        //get prediction result
        const [x,y,width,height] = predictions['bbox'];
        const text = predictions['class'];


        // set styling
        const color ="green"
        ctx.strokeStyle = color
        ctx.font = "18px Arial"
        ctx.fillStyle = color


        //Draw Rectangles
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()

    })

}