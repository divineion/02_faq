const sections = document.getElementsByClassName('section');
console.log(sections);
const reponse = document.getElementsByClassName("answer");

        //LE BLOC DE CODE QUI T'INTERESSE
for (let i=0;i<sections.length;i++) {
                sections[i].addEventListener('click', function() {
                        const answer = sections[i].lastElementChild;
                        answer.classList.toggle('open');
                })

  };




        