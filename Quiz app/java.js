let questions = [{
    'que': 'which of the following is a markup language ?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'What year was javascript launched ?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'None of the above',
    'correct': 'b'
},
{
    'que': 'What does CSS stand for ?',
    'a': 'Hyper text markup',
    'b': 'Cascading style sheet',
    'c': 'Jason object notation',
    'd': 'None of the above',
    'correct': 'b'
}];

let index = 0;
let quesbox = document.getElementById('ques');
let OptionInputs = document.querySelectorAll('.options');
let total = questions.length;
let right = 0, wrong = 0;

let Loadquestion = () => {
    if (index == total) {
        return endQuiz();
    }
    reset();
    let data = questions[index];
    quesbox.innerText = ` ${index + 1}) ${data.que}`;
    OptionInputs[0].nextElementSibling.innerText = `${data.a}`
    OptionInputs[1].nextElementSibling.innerText = `${data.b}`
    OptionInputs[2].nextElementSibling.innerText = `${data.c}`
    OptionInputs[3].nextElementSibling.innerText = `${data.d}`
}

let submitQuiz = () => {
    let data = questions[index];
    let ans = getAnswer();  
    if (ans == data.correct) {
        right++
    }
    else {
        wrong++
    }
    index++;
    Loadquestion();
}

let getAnswer = () => {
    let answer;
    OptionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

let reset = () => {
    OptionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

let endQuiz = () => {
    document.getElementById('box').innerHTML = `<h2>Thank you for playing</h2>
    <p> You score ${right} out of ${total}`
}

Loadquestion();