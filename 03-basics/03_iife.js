
//Immediately Invoked Function Expressions (IIFE)

//global scope ke  variables ko htane ke liye iife ka use krte hai

(function chai(){

    //name IIFE
    console.log(`DB CONNECTED`);
    
})();



( () => {
    //simple IIFE
    console.log(`DB CONNECTED TWO`);
    
}) ();

((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})(`hitesh`)