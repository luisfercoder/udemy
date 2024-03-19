//employee scenario
var employee={
firstName:"Smith",
lastName:"John",
designation:"Clerk",
salary:3000,
workExperienceYears:5,
getFullName:function(){
  return`${this.firstName} ${this.lastName}`;
},
promote:function(){
  var isEligibleForPromotion;
  if(this.designation=="Clerk")
  {
    if(this.workExperienceYears>=3)
    {
      isEligibleForPromotion=true;
      this.designation="Asst.Manager";
      this.salary+=this.salary *10/100;
    }
    else
    {
      isEligibleForPromotion=false;
    }
  }
 else if(this.designation=="Asst.Manager")
 {
if(this.workExperienceYears>=5)
{
  isEligibleForPromotion=true;
  this.designation="Manager";
  this.salary+=this.salary *20/100;
}
 else
 {
  this.isEligibleForPromotion=false;
 }
 }
   return isEligibleForPromotion;
 }
};
console.log(employee.getFullName());
console.log(employee.promote());
if(employee.promote()==true)
{
  console.log("COngratulations! The Employee Promoted.");
  console.log("Updated Salary:"+employee.salary);
  console.log("Updated Designation:"+employee.designation);
}
else
{
  console.log("Employee is eligible.")
}