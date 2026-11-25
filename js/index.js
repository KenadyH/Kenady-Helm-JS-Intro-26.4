
const body = document.querySelector("body");

const newFooter = document.createElement("footer");
body.appendChild(newFooter);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `© Kenady Helm ${thisYear}`;

footer.appendChild(copyright);
console.log("JavaScript is working!");


const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Visual Studio Code"
];

const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
