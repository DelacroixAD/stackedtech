var users= [
    {
    username:'sarth',
    age:30,
    city:'bangalore'
}
,
{
    username:'adi',
    age:30,
    city:'mumbai'
},
{
    username:'af',
    age:30,
    city:'pune'
},
{
    username:'pan',
    age:30,
    city:'gujrat'

}]
localStorage.setItem('users',JSON.stringify(users));
//var newUsers=JSON.stringify(users)
//console.log(newUsers)
var users= localStorage.getItem('users')
console.log(users)
var newUsers=JSON.parse(users)
console.log(newUsers)

