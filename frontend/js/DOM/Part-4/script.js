var users = [
  { 
    fullName: 'Alice Johnson', 
    age: 28, 
    status: 'Active', 
    imageSrc: 'https://placehold.co/100x100/png?text=AJ' 
  },
  { 
    fullName: 'Bob Williams', 
    age: 35, 
    status: 'Inactive', 
    imageSrc: 'https://placehold.co/100x100/png?text=BW' 
  },
  { 
    fullName: 'Charlie Brown', 
    age: 22, 
    status: 'Active', 
    imageSrc: 'https://placehold.co/100x100/png?text=CB' 
  },
  { 
    fullName: 'Diana Garcia', 
    age: 41, 
    status: 'Pending', 
    imageSrc: 'https://placehold.co/100x100/png?text=DG' 
  },
  { 
    fullName: 'Edward Davis', 
    age: 55, 
    status: 'Active', 
    imageSrc: 'https://placehold.co/100x100/png?text=ED' 
  },
  { 
    fullName: 'Fiona Miller', 
    age: 30, 
    status: 'Active', 
    imageSrc: 'https://placehold.co/100x100/png?text=FM' 
  },
  { 
    fullName: 'George Wilson', 
    age: 19, 
    status: 'Inactive', 
    imageSrc: 'https://placehold.co/100x100/png?text=GW' 
  },
  { 
    fullName: 'Hannah Moore', 
    age: 47, 
    status: 'Active', 
    imageSrc: 'https://placehold.co/100x100/png?text=HM' 
  },
  { 
    fullName: 'Isaac Taylor', 
    age: 62, 
    status: 'Pending', 
    imageSrc: 'https://placehold.co/100x100/png?text=IT' 
  },
  { 
    fullName: 'Jessica Anderson', 
    age: 25, 
    status: 'Active', 
    imageSrc: 'https://placehold.co/100x100/png?text=JA' 
  }
];
var main = document.querySelector('#main');
function hero(){
  var sum='';
users.forEach(function(elem,idx) {
  sum =sum+ `<div class="card">
        <img src="${elem.imageSrc}" alt="">
        <h1>${elem.fullName}</h1>
        <h5>${elem.age}</h5>
        <h4>${elem.status}</h4>
        <button id=${idx}>Add friend</button>    
        </div> `;
}); //${idx}gives unique id for each button
main.innerHTML = sum;
}
hero();
main.addEventListener('click', function(dets) {
  var gold=users[dets.target.id]
  if(gold.status === 'Active') {
    gold.status = 'Friend';
  }else{
    gold.status="stranger";
  }
  
  hero();
});