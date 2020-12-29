let startTime = 60;
let answerKey = {
    questionOne = "An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    questionTwo = ".Js",
    questionThree = "Script tag",
    questionFour = "Img",
    questionFive = 55
}

let questionOne = answerKey[0]
let questionTwo = answerKey[1]
let questionThree = answerKey[2]
let questionFour = answerKey[3]
let questionFive = answerKey[4]

function rightAnswers(answer) {
    if (answer === questionOne || answer === questionTwo || answer === questionThree || answer === questionFour || answer === questionFive){
        return 'Correct'
    } else {
        // time -= 5;
        return 'Incorrect'
    }
}

function timer(){
    let complete = true;
    for(i = 60; i <= 0 ;i--)
    if (complete){
        return `Your final Score is ${i}`
    } else {
        return "You failed... Your score is 0"
    }
}

function highScores(){

}

