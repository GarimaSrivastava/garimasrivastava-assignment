function setTimeOutSync(callback, n){

    var startTime= new Date();
    while(new Date()-startTime<n){}
    callback();
}

var abc= function(){
    console.log("Hi");
}

setTimeOutSync(abc,10000);
