let startTime = 60;
let delay;

let answerKey = {
    questionOne : "An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    questionTwo : ".Js",
    questionThree : "Script tag",
    questionFour : "Img",
    questionFive : 55
}
let questionOne = answerKey[0]
let questionTwo = answerKey[1]
let questionThree = answerKey[2]
let questionFour = answerKey[3]
let questionFive = answerKey[4]

let containerEl = document.querySelector('#questionId');
let timerContainerEl = document.querySelector('#timerContainerEl')

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

  <a name="" id="questionOneComplete" class="btn btn-primary" role="button">Submit</a>

</ul>

</div>`

let questionTwoPage = `<div class="jumbotron my-5 " >
<h1 class="display-4" id="textCenter">JavaScript Trivia</h1>
<h3 id="textCenter">Question: Which one of the following is the JavaScript file extension.</h3>
<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">.JavaS
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">.JavaScript
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">.Js
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">.Html
      </label>
    </div>
  </li>

  <hr class="my-4">

  <a name="" id="questionTwoComplete" class="btn btn-primary" role="button">Submit</a>

</ul>

</div>`

let questionThreePage = `<div class="jumbotron my-5 " >
<h1 class="display-4" id="textCenter">JavaScript Trivia</h1>
<h3 id="textCenter">Question: Which tag starts JavaScript.</h3>

<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">JavaScript tag
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Script tag
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Java tag
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Html tag
      </label>
    </div>
  </li>

  <hr class="my-4">

  <a name="" id="questionThreeComplete" class="btn btn-primary" role="button">Submit</a>

</ul>

</div>`

let questionFourPage = `<div class="jumbotron my-5 " >
<h1 class="display-4" id="textCenter">JavaScript Trivia</h1>
<h3 id="textCenter">Question: Which of the following is a self closing tag</h3>

<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Img
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Script
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Div
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Section
      </label>
    </div>
  </li>

  <hr class="my-4">

  <a name="" id="questionFourComplete" class="btn btn-primary" role="button">Submit</a>

</ul>

</div>`

let questionFivePage = `<div class="jumbotron my-5 " >
<h1 class="display-4" id="textCenter">JavaScript Trivia</h1>
<h3 id="textCenter">Question: let x == 5 + '5'. Which of the following is correct.</h3>

<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">10
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Null
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">55
      </label>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="" id="" value="checkedValue">Undefined
      </label>
    </div>
  </li>

  <hr class="my-4">

  <a name="" id="questionFiveComplete" class="btn btn-primary" role="button">Submit</a>
</ul>

</div>`

let highScore = `<div class="jumbotron my-5 " >
<h1 class="display-4" id="textCenter">High Scores</h1>

<hr class="my-4">

<ol>
  <li class="my-4"></li>
  <li class="my-4"></li> 
  <li class="my-4"></li>
  <li class="my-4"></li>
  <li class="my-4"></li>
  <li class="my-4"></li>
  <li class="my-4"></li>
  <li class="my-4"></li>
  <li class="my-4"></li>
  <li class="my-4"></li>
</ol>
<hr class="my-4">
<a name="" id="highScore" class="btn btn-primary" role="button">Play Again</a>  
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
      startTime = 0
      confirm('Game Over')
      clearInterval(startTime)
    }
  
}

function timerContainer() {
    delay = setInterval(timer, 1000);
}


function highScores(){
    
}

document.querySelector('#startTrivia').addEventListener("click",  () => {
    containerEl.innerHTML = questionOnePage    
    timerContainer()

document.querySelector('#questionOneComplete').addEventListener("click",  () => {
  containerEl.innerHTML = questionTwoPage  
  timerContainer()  

document.querySelector('#questionTwoComplete').addEventListener("click",  () => {
  containerEl.innerHTML = questionThreePage    
  timerContainer()
        
document.querySelector('#questionThreeComplete').addEventListener("click",  () => {
  containerEl.innerHTML = questionFourPage
  timerContainer()  

document.querySelector('#questionFourComplete').addEventListener("click",  () => {
  containerEl.innerHTML = questionFivePage  
  timerContainer()  

document.querySelector('#questionFiveComplete').addEventListener("click",  () => {
  containerEl.innerHTML = highScore   

document.querySelector('#highScore').addEventListener("click",  () => {
  location.reload()   
            })
          })
        })
      })
    })
  })
})

