//  prototye pattern is used when u need to clone object many time 

interface StudentPrototype{ 
     clone():this
}


class Student implements StudentPrototype{
   
     constructor(public name:string,public age:number){

     }
     
     clone(){
       return JSON.parse(JSON.stringify(this)); 
     }
}

const student1=new Student('Ravi',23)

const student2= student1.clone()

console.log(student2.age)