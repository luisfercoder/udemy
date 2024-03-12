//fuction that calculates net price based on the given price and tax rates
let getNetPrice=function(price,taxRate=18)
{
  let netPrice=price+(price*taxRate/100);
  return netPrice;
}
let netPriceOfProduct1=getNetPrice(1000,10);
console.log(netPriceOfProduct1);
let netPriceOfProduct2=getNetPrice(1000);
console.log(netPriceOfProduct2);