let studentAnswer = [];
let points = [];

let numberOfChoices = document.querySelectorAll(".selected").length;

for(let i = 0; i < numberOfChoices; i++){
    document.querySelectorAll(".selected")[i].addEventListener("click", function(){
         let selectedAnswer = this.innerHTML;
         if(selectedAnswer === "HTML"){
            points.push(10);
            
        }
        else{
            points.push(23)
        }
         
  });
};

document.querySelector(".submit").addEventListener("click", function(){
    let totalPoints = 0;
    for(let i = 0; i < points.length; i++){
        totalPoints += points[i];

        switch (totalPoints) {
            case ">=80":
                document.querySelector("h3").textContent = "Exellently passed!!!";
                document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
                break;
            case ">50 && <80":
                document.querySelector("h3").textContent = "Exellently passed!!!";
                document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
                break;
        
            case ">50 && <80":
                document.querySelector("h3").textContent = "Exellently passed!!!";
                document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
                break;
        
            default:
                break;
        }
        document.querySelector("h3").textContent = "Congratulation!!!";
        document.querySelector("#heading p" ).textContent = "Your score is " + totalPoints;
    }
})