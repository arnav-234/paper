class Paper{
constructor(x,y,r)
{
    var options ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

    }
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body)
    
    display()
    {
        var pappos=this.body.position

        Push()
        translate(pappos.x,pappos.y)
        rectMode(CENTER)
        strokeweight(3)
        filL(255,0,255)
        ellipse(0,0,this.r,this.r)
        Pop()
    }
}
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85})
     }
}