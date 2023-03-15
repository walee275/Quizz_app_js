
mycorrect = [
    'Back-end Scriping Language',
    'PHP',
    'PHP Framework',
    'Application'
]


let questions = [
    {
        question: 'What is PHP?',
        answers: [
            {
                text: 'Markup Language',
                correct: false
            },
            {
                text: 'Styling Language',
                correct: false
            },
            {
                text: 'Back-end Scriping Language',
                correct: true
            },
            {
                text: 'Front-end Scriping Language',
                correct: false
            }
        ]
    },
    {
        question: 'What is Piece of Cake?',
        answers: [
            {
                text: 'HTML',
                correct: false
            },
            {
                text: 'CSS',
                correct: false
            },
            {
                text: 'JavaScript',
                correct: false
            },
            {
                text: 'PHP',
                correct: true
            }
        ]
    },
    {
        question: 'What is Laravel?',
        answers: [
            {
                text: 'HTML Framework',
                correct: false
            },
            {
                text: 'CSS Framework',
                correct: false
            },
            {
                text: 'JavaScript Framework',
                correct: false
            },
            {
                text: 'PHP Framework',
                correct: true
            }
        ]
    },
    {
        question: 'Full Form Of APP?',
        answers: [
            {
                text: 'html design',
                correct: false
            },
            {
                text: 'Application',
                correct: true
            },
            {
                text: 'JavaScript Application',
                correct: false
            },
            {
                text: 'PHP Application',
                correct: false
            }
        ]
    }
];



const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const questionContainerElement = document.getElementById('question-container');
var optionsbtns = document.querySelectorAll('.options');
let result = [];
let sum = 0;
var score = document.createElement('div');
score.id = "score";



let currentQuestionIndex = 0;
// make an empty array of result

btnStart.addEventListener('click', function () {
    btnStart.classList.add('hide');
    btnNext.classList.remove('hide');

    score.classList.add('hide');
    if (result) {
        result = [];
    };

    sum = 0;

    let singleQuestion = questions[currentQuestionIndex];

    const questionTextElement = document.createElement('div');
    questionTextElement.setAttribute('id', 'question-text');
    questionTextElement.innerText = singleQuestion.question;

    const answersContainerElement = document.createElement('div');
    // answersContainerElement.setAttribute('id', 'answers-container');
    answersContainerElement.id = 'answers-container';

    singleQuestion.answers.forEach(function (value, index) {
        const btnAnswerElement = document.createElement('button');
        btnAnswerElement.classList.add('btn');
        btnAnswerElement.innerText = value.text;
        btnAnswerElement.id = index;
        if (value.correct == true) {
            btnAnswerElement.dataset.correct = value.correct;
        }

        answersContainerElement.append(btnAnswerElement);

        btnAnswerElement.addEventListener('click', function (e) {

            mycorrect.forEach(function (value, index) {
            if (e.target.innerHTML == value) {
                
                if (!result[currentQuestionIndex]) {
                    result.push(1);
                    // console.log('if worked');
                }
                 
            } else {
                // btnElement.classList.add('incorrect');
                    // console.log('else if worked');
                };
            });
            
            for (let i = 0; i < 4; i++) {
                btnElement = document.getElementById(i);
                if (btnElement.dataset.correct == 'true') {

                    btnElement.classList.add('correct');
                } else {

                    btnElement.classList.add('incorrect');
                }
            }
            console.log(result);


        });
    });

    // for (let i = 0; i < 4; i++) {
    //     const btnAnswerElement = document.createElement('button');
    //     btnAnswerElement.classList.add('btn');
    //     btnAnswerElement.innerText = i;
    //     answersContainerElement.append(btnAnswerElement);
    // }

    questionContainerElement.append(questionTextElement);
    questionContainerElement.append(answersContainerElement);
});


btnNext.addEventListener('click', function () {
    questionContainerElement.innerText = '';

    if (questions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;

        let singleQuestion = questions[currentQuestionIndex];
        const questionTextElement = document.createElement('div');
        questionTextElement.setAttribute('id', 'question-text');
        questionTextElement.innerText = singleQuestion.question;

        const answersContainerElement = document.createElement('div');
        // answersContainerElement.setAttribute('id', 'answers-container');
        answersContainerElement.id = 'answers-container';

        singleQuestion.answers.forEach(function (value, index) {
            const btnAnswerElement = document.createElement('button');
            btnAnswerElement.classList.add('btn');
            btnAnswerElement.innerText = value.text;
            btnAnswerElement.id = index;
            if (value.correct == true) {
                btnAnswerElement.dataset.correct = value.correct;
            }
            answersContainerElement.append(btnAnswerElement);


            btnAnswerElement.addEventListener('click', function (e) {

                mycorrect.forEach(function (value, index) {

                    if (e.target.innerHTML == value) {
                        
                        if(result.length ==0){
                            result.unshift(0);
                            // console.log('i am working');
                        }
                        if (!result[currentQuestionIndex]) {
                            result.push(1);
                            // console.log('if worked');
                        }
                         
                    } else {
                        // btnElement.classList.add('incorrect');
                            // console.log('else if worked');
                        }

                });
                for (let i = 0; i < 4; i++) {
                    btnElement = document.getElementById(i);
                    if (btnElement.dataset.correct == 'true') {
                        btnElement.classList.add('correct');
                       
                    } else {
                        btnElement.classList.add('incorrect');
                    }
                   
                }
            });
        });

        questionContainerElement.append(questionTextElement);
        questionContainerElement.append(answersContainerElement);

    } else {

        for (let r = 0; r < result.length; r++) {

            sum += result[r];
        };
        score.classList.remove('hide');
        score.innerHTML = "<b>Your Score is</b>" + " : " + sum + '/' + questions.length;
        questionContainerElement.append(score);
        console.log(result);
        btnStart.classList.remove('hide');
        btnNext.classList.add('hide');
        btnStart.innerText = 'Restart';
        currentQuestionIndex = 0;
    }


});


