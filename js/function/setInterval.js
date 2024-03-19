//interval
function callBack()
{
  console.log("Hello");
}

let myInterval=setInterval(callBack,2000);//calls the callback after every 2 sec

function stopInterval()
{
  clearInterval(myInterval);//stop interval
}
setTimeout(stopInterval,20*1000);//call stopInterval fuction after 20sec