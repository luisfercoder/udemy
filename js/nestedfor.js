//Repetir 1,2,3,4,5, 5 veces
var str="";
for(var i=0;i<7;i++)
{
  for(var j=1;j<=5;j++)
  {
    str=`${str}${j}`;
  }
  str=`${str}\n`;
}
console.log(str);