/*

Dependency inversion principle 

class should depend on interfaces rather than concrete class

*/

// example 



interface Mouse{
    isWorking:boolean
}

interface Keyboard{
}

class WiredMouse implements Mouse{
  isWorking:boolean

}

class BluetoothMouse implements Mouse{
  isWorking:boolean

}


class WiredKeyboard implements Keyboard{
     
}

class BluetoothKeyboard implements Keyboard{
    
}

// bad implementation because  let say we will have to change mouse type then we can't because
// macbook class depend upon concrete class bluetooth mouse   
class Macbook{
      
      constructor(private mouse:BluetoothMouse,private keyboard:BluetoothKeyboard){

      }
}

// good example 
class Macbook1{
      
  constructor(public mouse:Mouse,public keyboard:Keyboard){

  }
}

const macbook= new Macbook1(new BluetoothMouse(),new BluetoothKeyboard());


macbook.mouse.isWorking