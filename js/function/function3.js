//call a fuction inside another fuction 
let square=function (n)
{
 return n*n;
};
let cube=function(n)
{
  return(square(n)*n);
};
let result=cube(1);
console.log(result);