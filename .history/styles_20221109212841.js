const slider = document.querySelector('.cats__cards');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; //stop func from running
    console.count(isDown);

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});
// Card hover
const cards = document.querySelector('.card');

cards.addEventListener('mouseenter', () => {
    console.log('enter');
})
cards.addEventListener('mouseleave', () => {
    console.log('leave');
})

var card = document.getElementsByClassName('.card');
for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('mouseenter', function() {
        console.log('enter');
    })
    card[i].addEventListener('mouseleave', function() {
        console.log('leave');
    })
}

// Go to top
// Get the button:
let mybutton = document.getElementById("goToTop");
window.onscroll = function() {
    scrollFunction()
}