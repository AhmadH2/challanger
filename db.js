

let topics = [];
let quizes = [];
let questions = [];
let optionsFlags = [1, 0];

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

class Option{
    constructor(text, isCorrect) {
        this.text = text;
        this.isCorrect = isCorrect;
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
    let options = saveOptions();

    questions.push(new Question(title, topic, options));
    localStorage.setItem("questions", JSON.stringify(questions));
    document.getElementById('questionTitle').value = '';
    for (let i = 0; i < options.length; i++) {
        document.getElementById(`opt${i}`).value = '';
    }
}

let saveOptions = () => {
    let options = [];
    for (let i = 0; i < optionsFlags.length; i++) {
        optionText = document.getElementById(`opt${i}`).value;
        optionFlag = optionsFlags[i];
        options.push(new Option(optionText, optionFlag));
    }
    return options;
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
    let quizsHtml = `<tr>
                    <th class="th">Title</th>
                    <th class="th">Topic</th>
                    <th class="th"># of Questions</th>
                </tr>`;

    quizes.forEach(quiz => quizsHtml += `<tr><td>${quiz.title}</td><td>${quiz.topic}
    </td><td>${quiz.numOfQuestions}</td></tr>`);
    document.getElementById('quizesList').innerHTML = quizsHtml;
}

let readQuestions = () => {
    let questionHtml = `<tr>
                <th class="th">Title</th>
                <th class="th">Topic</th>
                <th class="th">Options</th>
                </tr>`;
    let opt = '';

    for(let i=0; i<questions.length; i++){
        questionHtml += `<tr><td>${questions[i].title}</td><td>
        ${questions[i].topic}</td><td><table>`;
        
        for(let j=0; j< questions[i].options.length; j++){
            questionHtml += `<tr><td>${questions[i].options[j].text}</td><td>
            ${questions[i].options[j].isCorrect}</td></tr>`;
        }
        questionHtml += '</table></td></tr>';
    }
    
    document.getElementById('questionsList').innerHTML = questionHtml;
}

let showOptions = () => {
    let optionsHtml = `<div>
                        <input type="text" class="text-box" id="opt0">
                        <i class="fa fa-plus-circle fa0" onclick=addOption()></i>
                        <i class="fa fa-check-circle fa1"></i>
                    </div>
                    <div>
                        <input type="text" class="text-box" id="opt1">
                        <i class="fa fa-minus-circle fa0"  onclick=removeOption()></i>
                        <i class="fa fa-check-circle fa${optionsFlags[1]}" onclick=setCorrectOption(1)></i>
                    </div>`;
    for (let i = 2; i < optionsFlags.length; i++) {
        
        optionsHtml += `<div>
                        <input type="text" class="text-box" id="opt${i}">
                        <i class="fa fa-minus-circle fa0" onclick=removeOption()></i>
                        <i class="fa fa-check-circle fa${optionsFlags[i]}" onclick=setCorrectOption(${i})></i>
                    </div>`;
    }
    document.getElementById('optionsTextBoxes').innerHTML = optionsHtml;
}

let addOption = () => {
    optionsFlags.push(0);
    updateOptions(1);
}
    

let updateOptions = (fix=0) => {

    let values = [];

    for(let i=0; i<optionsFlags.length - fix; i++) {
        console.log(document.getElementById(`opt${i}`).value);
        values.push(document.getElementById(`opt${i}`).value);
    }
    
    showOptions();
    
    for(let i=0; i<values.length; i++) {
        document.getElementById(`opt${i}`).value = values[i];
    }

}

let setCorrectOption = (index) => {

    if (optionsFlags[index] == 0) {
        optionsFlags[index] = 1;
    }
    else {
        optionsFlags[index] = 0;
    } 

    updateOptions();
}


let removeOption = () => {
    if (optionsFlags.length > 2) {
        optionsFlags.pop();
        updateOptions();
    }

}