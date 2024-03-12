//funtions
let getSimpleInterest=function(principle,rateOfInterest,noOfYears)
{
 let si=(principle*rateOfInterest*noOfYears)/100;
 return si;
};
//llamar a traer la funcion 
console.log(getSimpleInterest(10000,6.7,3));
//crear una variable para reutilizar la funcion 
let si2=getSimpleInterest(7000,4.5,10);
console.log(si2);