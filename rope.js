class rope{
    constructor(p1,b2){
        var opp={
            pointA:p1,
            bodyB:b2,
            length:60,
            stiffness:0.4
        }
        this.ro=Matter.Constraint.create(opp);
        Wo.add(wo,this.ro);

        this.p=p1

    }
    display(){
        if(this.ro.bodyB ){

            var pos=this.ro.bodyB.position;
            line(this.p.x,this.p.y,pos.x,pos.y)

        }

    }

    fly(){
        this.ro.bodyB=null

    }
}


