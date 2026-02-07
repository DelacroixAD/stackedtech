var arr=[1,2,3,4];
var ans = arr.map(function(value){
    return 12;
})
function counter(){
    let co=0
    return function(){
        co++
        console.log(co)
    }
}
var fn=counter()
fn()
fn()
fn()

//q-1
function callerfn(fn){
 setTimeout(fn, 3000);
}
callerfn(function(){
    console.log("Hello from the caller function");
});
// q-2
function mapkicopy(arr, fn){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
mapkicopy([1,2,3,4,5,6],function(value){
    return value +2;
});