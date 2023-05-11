const dogButton = document.querySelector('#dog-button');
const catButton = document.querySelector('#cat-button');
const surpeiseButton = document.querySelector('#random-pet');

const image = document.querySelector('#image');

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_URL = 'https://api.thecatapi.com/v1/images/search';

const randomDog = () => {
    fetch(DOG_URL)
        .then((res) => res.json())
        .then((data) =>  image.src = data.message);
};

const randomCat = () => {
    fetch(CAT_URL)
        .then((res) => res.json())
        .then((data) => image.src = data[0].url);
};

surpeiseButton.addEventListener('click', () => {
    Promise.race([
        randomCat(),
        randomDog()
    ]);
});

dogButton.addEventListener('click', () => {
    randomDog();
});


catButton.addEventListener('click', () => {
    randomCat();
});