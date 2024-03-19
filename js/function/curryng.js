//Curryng 
let LogMessage= function(receiver){//first function
  let result1=`@${receiver}`;
  return function(message){
    let result2=`${result1}:${message}`;
    return function(hours,minute,timePeriod){
      let result3=`${result2} at ${hours}:${minute}${timePeriod}`;
      return function(place){
        let result4=`${result3}-From${place}`;
        return result4;
      };
    };
  };
};
console.log(LogMessage("Fer")("Hola")(20,25,"pm")("México"));