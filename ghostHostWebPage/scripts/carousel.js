let dotsContainer = document.querySelector('.dots');
let imgContainer = document.querySelector('.img-container')
let reviewMemberElement = document.querySelector('#review-member');

let interval = 5000;

function changeToFirst() {
    imgContainer.classList = 'img-container first-active';
    dotsContainer.classList = 'dots first-current';
    reviewMemberElement.textContent = 'Jonny Doe';
}

function changeToSecond() {
    imgContainer.classList = 'img-container second-active';
    dotsContainer.classList = 'dots second-current';
    reviewMemberElement.textContent = 'John Doe';
}

function changeToThird() {
    imgContainer.classList = 'img-container third-active';
    dotsContainer.classList = 'dots third-current';
    reviewMemberElement.textContent = 'Johnathan Doe';
}

function animateSlider() {
    let currentSlide = dotsContainer.classList[1];

    if (currentSlide == 'first-current') {
        changeToSecond();
    } else if (currentSlide == 'second-current') {
        changeToThird();
    } else if (currentSlide == 'third-current') {
        changeToFirst();
    }
}

function carouselAction() {
    let switchSlidesInterval = setInterval(animateSlider, interval);

    document.querySelector('#first-dot').addEventListener('click', () => {
        changeToFirst();
        clearInterval(switchSlidesInterval);
        switchSlidesInterval = setInterval(animateSlider, interval);
    })

    document.querySelector('#second-dot').addEventListener('click', () => {
        changeToSecond();
        clearInterval(switchSlidesInterval);
        switchSlidesInterval = setInterval(animateSlider, interval);
    })

    document.querySelector('#third-dot').addEventListener('click', () => {
        changeToThird();
        clearInterval(switchSlidesInterval);
        switchSlidesInterval = setInterval(animateSlider, interval);
    })
}

export default carouselAction;