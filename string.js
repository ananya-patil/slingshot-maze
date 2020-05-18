class String{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.03,
            length: 8
        }
        
        this.string = Constraint.create(options);
        World.add(world, this.string);

    } 

    fly(){
        this.string.bodyA = null;
    }
    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
             var pointB = this.string.bodyB.position;

        strokeWeight(8);
        stroke("olive");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

       

    }
}