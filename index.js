function receivesAFunction(callback){
    callback();
}
receivesAFunction();

function returnsANamedFunction(){
    return function returnsANamedFunction(){
    console.log("before all");
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("before all");
}