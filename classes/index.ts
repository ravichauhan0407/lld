  class User{
      email:string
      name:string
      readonly city:string
      constructor(email:string,name:string){
           this.email=email
           this.name=name
           this.city='Ghaziabad';
      }
  }


  const me:User =new User('ravi@gmail.com','Ravi')

  me.email='ravi';
  // me.city='hello';  it is read only so we can't do like that
  console.log(me.city)



  export {};