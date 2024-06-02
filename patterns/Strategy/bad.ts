class Vehicle{

    drive(){
        console.log('Normal Driving')
    }
}


/// for the both child same drive strategy is  duplicating 
class  SportsVehicle extends Vehicle{
  drive(){
    console.log('Fast Driving')
  }
}




class  RacingVehicle extends Vehicle{
  drive(){
    console.log('Fast Driving')
  }
}


export {}