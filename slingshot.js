class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.4
        }
        this.Sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.Sling) ;
    }

     fly(){
        this.Sling.bodyA=null
     }
        
    
    display(){
        if(this.Sling.bodyA){
            var pointA=this.Sling.bodyA.position
            var pointB=this.pointB
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
       
    }
}