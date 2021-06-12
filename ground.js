class gro{
    constructor(x,y,width,height){

        this.go=Bo.rectangle(x,y,width,height,{isStatic:true});
        Wo.add(wo,this.go);

        this.w=width
        this.h=height
    }

    display(){
        rectMode(CENTER);
        var pos=this.go.position;
        rect(pos.x,pos.y,this.w,this.h);
    }
}