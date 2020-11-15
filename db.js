

let topics = ['topic1', 'topic2', 'topic3'];
let quizes = [];
let questions = [];
let options = [0,1];

class Question{
    constructor(title, topic, options) {
        this.title = title;
        this.topic = topic;
        this.options = options;
    }
}

class Quize{
    constructor(title, topic, numOfQuestions) {
        this.title = title;
        this.topic = topic;
        this.numOfQuestions = numOfQuestions;
    }
}

if(localStorage.getItem('topics')){
    topics = JSON.parse(localStorage.topics);
}

if (localStorage.getItem('quizes')) {
    quizes = JSON.parse(localStorage.quizes);
}

if (localStorage.getItem('questions')) {
    questions = JSON.parse(localStorage.questions);
}

let addTopic= () => {
    topic = document.getElementById('topicTitle').value;
    topics.push(topic);
    localStorage.setItem("topics", JSON.stringify(topics));
    document.getElementById('topicTitle').value = '';
}

let addQuize = () => {
    let title = document.getElementById('quizeTitle').value;
    let topicId = document.getElementById('topicsOfQuiz').selectedIndex;
    let topic = document.getElementById("topicsOfQuiz").options[topicId].innerHTML;
    let numOfQuestions = document.getElementById('numOfQuestions').value;
    quizes.push(new Quize(title, topic, numOfQuestions));
    localStorage.setItem("quizes", JSON.stringify(quizes));
    document.getElementById('quizeTitle').value = '';
    document.getElementById('numOfQuestions').value = '';
}

let addQuestion = () => {
    let title = document.getElementById('questionTitle').value;
    let topicId = document.getElementById('topicsOfQuestion').selectedIndex;
    let topic = document.getElementById("topicsOfQuestion").options[topicId].innerHTML;
    let opt = [];
    for(let i=0; i<options.length; i++) {
        opt[i] = document.getElementById(`opt${i}`).value;
    }
    questions.push(new Question(title, topic, opt));
    localStorage.setItem("questions", JSON.stringify(questions));
    document.getElementById('questionTitle').value = '';
    for (let i = 0; i < options.length; i++) {
        document.getElementById(`opt${i}`).value = '';
    }
    console.log(questions[0].title);
}




let readTopics = () => {
    let topicsHtml = '';
    topics.forEach(topic => topicsHtml += `<li>${topic}</li>`);
    document.getElementById('topicsList').innerHTML = topicsHtml;
}

let showTopics = (id) => {
    let topicsHtml = '';
    topics.forEach(topic => topicsHtml += `<option>${topic}</option>`);
    document.getElementById(id).innerHTML = topicsHtml;
}

let readQuizes = () => {
    let quizsHtml = '';
    quizes.forEach(quiz => quizsHtml += `<li>${quiz.title}, ${quiz.topic}</li>`);
    document.getElementById('quizesList').innerHTML = quizsHtml;
}

let readQuestions = () => {
    let questionHtml = '';
    questions.forEach(question => questionHtml += `<li>Title: ${question.title},Topic: ${question.topic}, Options: ${question.options}</li>`);
    document.getElementById('questionsList').innerHTML = questionHtml;
}

let showOptions = () => {
    let optionsHtml = '';
    for(let i=0; i<options.length; i++) {
        optionsHtml += `<div>
                        <input type="text" class="text-box" id="opt${i}">
                        <button class="option-btn-add" onclick=addOption()>+</button>
                        <button class="option-btn-remove" onclick=deleteOption()>X</button>
                    </div>`;
    }
    document.getElementById('optionsTextBoxes').innerHTML = optionsHtml;
}

let addOption = () => {
    options.push(options.length);
    showOptions();
}

let deleteOption = () => {
    if(options.length > 0) {
        options.pop();
        showOptions();
    }

}