//Inmediately Invoked Functions
let printMe=function(value)
{
  console.log(`Your value is ${value}`);
} 
//two ways to do this, in the same line
// printMe(function(){return 10*10;})();
printMe( (function(n)
{
  return n*6;
})
(10));//output:100