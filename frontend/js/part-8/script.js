//q-1
function repeatfunction (fn,time) {
   setInterval(fn, time)};
    repeatfunction(function() {
        console.log("Hello from the repeated function");
    }, 9000)
    
    // q-2
    function greetuser(greeting){
        return function(name) {
            console.log( `${greeting}, ${name}!`);
    }
    }
    var greet = greetuser("Hello");
    greet("Alice");