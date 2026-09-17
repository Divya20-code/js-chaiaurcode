

//object literal 

const student = {
    name : "hitesh",
   " fullName" : "hitesh kumar",
    age : 20 ,
    address: "pune",
    email: "hitesh@example.com",
    isLoggeddin : true,
    lastLoggedindys : ["Monday", "tuesday", "Wednesday"],
}



console.log(student.name);
console.log(student );
console.log(student["fullName"]);



student.email = "hitesh@newexample.com"
console.log(student.email);

student.email = "hitesh@newexample.com"
console.log(student.email);


student.greeting = function(){
    console.log("hello hitesh"); 
}


student.greeting2 = function (){
 console.log(`hello ${this.name} your email is ${this.email}`);
}
console.log(student.greeting());
console.log(student.greeting2());