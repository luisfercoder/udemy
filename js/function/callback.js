//callback function 
let Callback1=function(name,age)
{
  console.log(`Callback1:name is ${name},age is ${age}`);
};
let Callback2=function(name,age)
{
  console.log(`Callback2:Age is ${age},name is ${name}`);
};
function DoWork(name,age,myFunctionRef)
{
  name="Mr"+ name;
  age++;
  myFunctionRef(name,age);
}
DoWork("Fer",22,Callback2);