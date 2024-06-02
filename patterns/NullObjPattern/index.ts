interface Shape{
  draw():void
}

class Circle implements Shape{
   draw(){
        console.log('Circle is Drawing')
   }
}

class Rectangle implements Shape{
  draw(): void {
   console.log('Rectangle is Drawing')
  }
}


// it is callNullObjPattern 
class NullShape implements Shape{
 draw(): void {
   
 }
}


class ShapeFactory{
   
    getShape(input:string):(Shape){
        switch (input){
         case 'CIRCLE':
            return new Circle();
         case 'RECTANGLE':
           return new Rectangle();
         default: 
           return new NullShape()
        }
    }
}

export {}