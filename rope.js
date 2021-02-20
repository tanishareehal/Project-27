class Rope
{
    constructor(Body1, Body2, offsetX, offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:Body1, 
            bodyB:Body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        this.rope=Constraint.create(options)
        World.add(world, this.rope);
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.Rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y=this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    };

}