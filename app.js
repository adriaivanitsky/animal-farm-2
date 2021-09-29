// import functions and grab DOM elements
const catImg = document.getElementById('cat');
const catSound = document.getElementById('catsound');
const pugImg = document.getElementById('pug');
const dogSound = document.getElementById('dogsound');
const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horsesound');
// initialize global state

// set event listeners 

catImg.addEventListener('click', ()=>{
    catSound.play();
});
pugImg.addEventListener('click', ()=>{
    dogSound.play();
});
horseImg.addEventListener('click', ()=>{
    horseSound.play();
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
