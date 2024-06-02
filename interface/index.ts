



interface User{
     name:String,
     email?:String,
}




function fun(user:User){
    console.log(user.name,user.email)
}

// gneric fucntion 

function fun1<T>(val:T){
    let val1:T;
}

fun1(10);


const  user1:User = {name:'ravi'}

fun({name:'Ravi',email:'ravichauhan'});

export {}