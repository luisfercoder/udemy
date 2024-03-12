//this fuction calculate bills amount of cart in shopping
//you can supply unlimited no. of products prices
let getCardBill=function()
{
  let sum=0;
  for(let i=0;i<arguments.length;i++)
  {
   sum=sum+arguments[i];
  }
  return sum;
}
console.log(getCardBill(1));
console.log(getCardBill(1,2));
console.log(getCardBill(1,2,3));

