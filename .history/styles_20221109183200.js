const slider = document.querySelector('.cats__cards');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mousemove', () => {
    if (!isDown) return; //stop func from running
    console.log(isDown);
    console.log('Do work!');

});