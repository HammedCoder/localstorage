const studentContainer = document.querySelector(".students");
const studentForm = document.getElementById("studentForm");
// const studentDiv = document.getElementById("div");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

students = [
  {
    "name": "usman",
    "age": 12, 
    "roll": 1
  },
  {
    "name": "Malik",
    "age": 9, 
    "roll": 3
  },
];

const addStudent = (name, age, roll) =>{
  students.push({name,age,roll});
  return {name, age, roll};
}

const createStudent = ({name, age, roll}) =>{
  studentDiv = document.createElement("div")
  studentName = document.createElement("h2")
  studentAge = document.createElement("p")
  studentRoll = document.createElement("p")
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentRoll.innerText = "Student roll: " + roll;

  studentDiv.append(studentName, studentAge, studentRoll);

  studentContainer.append(studentDiv);

}
students.forEach(createStudent);
// createStudent
studentForm.onsubmit = e =>{
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  )

  createStudent(newStudent);
  nameInput.value="";
    ageInput.value="";
    rollInput.value="";
}