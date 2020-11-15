let topics = ['topic1', 'topic2', 'topic3'];
let quizes = [];
let questions = [];

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
    topic = document.getElementById('topicTextBox').value;
    topics.push(topic);
    localStorage.setItem("topics", JSON.stringify(topics));
    document.getElementById('topicTextBox').value = '';
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
    topics.forEach(quiz => quizsHtml += `<li>${quiz}</li>`);
    document.getElementById('topicsList').innerHTML = quizsHtml;
}

let readQuestions = () => {
    let questionHtml = '';
    topics.forEach(question => questionHtml += `<li>${question}</li>`);
    document.getElementById('topicsList').innerHTML = questionHtml;
}
