const quizData = [
  {
    question: "Which keyword allows the reassignment of values?",
    options: ["Const", "Var", "Boolean", "Let"],
    answer: "Let",
  },
  {
    question: "Which statement logs/prints to the panel?",
    options: ["console.log()", "System.out.print()", "console()", "print()"],
    answer: "console.log()",
  },
  {
    question: "What is a boolean?",
    options: [
      "primitive type that holds true/false values",
      "holds a number",
      "a non-primitive data type",
      "primitive type that holds words",
    ],
    answer: "primitive type that holds true/false values",
  },
  {
    question: "Which arithmetic operator returns the remainder/modulo?",
    options: ["/", "+", "%", "-"],
    answer: "%",
  },
  {
    question: "Which one is NOT a way to declare a variable?",
    options: ["var", "let", "String", "const"],
    answer: "String",
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
