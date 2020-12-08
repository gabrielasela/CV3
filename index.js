const person = {
    name : "Gabriela Thania Sela",
    age : 18,
    sayHello: function() {
        console.log("Hello");
    }
};

person.age = 19;
person.address = "Leilem";

console.log (person);
console.log(person["age"]);

person.sayHello();

function helloWorld(){
    alert("Hello World")
};