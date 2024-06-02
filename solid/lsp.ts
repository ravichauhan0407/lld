// Liskov substitution principle

/*
bad examplw

interface TwoWheeler{
     maxSpeed:number
     turnOnEngine():void
}

class Bike implements TwoWheeler{
      maxSpeed: number
      turnOnEngine(): void {
        console.log('Engine has turned on')
      }
}

class Cycle implements TwoWheeler{
     maxSpeed: number
     turnOnEngine(): void {
         throw new Error('Cycle does not have engine')
     }
}


*/


// this is good way because


interface TwoWheeler{
  maxSpeed:number
}


interface EngineVeichle extends TwoWheeler{
  maxSpeed:number
  turnOnEngine():void
}





class Bike implements EngineVeichle{
   maxSpeed: number
   turnOnEngine(): void {
     console.log('Engine has turned on')
   }
}

class Cycle implements TwoWheeler{
  maxSpeed: number
}


// subclass always extends the capability of parent class not narrow down them  
// in previout case cycle  was narrow dowing the capabilty by not using turn on engine 

// more 

// if class B is a subclass of A then  if we replace object of  A with B then is should not break the behaviour of programme



class A {
     id:number
     constructor(id:number){
        this.id=id
     }
     getId(){
        return this.id;
     }
}

class B extends A{
      name:string 
      constructor(){
        super(1)
      }
      getId(){
          return this.id
      }   
}


let obj=new B()

let obj1=new A(3);

obj1=obj;

obj1.getId()

console.log(obj.getId())

