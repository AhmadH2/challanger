let topics = ['topic1', 'topic2', 'topic3'];
let quizes = [];
let questions = [];

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
    let topic = document.getElementById("topicsOfQuestion").options[majorId].innerHTML;
    let numOfQues = document.getElementById()
    topics.push(new Question(title, topic));
    localStorage.setItem("topics", JSON.stringify(topics));
    document.getElementById('topicTitle').value = '';
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
    topics.forEach(question => questionHtml += `<li>${question}</li>`);
    document.getElementById('topicsList').innerHTML = questionHtml;
}
