const keyValuePairs = function (object) {
  // TODO: Your code here
  let arr=[]
  for (const key in object){
   arr.push([key,object[key]])
  }
  console.log(arr);
  return arr;
  
};

keyValuePairs({ name: "John", age: 24 }); // => [["name", "John"], ["age", 24]]
keyValuePairs({ firstName: "John", lastName: "Doe" }); // => [["firstName", "John"], ["lastName", "Doe"]]
keyValuePairs({
  name: "Mark",
  position: "Full-Stack Developer",
  salary: 600,
}); // => [["name", "Mark"], ["position", "Full-Stack Developer"], ["salary", 600]]

const absoluteNumbers = function (grades) {
  // TODO: Your code here
  for(const key in grades){
    if (grades[grades]<0) {
        grades[grades] ===grades[grades]* -1
    }
  }
  console.log();
  
  return grades
};

absoluteNumbers({ science: 50, art: 60 }); // => {science: 50, art: 60}
absoluteNumbers({ science: -80, art: 75, english: 77 }); // => {science: 80, art: 75, english: 77}