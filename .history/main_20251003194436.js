const keyValuePairs = function (object) {
  // TODO: Your code here
  let arr=[]
  for (const key in object){
   arr.push([key])
  }
};

keyValuePairs({ name: "John", age: 24 }); // => [["name", "John"], ["age", 24]]
keyValuePairs({ firstName: "John", lastName: "Doe" }); // => [["firstName", "John"], ["lastName", "Doe"]]
keyValuePairs({
  name: "Mark",
  position: "Full-Stack Developer",
  salary: 600,
}); // => [["name", "Mark"], ["position", "Full-Stack Developer"], ["salary", 600]]