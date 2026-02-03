function abcd(a,b,c,d){
console.log(a,b,c,d);
}
abcd(1,2,3,4)
var abcd=()=>12
var ans=abcd()
//iife immediately invoked function expression is a function that is executed immediately after it is defined which is used to avoid polluting the global scope.
var ans = (function abcd(){
var a=12;
return a;
})();

//hofs higher order functions
function abcd(){
return function(){
console.log('hehehe')
}
}

abcd()();
