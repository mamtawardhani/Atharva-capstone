class ball{
    constructor(x,y){

        this.bo=Bo.circle(x,y,30,{restitution:0.2,density:2});
        Wo.add(wo,this.bo);
    }

    display(){
        var Angle=this.bo.angle;
        push();
        var pos=this.bo.position;
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        rotate(Angle)
     
        ellipse(0,0,30);
        pop();
    }
}