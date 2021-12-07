const programmingSkill = document.getElementById("programmming-skills");
const toggleButtonSkill = document.getElementById("button-programming");

toggleButtonSkill.addEventListener("click", function () {
  programmingSkill.classList.toggle("d-none");
});

let colleges = [];

const addCollege = (ev) => {
  ev.preventDefault();
  var title = document.getElementById("title").value;
  var year = document.getElementById("year").value;
  if (title.length === 0) {
    return console.log("Must enter name");
  }

  for (let i = 0; i < 5; i++) {
    console.log("here is a for loop :)");
  }

  switch (year) {
    case "1":
      console.log("freshman");
      break;
    case "2":
      console.log("sophmore");
      break;
    case "3":
      console.log("junior");
      break;
    case "4":
      console.log("senior");
      break;
    default:
      console.log("Can you even go to Uni for that one");
  }
  let college = {
    id: Date.now(),
    title: title,
    year: year,
  };
  colleges.push(college);
  document.forms[0].reset();

  console.warn("added", { colleges });
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(colleges, "\t", 2);

  localStorage.setItem("CollegesList", JSON.stringify(colleges));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addCollege);
});

//var myCollege = "I am a student at IUS";
//var myYear = "i am curently on year 3.";
//document.write(myCollege + "," + myYear);
