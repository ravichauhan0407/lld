
interface DriveStrategy{
     drive():void
}


class  NormalDriving implements DriveStrategy{
  drive(){
    console.log('Normal Driving')
}
}

class FastDriving implements DriveStrategy{
  drive(){
    console.log('Fast Driving')
  }
}

class Vehicle{
  driveStrategy:DriveStrategy
  constructor(driveStrategy:DriveStrategy){
      this.driveStrategy=driveStrategy
  }

  drive(){
      this.driveStrategy.drive();
  }
}


/// for the both child same drive strategy is  duplicating  so
// in this case we make another interface and define different class for those duplicating code 
class  SportsVehicle extends Vehicle{
    constructor(driveStrategy:DriveStrategy){
       super(driveStrategy)
    }
}

class  RacingVehicle extends Vehicle{
  constructor(driveStrategy:DriveStrategy){
    super(driveStrategy)
 }
}

const v1=new RacingVehicle(new FastDriving());

v1.drive();


export {}

