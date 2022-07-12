// Type Writter Effect 

var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//     loop: true
// });

// typewriter.typeString('Welcome to my site!')
//     .pauseFor(2000)
//     .deleteAll()
//     .typeString('I love exploring new things!')
//     .pauseFor(2000)
//     .deleteChars(21)
//     .typeString('technology!')
//     .pauseFor(2000)
//     .start();


window.addEventListener('scroll', function () {
    let header = this.document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

const hamBtn = document.getElementById('ham-btn');
const crossBtn = document.getElementById('cross-btn');

hamBtn.addEventListener('click', function() {
    // event.preventDefault();
    const slider = document.querySelector('#slide-menu');

    slider.classList.add('slide-active');
    hamBtn.style.display = 'none';
})

crossBtn.addEventListener('click', function() {
    // event.preventDefault();
    const slider = document.querySelector('#slide-menu');

    slider.classList.remove('slide-active');
    hamBtn.style.display = 'block';
})