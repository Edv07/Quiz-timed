// store questions and add questions
const questions = [
    {
      question: "1/10 What is HTML?",
      answers: {
        a: "Hyper Text Markup Language",
        b: "Hyper texting mediocre logistics",
        c: "Hyper texts mashup language",
        d: "Hyper typer mapping logo"
      },
      correctAnswer: "a"
    },
    {
      question: "2/10 What is CSS?",
      answers: {
        a: "Cascading Style Sheets",
        b: "Cascading Sorting System",
        c: "Cascading Selectors Script",
        d: "Cascading Special Styles"
      },
      correctAnswer: "a"
    },
    {
      question: "3/10 What is JavaScript?",
      answers: {
        a: "A live language",
        b: "A programming language",
        c: "A markup language",
        d: "A styling language"
      },
      correctAnswer: "b"
    },
    {
    question: "4/10 What is a URL?",
     answers: {
       a: "Universe routing linking",
       b: "Uniform Resource Locator",
       c: "Unlimited routing lanes",
       d: "Ultimate rapid links"
        },
        correctAnswer: "b"
      },
    {
    question: "5/10 what does div stand for in in HTML",
     answers: {
       a: "divisible",
       b: "division",
       c: "dividable",
       d: "diva"
        },
        correctAnswer: "b"
      },
    {
    question: "6/10 which of these are not HTML elements",
     answers: {
       a: "normal elements",
       b: "raw text elements",
       c: "strict elements",
       d: "void elements"
        },
        correctAnswer: "c"
      },
    {
    question: "7/10 what does nav stand for in html",
     answers: {
       a: "navigation links",
       b: "navigator links",
       c: "navvies links",
       d: "navy blue"
        },
        correctAnswer: ""
      },
    {
    question: "8/10 what does border-color do in css",
     answers: {
       a: " changes the backround ",
       b: " colors the blank spaces ",
       c: " Sets the color of the four borders ",
       d: " something with color "
        },
        correctAnswer: "c"
      },
    {
    question: "9/10 which is NOT a concept of object oriented programming",
     answers: {
       a: "Encapsulation",
       b: "metrication",
       c: "Inheritance",
       d: "Data abstraction"
        },
        correctAnswer: "b"
      },
    {
    question: "10/10 whats 2 + 2",
     answers: {
       a: "1",
       b: "2",
       c: "3",
       d: "4 this was a test question i left in"
        },
        correctAnswer: "d"
      },







  ];
  // starting variables for the quiz to start off with
  // current question will be the idex for the array of quiz questions to deisplay the next question 0 = 1st questions 1 = 2nd question
  // score just goes up if the answer chosen with correct wrong = +0 & correct = +1 to the score shows at the end of the quiz
  // timeleft starts a counter 60 = 60 seconds that counts down when the quiz starts and answers are wrong when timeleft goes down to 0 the quiz ends
  // 
  // 
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval = null;
  
  
  function displayQuestion() {
    document.getElementById("quizArea").innerHTML = questions[currentQuestion].question;
    const answers = questions[currentQuestion].answers;
    let answerList = "";
    for (let key in answers) {
      answerList += `<input type='radio' name='answer' value='${key}'> ${answers[key]}<br>`;
    }
    document.getElementById("choices").innerHTML = answerList;
  }
  
  function checkAnswer() {
    const userAnswer = document.querySelector("input[name='answer']:checked");
    if (!userAnswer) {
      return;
    }
    if (userAnswer.value === questions[currentQuestion].correctAnswer) {
      score++;
    } else {
      timeLeft -= 7;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endGame();
    }
  }
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }
  
  function endGame() {
    clearInterval(timerInterval);
    document.getElementById("quizArea").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("submit").disabled = true;
    document.getElementById("result").innerHTML = `You got ${score} out of ${questions.length} questions correct.`;
  }
  
  displayQuestion();
  startTimer();
  