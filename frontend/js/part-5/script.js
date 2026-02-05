//q-1
console.log('Hello World')
console.warn('Hello World')
console.error('Hello World')
console.table ({name:"aditya",age:"18"})
//q-2
let result=(35*2-(10/2)+7)
console.log(result)
//q-3
console.log(typeof "123");  // "string"
  console.log(typeof 123);    // "number"
  console.log(typeof true);   // "boolean"
  console.log(typeof null);   // "object" (JavaScript quirk)

//m-1
 var a=10
 var b=20
 var c;
 c=a
 a=b
 b=c
 console.log(a,b)
 //m-2
 var a=13
 var b=12
 [a,b]=[b,a]
 console.log(a,b)
 //m-3
 var a= 10
 var b= 20
 a= a + b; // a becomes 30
    b = a - b; // b becomes 10
    a = a - b; // a becomes 20
    console.log(a,b)
 //q-5
 console.group("User Info");
  console.log("Name: John Doe");
  console.log("Age: 25");
  console.log("City: New York");
  console.groupEnd();

  console.groupCollapsed("Collapsed Group Example");
  console.log("This content is collapsed by default.");
  console.groupEnd();
//q-6
const obj={
  name:"aditya",
  age:18,
  city:"delhi"
};
obj.age;
console.log(obj.age);

//q-7
var real1=Number(prompt("50"))
console.log(real1)

//q-8 
let str="javascript"
if(str.indexOf("script") !== -1) {
  console.log("true");
}
else{
  console.log("false");
} 

//q-9
var arr= [1, 2, 3, 4, 5];
var ans= arr.reduce(function(accumulator, value) {
  return accumulator + value;
},0);
console.log(ans);