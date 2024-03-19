//object
var person={
  personName:"Scott",
  birthDay:
  function(){
    console.log(this);
    return`Happy Birthday to${this.personName}`;
  }
};
// console.log(+++++++++++++)
console.log(person.birthDay());