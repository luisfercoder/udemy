//goal: to get grade of the student based on secured marks.
/*SEcured marks>80 =A grade
Secured marka is between 60 and 79=B grade
Otherwise C grade
but if secure marks is less than 35, then F grade(Fail) */
var securedMarks=20,grade;
if(securedMarks>=80)
{
  grade="A"
}
else if(securedMarks>=60 && securedMarks<80)
{
 grade="B"
}
else if(securedMarks>=35 && securedMarks<60)
{
 grade="C"
}
else
{
 grade="Fail"
}
console.log(grade);