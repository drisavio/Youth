const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
}


showSlide(0);


setInterval(nextSlide, 7000);



const femaleDropdownBtn = document.getElementById('femaleDropdownBtn');
const femaleDropdownContent = document.getElementById('femaleDropdownContent');

const maleDropdownBtn = document.getElementById('maleDropdownBtn');
const maleDropdownContent = document.getElementById('maleDropdownContent');


femaleDropdownBtn.addEventListener('click', () => {

    if (femaleDropdownContent.style.display === 'block') {
        femaleDropdownContent.style.display = 'none';
    } else {
        femaleDropdownContent.style.display = 'block';
    }
});


maleDropdownBtn.addEventListener('click', () => {

    if (maleDropdownContent.style.display === 'block') {
        maleDropdownContent.style.display = 'none';
    } else {
        maleDropdownContent.style.display = 'block';
    }
});


window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        femaleDropdownContent.style.display = 'none';
        maleDropdownContent.style.display = 'none';
    }
});

