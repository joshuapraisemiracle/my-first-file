const jamStudents = [

  { name: "Joshua", score: 350 },
  { name: "David", score: 280 },
  { name: "Grace", score: 310 },
  { name: "John", score: 195 },
  { name: "Sarah", score: 300 },
  { name: "Michael", score: 250 },
  { name: "Esther", score: 345 },
  { name: "Daniel", score: 290 },
  { name: "Mary", score: 320 },
  { name: "Peter", score: 210 }
];

const successfulStudents = jamStudents.filter(function(student) {
  return student.score >= 300;

});


if (successfulStudents.length > 0) {
  console.log("Students who scored 300 or more in JAMB:");

  successfulStudents.forEach(function(student) {
    console.log(student.name);
  });
} else {
  console.log("Nobody scored 300 or more in JAMB.");
}
