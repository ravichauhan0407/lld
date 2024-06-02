// Single Responsibility Principle


/*
bad example because email can be defined as separate class  
class User{
     name:string
     email:string
     constructor(name:string,email:string){
       this.name=name;
       this.email=email;
     }   

     isValidEmail(){
         return this.email.includes('@');
     }
}


const user=new User('ravi','ravichauhan@gmail.com');
*/



//  better example separated email class which will handle all email realted  validation and calculation
class Email{
     email:string
     constructor(email:string){
      this.email=email;
     }

  isValidEmail(){
    return this.email.includes('@');
  }
}



class User{
  name:string
  email:Email
  constructor(name:string,email:Email){
    this.name=name;
    this.email=email;
  }   
}

const email=new Email('ravichauhan@gmail.com') 

const user=new User('ravi',email);

console.log(email.isValidEmail());

