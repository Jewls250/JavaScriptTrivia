let startTime = 60;
let delay;
let scores = []

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
let pageContent = document.querySelector("#pageContent")

let questionOnePage = `<div class="jumbotron my-5 " >
<h3 id="textCenter">Question: What is JavaScript?</h3>

<hr class="my-4">

<ul >
  <li class="my-3">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">An object-oriented computer programming language commonly used to create interactive effects within web browsers.</button>
    </div>
  </li>

  <li class="my-3">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">A library for building user interfaces.</button>
    </div>
  </li>

  <li class="my-3">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">An open source server environment.</button>
    </div>
  </li>

  <li class="my-3">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.</button>
    </div>
  </li>

</ul>

</div>`;

let questionTwoPage = `<div class="jumbotron my-5 " >
<h3 id="textCenter">Question: Which one of the following is the JavaScript file extension.</h3>
<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">.JavaS</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">.JavaScript</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">.Js</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">.Html</button>
    </div>
  </li>

</ul>

</div>`;

let questionThreePage = `<div class="jumbotron my-5 " >
<h3 id="textCenter">Question: Which tag starts JavaScript.</h3>

<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">JavaScript tag</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Script tag</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Java tag</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Html tag</button>
    </div>
  </li>
</ul>

</div>`;

let questionFourPage = `<div class="jumbotron my-5 " >
<h3 id="textCenter">Question: Which of the following is a self closing tag</h3>

<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Img</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Script</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Div</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Section</button>
    </div>
  </li>

</ul>

</div>`;

let questionFivePage = `<div class="jumbotron my-5 " >
<h3 id="textCenter">Question: let x == 5 + '5'. Which of the following is correct.</h3>

<hr class="my-4">

<ul >
  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">10</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Null</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">55</button>
    </div>
  </li>

  <li class="my-2">
    <div class="form-check form-check-inline">
        <button class="btn btn-primary">Undefined</button>
    </div>
  </li>
</ul>

</div>`;

function highscore (score) {
  return `<div class="jumbotron my-5 " >
<h1 class="display-4" id="textCenter">High Scores</h1>

<hr class="my-4">

<ol>
  <li class="my-4">${score[0]}</li>
  <li class="my-4">${score[1]}</li> 
  <li class="my-4">${score[2]}</li>
  <li class="my-4">${score[3]}</li>
  <li class="my-4">${score[4]}</li>
</ol>
<hr class="my-4">
<a name="" id="highScore" class="btn btn-primary" role="button">Play Again</a>  
</div>`;}

function timer(){
  
    if(startTime > 0){
        startTime--
        timerContainerEl.innerHTML = startTime ;
    } else {
      confirm('Game Over')
      startTime = 0
      clearInterval(delay)
    }
  
}

function timerContainer() {
    delay = setInterval(timer, 1000);
}





document.querySelector('#startTrivia').addEventListener("click",  () => {
    pageContent.innerHTML = questionOnePage    
    timerContainer()
    document.querySelector('#btnContainer').innerHTML = ""


pageContent.addEventListener("click",  (e) => {
  pageContent.innerHTML = questionTwoPage  
  console.log(e.target.textContent)

  if (answerKey.questionOne !== e.target.textContent){
    startTime -= 5
  }

    pageContent.addEventListener("click", (e) => {
      pageContent.innerHTML = questionThreePage;
      if (answerKey.questionTwo === e.target.textContent) {
       
      }

      pageContent.addEventListener("click", (e) => {
        pageContent.innerHTML = questionFourPage;
        if (answerKey.questionThree === e.target.textContent) {
          
        }

        pageContent.addEventListener("click", (e) => {
          pageContent.innerHTML = questionFivePage;
          if (answerKey.questionFour === e.target.textContent) {
            
          }

          pageContent.addEventListener("click", (e) => {
            scores.push(startTime)
            console.log(scores)
            localStorage.setItem("timeRemaining", JSON.stringify(scores))
            let currentTime = localStorage.getItem("timeRemaining")
            let highscoreArr = JSON.parse(currentTime)
            pageContent.innerHTML = highscore(highscoreArr);
            
            if (answerKey.questionFive === e.target.textContent) {

            }

            document.querySelector("#hideTimer").innerHTML = ""
            clearInterval(delay)
            document.querySelector("#highScore").addEventListener("click", () => {
                location.reload();
              });
          });
        });
      });
    });
  })
})



document.querySelector('#highScore').addEventListener("click",  () => {
  let currentTime = localStorage.getItem("timeRemaining");
  let highscoreArr = JSON.parse(currentTime);
  pageContent.innerHTML = highscore(highscoreArr);

  document.querySelector("#btnContainer").innerHTML = ""; 
  document.querySelector("#hideTimer").innerHTML = ""; 
  document.querySelector('#highScore').addEventListener("click",  () => {
    location.reload()
     
 })
})
