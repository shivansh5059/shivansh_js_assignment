const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
  ];
  
 
  let total = 0;

  for (let i = 0; i < students.length; i++) {
    
    total += students[i].marks;
  }
  let avg = total / students.length;
  

  let grade;
  if (avg < 60) {
    grade = "F";
  } 
  else if (avg < 70) {
    grade = "D";
  } else if (avg < 80) {
    grade = "C";
  } else if (avg < 90) {
    grade = "B";
  } else {
    grade = "A";
  }

  console.log("Average Marks = " + avg);
  console.log("Grade = " + grade);
  