const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const a2 = document.getElementById('a2');
const a1 = document.getElementById("a1");
const question = document.getElementsByClassName("question"); //renvoie les NodeLists avec les 5 éléments
const answers = document.getElementsByClassName("answer");
const arrow = document.querySelector("svg");       
 

console.log(answers);
//je sélectionne l'ensemble des questions
// const questions = document.querySelectorAll("questions");
console.log(a2.style.display == "initial");
console.log(a2.style.display == "none");

    q2.addEventListener("click", function()  {
            a2.style.display = "initial";
            this.parentElement.style.height = "97px"
    });


