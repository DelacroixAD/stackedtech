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
    // q-3
function onlyOncecaller(fn) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
           fn()
        }
        else {
            console.log("Function has already been called once.");
        }
    };

}

var newfnc = onlyOncecaller(function(){
    console.log("This function can only be called once.");
});
//q-4
function throt(fn,delay) {
    let lastCall = 0;
    return function() {
        let current = Date.now();
        if (current- lastCall >= delay) {
            lastCall = current;
            fn();
        }
    };
}
var newfnc=throt(function() {
    console.log("Function executed after delay");
},2000)
newfnc();