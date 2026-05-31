let num1, num2, operator, correctAnswer;
let score = 0;
const operators = ["+", "-", "*"];

const question = document.getElementById("question");

function generateEquation() {
    num1 = Math.floor(Math.random() * 11); 
    num2 = Math.floor(Math.random() * 11);
    
    let operatorIndex = Math.floor(Math.random() * 3);
    operator = operators[operatorIndex];

    question.innerText = `${num1} ${operator} ${num2}`;

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        correctAnswer = num1 - num2;
    } else if (operator === "*") {
        correctAnswer = num1 * num2;
    }
}

function checkAnswer() {
     const answer = Number(document.getElementById("answer").value);
     const message = document.getElementById("message");
     const scoreDisplay = document.getElementById("score");

    if (correctAnswer === answer && score < 6) {
        score += 1;
        scoreDisplay.innerText = score;
        message.style.color = "green";
        message.innerText = `Correct!`;
    } else {
        message.style.color = "red";
        message.innerText = `Wrong! Correct answer was ${correctAnswer}`;
    }

    if (score === 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    }

    document.getElementById("answer").value = "";
    generateEquation();
}

function playAgain(){
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("message").innerText = "";
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
}

generateEquation();