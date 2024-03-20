//accessing properties by dot notation or brackets
let customer={
  customerName:"Scott",
  email:"scott@test.com",
  1:"Hello"
};
console.log(customer.customerName);
console.log(customer["customerName"]);

customer.email="scott@example.com";
console.log(customer["email"]);
console.log(customer["1"]);

