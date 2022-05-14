let studentAnswer = [];
let points = [];

// CREATE A FUNCTION TO IDENTIFY THE SELECTED ANSWER AND STORE IT IN A LIST
let numberOfChoices = document.querySelectorAll(".selected").length;
for(let i = 0; i < numberOfChoices; i++){
    document.querySelectorAll(".selected")[i].addEventListener("click", function(){
         let selectedAnswer = this.textContent;
         
         if(selectedAnswer === "HTML"){
            points.push(10);
            
        }
        else{
            points.push(23)
        }
         
  });
};

// CREATE A FUNCTION TO COMPUTE AND DISPLAY SCORE WHEN SUBMITTED
document.querySelector(".submit").addEventListener("click", function(){
    let totalPoints = 0;
    for(let i = 0; i < points.length; i++){
        totalPoints += points[i];

        switch (totalPoints) {
            case "totalPoints >= 80":
                document.querySelector("h3").textContent = "Exellently passed!!!";
                document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
                break;
            case "50 < totalPoints < 80":
                document.querySelector("h3").textContent = "Fairly passed.";
                document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
                break;
        
            case "totalPoints == 50":
                document.querySelector("h3").textContent = "Average, you can do better";
                document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
                break;
            case "50 < totalPoints":
                document.querySelector("h3").textContent = "Scored poorly, you need to retake the test";
                document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
                break;
        
            default:
                break;
        }
    }
})