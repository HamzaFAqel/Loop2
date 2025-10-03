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

    if (grades[key]<0) {
        
        grades[key] = grades[key] * -1
    }
  }
  console.log(grades);
  
  return grades
};

absoluteNumbers({ science: 50, art: 60 }); // => {science: 50, art: 60}
absoluteNumbers({ science: -80, art: 75, english: 77 }); // => {science: 80, art: 75, english: 77}

const passedOrFailed = function (studentGrades) {
  // TODO: Your code here
  for(const key in studentGrades){
    if (studentGrades[key].grade<= studentGrades[key].total*0.5){
       console.log('failed');
       
        return 'failed'
    }
  }
  console.log('passed');
  
  return 'passed'
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

passedOrFailed(studentOne); // =>  "The student have passed"
passedOrFailed(studentTwo); // =>  "The student have failed"

const convertToArray = function (object) {
  // TODO: Your code here
  for
};

convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]
convertToArray({ 0: "two", 1: "three", 2: "one" }); // => ["two", "three", "one"]
convertToArray({ 0: "three", 1: "two", 2: "one" }); // => ["three", "two", "one"]