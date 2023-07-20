const sections = document.getElementsByClassName('section');
for (let i=0;i<sections.length;i++) {
                sections[i].addEventListener('click', function() {
                        const answer = sections[i].lastElementChild;
                        answer.classList.toggle('open');
                        const img = answer.previousElementSibling.lastElementChild;   
                        img.classList.toggle('open');       
                })
  };



        