function profile() {
    let name = document.getElementById("name").value;
    let cohort = document.getElementById("cohort").value;
    let bio = document.getElementById("bio").value;

    

    document.getElementById("displayName").innerHTML = `Hello ${name}`;
    document.getElementById("displayCohort").innerHTML = `Your cohort is ${cohort}`;
    document.getElementById("displayBio").innerHTML = `Your bio is ${bio}`;
}