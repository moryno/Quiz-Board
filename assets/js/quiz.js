let studentAnswer = [];
let points = [];


// CREATE A FUNCTION TO IDENTIFY THE SELECTED ANSWER AND STORE IT IN A LIST
let inputs = document.querySelectorAll(".selected");
inputs.forEach((input) => { 
   input.addEventListener("click", function(){
    let checked = this.checked;
    if(checked){
    let selectedAnswer = this.value;
    if(selectedAnswer === "html"){
       points.push(10);
   }
   else{
       points.push(23)
   }
}
else{
   console.log( "No answer has been selected");
}
   })
})


// CREATE A FUNCTION TO COMPUTE AND DISPLAY SCORE WHEN SUBMITTED


const onNext = () => {
    let totalPoints = 0;
    for(let i = 0; i < points.length; i++){
        totalPoints += points[i];
        if(totalPoints >= 80) {
            document.querySelector("h3").textContent = "Exellently passed!!!";
            document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
        }
        else if(50 <= totalPoints < 80){
            document.querySelector("h3").textContent = "Fairly passed.";
            document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
        }
        else{
            document.querySelector("h3").textContent = "Scored poorly, you need to retake the test";
            document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
        }

    }
}

// ADD A CAROUSEL FOR THE QUIZES

const track = document.querySelector("#form");
const slides = Array.from(track.children);
const nextButtons = document.querySelectorAll(".nextQuiz");
const prevButtons = document.querySelectorAll(".prevQuiz");
const slideWidth = slides[0].getBoundingClientRect().width;

// 1. Arrange slide next to one another
const setSlidePosition = (slide, i) => {
    slide.style.left = slideWidth * i + "px";
}
slides.forEach(setSlidePosition);

// 3. function to move to both left and right
const sliderMove = (track, currentSlider, targetSlider) =>{
    track.style.transform = `translateX(-${targetSlider.style.left})`;
    currentSlider.classList.remove("currentSlide");
    targetSlider.classList.add("currentSlide");
        
}

// 2. move to the next quiz on the right

nextButtons.forEach((button) => {
    button.addEventListener("click", function(){
        const currentSlider = track.querySelector(".currentSlide");
        const nextSlider = currentSlider.nextElementSibling;
        
        sliderMove(track, currentSlider, nextSlider)
        
    
    })
});

// 4. move to the previous quiz on left
prevButtons.forEach((button) => {
    button.addEventListener("click", function(){
        const currentSlider = track.querySelector(".currentSlide");
        const prevSlider = currentSlider.previousElementSibling;
        
        sliderMove(track, currentSlider, prevSlider)
        
    
    })
});