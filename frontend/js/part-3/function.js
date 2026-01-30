function abcd(a){
    console.log(a)
}
  abcd('hi')
  abcd('hell')
  abcd('another')
  abcd('one')
//function experession
  var abcd= function(){
            console.log('this is a function')
    }
//anonymous function used in arrays 
var arr = [1, 2, 3, 4, 5];
arr.forEach(function() {
    console.log();
});
//fat arrow function
const abcd = (a) => {
    console.log(a)
}
//return
function abcd(a){
    return a
}
 var ans=abcd('hi')
//fat arrow implict return
var abcd =()=> "hi"
var ans=abcd()
//rest parameter
function abcd(a,b,c,...ckm){
    console.log(a,b,c,ckm) //1,2,3 will get printed as individual arguments, and the rest will be in an array
}
abcd(1,2,3,4,5,6,7,8,9)


