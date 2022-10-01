const accordion = document.getElementsByClassName('content-container');
const btn = document.getElementsByClassName('question');

for( let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

for( let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}