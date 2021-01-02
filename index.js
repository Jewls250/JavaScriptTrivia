let startTime = 60;
let myVar;
let answerKey = {
    questionOne : "An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    questionTwo : ".Js",
    questionThree : "Script tag",
    questionFour : "Img",
    questionFive : 55
}
let containerEl = document.querySelector('#questionId');
let timerContainerEl = document.querySelector('#timerContainerEl')
let questionOne = answerKey[0]
let questionTwo = answerKey[1]
let questionThree = answerKey[2]
let questionFour = answerKey[3]
let questionFive = answerKey[4]
let questionOnePage = `<div class="jumbotron my-5 " >
<h1 class="display-4" id="textCenter">JavaScript Trivia</h1>
<h3 id="textCenter">Question: What is JavaScript?</h3>

<hr class="my-4">

<ul >
  <li class="my-3">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">An object-oriented computer programming language commonly used to create interactive effects within web browsers.
      </label>
    </div>
  </li>

  <li class="my-3">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">A library for building user interfaces.
      </label>
    </div>
  </li>

  <li class="my-3">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">An open source server environment.
      </label>
    </div>
  </li>

  <li class="my-3">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
      </label>
    </div>
  </li>

  <hr class="my-4">

  <a name="" id="" class="btn btn-primary" href="questionTwo.html" role="button">Submit</a>

</ul>

</div>`
function rightAnswers(answer) {
    if (answer === questionOne || answer === questionTwo || answer === questionThree || answer === questionFour || answer === questionFive){
        return 'Correct'
    } else {
        startTime -= 5;
        return 'Incorrect'
    }
}


function timer(){
    
    if(startTime > 0){
        startTime--
        timerContainerEl.innerHTML = startTime ;
    } else {
        return alert("Game Over")
    }
}

function timerContainer() {
    myVar = setInterval(timer, 1000);
}

// function alertFunc() {
//   alert("Hello!");
// }


function highScores(){
    
}



document.querySelector('#startTrivia').addEventListener("click",  () => {
    containerEl.innerHTML = questionOnePage    
    timerContainer()
})







