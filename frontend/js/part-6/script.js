var arr=[];
var arr1= new Array(10);
var arr= [1,2,3,4]
arr[3] ;
//
var arr= [1,2,3,4]
var ans= arr.map(function(value){
    return 1;
})
console.log(ans);

// q-11
var i=10 ;
while(i>0){
    console.log(i);
    i--
} 
// q-12
var i=3;
while(i<31){
    console.log(i);
    i+=3;
}
// q-13
var sum=0;
for(var i=1;i<=100;i++){
    sum=sum+i;  
}
console.log(sum);
// q-14
//q-15
var str="JavaScript"
for(var i of str){
    console.log(i)
}
//q-16
var arr=[1,1,12,2,2,2,24,6,7,8,45,3,4,4,4,2,7,]
var ans=[...new Set(arr)]
console.log(ans);   

// q-17, q-18
var arr=[1,233,35,865,35,6,,3,4,33,3,4,453,23,22,10];
var ans=[...new Set(arr)];
var ans1=ans.sort(function(a,b){
    return b-a;
});
console.log(ans1 [1]); // second largest number

// q-19
var arr=[1,2,3,4,5,6,7,8,9,10];
var ans=[]; 
for(var i=arr.length-1;i>=0;i--){
    ans.push(arr[i]);
} 
// q-20
var arr=[3,4,1,3,4,6,7]; 
var obj={};
arr.forEach(function(val){
    obj[val]===undefined? obj[val]=1 : obj[val]++;
});

