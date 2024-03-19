//Higher orden function
function getAreaOfCircle(radius)
{
  //return a function from HOF
  return function()
  {
    return Math.PI*radius*radius;
  };
};

let area=getAreaOfCircle(6);//Call HOF and get the returned function.
console.log(area());//Call the function that was returned by HOF