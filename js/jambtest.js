const JAMBcandidates = [
    { name: "Amaka", score: 245 },
    { name: "Daniel", score: 189 },
    { name: "Chisom", score: 220 },
    { name: "Emeka", score: 175 },
    { name: "Blessing", score: 265 },
    { name: "David", score: 198 },
    { name: "Ada", score: 230 },
    { name: "Michael", score: 160 },
    { name: "Joy", score: 215 },
    { name: "Samuel", score: 190 },
    { name: "Ifeoma", score: 250 }
];

let successfulCandidates = [];
let count = 0;

function checkScores() {
    for (let i = 0; i < JAMBcandidates.length; i++) {
        if (JAMBcandidates[i].score > 200) {
            successfulCandidates.push(JAMBcandidates[i].name);
            count++;
        }
    }

    if (count > 0) {
        console.log("These are the students who scored more than 200 in JAMB:", successfulCandidates );

        //console.log(successfulCandidates);
        console.log("Number of candidates who scored above 200:", count);
    } else {
        console.log("No candidate scored above 200 in JAMB.");
    }
}

checkScores();

// for loop continues to run until the condition is false (met)
console.log(JAMBcandidates.length)
console.log(JAMBcandidates[3])