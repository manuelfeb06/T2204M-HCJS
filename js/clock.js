// viết đồng hồ đếm ngược 10p
var sec= 0;
var min=10;
var clock=setInterval(function () {

    console.log( min +":"+sec);
    sec--;


    if(sec == -1){
        sec = sec + 60;
        min--;

    }
    if(sec == 0 && min == 0){
        clearInterval(clock);
        alert("Finish")
    }

},1000);