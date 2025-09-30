// 2. JavaScript Functionality:
// ● Display Question:
// ○ Use an array of question objects, each containing:
// ■ A question string.
// ■ An array of four answer choices.
// ■ The index of the correct answer.
// ● Handle Answer Selection:
// ○ Add click event listeners to the answer buttons.
// ○ When a button is clicked, check if the selected answer is correct and
// update the feedback element accordingly.
// ○ Disable all answer buttons after a selection to prevent further clicks.
// ● Next Question:
// ○ Attach an event listener to the "Next Question" button.
// ○ When clicked, load the next question and re-enable the answer
// buttons

// hard data
const questions = [
    {
        question : "What is 5 + 3?",
        answers : [
            "10", "8", "14", "53"    
        ],
        correctAnswer : 1
    },
    {
        question : "What is 10 - 4?",
        answers : [
            "20", "9", "6", "14"
        ],
        correctAnswer : 2
    },
    {
        question : "What animal makes the sound 'moo'?",
        answers : [
            "tiger", "lion", "shark", "cow"
        ],
        correctAnswer : 3
    },
    {
        question : "If a square has a perimeter of 36, what is the length of one side?",
        answers : [
            "9", "10", "12", "15"
        ],
        correctAnswer : 0
    }
];

// set up variables
const question1Text = document.getElementById("question1-text");
const answer1Button = document.getElementById("answer1");
const answer2Button = document.getElementById("answer2");
const answer3Button = document.getElementById("answer3");
const answer4Button = document.getElementById("answer4");
const feedbackP = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

// hide feedback paragraph on page load
feedbackP.style.visibility = "hidden";

// populate fields with first question
question1Text.innerText = questions[0].question;
answer1Button.innerText = questions[0].answers[0];
answer2Button.innerText = questions[0].answers[1];
answer3Button.innerText = questions[0].answers[2];
answer4Button.innerText = questions[0].answers[3];

// event listeners for each button
answer1Button.addEventListener("click", () => {
    feedbackP.style.visibility = "visible";
    feedbackP.innerText = "Your answer is incorrect";
});

answer2Button.addEventListener("click", () => {
    feedbackP.style.visibility = "visible";
    feedbackP.innerText = "Your answer is correct";
});

answer3Button.addEventListener("click", () => {
    feedbackP.style.visibility = "visible";
    feedbackP.innerText = "Your answer is incorrect";
});

answer4Button.addEventListener("click", () => {
    feedbackP.style.visibility = "visible";
    feedbackP.innerText = "Your answer is incorrect";
});

// loop for next button event listener
// TODO: define showQuestion() function
nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    feedbackP.textContent = "";
  }
});
