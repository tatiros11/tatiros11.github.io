const quizData = [
  {
    question:
      "What happens in an if-else statement if the if condition isn't met?",
    options: [
      "Nothing",
      "The if statement runs",
      "The else statement runs",
      "The program crashes",
    ],
    answer: "The else statement runs",
  },
  {
    question: "Which comparison operator means 'not equal to'?",
    options: ["===", ">=", "!", "!=="],
    answer: "!==",
  },
  {
    question: "What do logical operators do?",
    options: [
      "combine conditions",
      "compare values",
      "add values",
      "return values",
    ],
    answer: "combine conditions",
  },
  {
    question: "What happens if the condition of an if statement is not met?",
    options: [
      "The code inside the statement does not run",
      "The program crashes",
      "It runs anyway",
      "The opposite happens",
    ],
    answer: "The code inside the statement does not run",
  },
  {
    question: "Which logical operator means 'or'?",
    options: ["&&", "!", "||", "\\"],
    answer: "||",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();
