//Calling the items from the html file and assigning them to a variable.
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const nextQuestionButton = document.getElementById('nextQuestion');
var whichQuestion = 0;
var questions = randomNumber(6,10);
var choosenAnswer = "";
var radioForm = document.getElementById('radioButtonsForm');
var yasuoinputedAnswer = "";
var confirmAnswer = "";
var answersRight = 0;
var ekkoinputedAnswer = "";
var isThatRight = false;


//Quiz Question inside an array of objects.
const quizQuestions = [ 
    {
        question: "Who is the champion that can go back in time?",
        answers: {
            a: "Shaco",
            b: "Lissandra",
            c: "Ekko",
            d: "Gnar"
        },
        rightAnswer: "Ekko",
        imageId: "img/basic.png"
    },
    {
        question:"Where is Garen from?",
        answers: {
            a: "Freljord",
            b: "Noxus",
            c: "Zaun",
            d: "Demacia"
        },
        rightAnswer: "Demacia",
        imageId: "img/basic.png"
    },
    {
        question:"How is Fizz Ultimate Skill Called?",
        answers: {
            a: "Chum the Waters",
            b: "Big Shark",
            c: "Urchin Strike",
            d: "Playful / Trickster"
        },
        rightAnswer: "Chum the Waters",
        imageId: "img/basic.png"
    },
    {
        question:"Which champion has the highest base HP at level 1 with no items, runes, or masteries equipped?",
        answers: {
            a: "Trundle",
            b: "Alistar",
            c: "Garen",
            d: "Tryndamere"
        },
        rightAnswer: "Tryndamere",
        imageId: "img/basic.png"
    },
    {
        question:"Which Yasuo’s Ability is called Steel Tempest?",
        answers: {
            a: "q",
            b: "w",
            c: "e",
            d: "r"
        },
        rightAnswer: "q",
        imageId: "img/basic.png"
    },
    {
        question:"Who is that Champion?",
        answers: {
            a: "Morgana",
            b: "Lissandra",
            c: "Ashe",
            d: "Vi"
        },
        rightAnswer: "Vi",
        imageId: "img/vi.jpg"
    },
    {
        question:"Which Champion was released in February, 2016?",
        answers: {
            a: "Ekko",
            b: "Aurelion Sol",
            c: "Jhin",
            d: "Ornn"
        },
        rightAnswer: "Ekko",
        imageId: "img/basic.png"
    },
    {
        question:"How many Champions are in League Of Legends (Jan, 2019)?",
        answers: {
            a: "140",
            b: "142",
            c: "144",
            d: "143"
        },
        rightAnswer: "143",
        imageId: "img/basic.png"
    },
    {
        question:"“Wealth is my kind of burden” Whose is that quote?",
        answers: {
            a: "Sivir",
            b: "LeBlanc",
            c: "Galio",
            d: "Twisted Fate"
        },
        rightAnswer: "Sivir",
        imageId: "img/basic.png"
    },
    {
        question:"Ekko says: --It's not how much time you have, it's ____ you use it-- fill that sentence!",
        answers: {
            textInput: ""
        },
        rightAnswer: "how",
        imageId: "img/basic.png"
    }
]

function genResults(){
    var percentageOfRights = "0";

    document.getElementById('yasuoSkills').style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("nameInputText").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
    document.getElementById('ekkoInput').style.display = "none";

    if(answersRight == 0){
        percentageOfRights = "0%";
    }
    if(answersRight == 1){
        percentageOfRights = "20%";
    }
    if(answersRight == 2){
        percentageOfRights = "40%";
    }
    if(answersRight == 3){
        percentageOfRights = "60%";
    }
    if(answersRight == 4){
        percentageOfRights = "80%";
    }
    if(answersRight == 5){
        percentageOfRights = "100%";
    }
    
    document.getElementById("firstHeader").innerHTML = "That means a percentage of: " + percentageOfRights;
    document.getElementById("secondHeader").innerHTML = "You got: " + answersRight + " right answers!";


    console.log("You got: " + answersRight + " right answers!");

}

//Function that get's an array of 5 elements out of 1 to 10 without repetition.
function randomNumber(elements, rangeFromZero){
    //Declare an empty array with number of elements declared above.
    var givenQuestion = new Array(elements);

    //Loops from 0 until the numbers that represents the lenght of the array.
    for(var i=0 ; i < givenQuestion.length ; i++){
        //Creates the random number from 0 until 9 (10 numbers in total) than adds 1 to the result to get from 1 to 10.
        var randomQuestion = Math.floor(Math.random() * rangeFromZero);
        console.log(randomQuestion);

        //Says that if in the generated number is not in the array called givenQuestion to add it in the position "i". 
           if(randomQuestion != givenQuestion[0] && randomQuestion != givenQuestion[1] && randomQuestion != givenQuestion[2] 
                && randomQuestion != givenQuestion[3] && randomQuestion != givenQuestion[4] && randomQuestion != givenQuestion[5]){
                    givenQuestion[i] = randomQuestion;
           
            //If the number is in the array subtract 1 from i.
            }else{
                i--;
            } 
    }
    console.log(`Given question : ${givenQuestion}`);
    return givenQuestion;
}


//Yasuo question functions.
function yasuoQuestionQ(){
        yasuoinputedAnswer = "q";
        return yasuoinputedAnswer;
}
function yasuoQuestionW(){
        yasuoinputedAnswer = "w";
        return yasuoinputedAnswer;
}
function yasuoQuestionE(){
        yasuoinputedAnswer = "e";
        return yasuoinputedAnswer;
}
function yasuoQuestionR(){
        yasuoinputedAnswer = "r";
        return yasuoinputedAnswer;
}

function setEkkoAnswer(){
    ekkoinputedAnswer = document.getElementById('ekkoInput').value;
    return ekkoinputedAnswer;
}

//Tests for the buttons and array.
function buildQuiz(){
    //assigning variables to the id's.
    var firstHeaderChange = document.getElementById("firstHeader");
    var secondHeaderChange = document.getElementById("secondHeader");
    var optionA = document.getElementById("optionA");
    var optionB = document.getElementById("optionB");
    var optionC = document.getElementById("optionC");
    var optionD = document.getElementById("optionD");
    var showAnswers = document.getElementById("answers");
    var nameInput = document.getElementById("nameInput").value;
    var hideNameInput = document.getElementById("nameInput");
    var hideNameInputText = document.getElementById("nameInputText");
    var inputedAnswer = document.getElementById('answers').value;
    
    //Hardcoding complex variables.
    var finalQuestions = questions;
    var answerChoiceA = quizQuestions[finalQuestions[whichQuestion]].answers.a;
    var answerChoiceB = quizQuestions[finalQuestions[whichQuestion]].answers.b;
    var answerChoiceC = quizQuestions[finalQuestions[whichQuestion]].answers.c;
    var answerChoiceD = quizQuestions[finalQuestions[whichQuestion]].answers.d;
    finishQuiz = false;

    //Starts the main function if the user input his/her name.
    if(nameInput != "" && nameInput != "INPUT YOUR NAME" ){

        console.log("Quiz Started");

        if(quizQuestions[finalQuestions[whichQuestion]].question == "Which Yasuo’s Ability is called Steel Tempest?"){
            document.getElementById('yasuoSkills').style.display = "inline";
            document.getElementById('ekkoInput').style.display = "none";
            showAnswers.style.display = "none";
            hideNameInput.style.display = "none";
            hideNameInputText.style.display = "none";

        }else if(quizQuestions[finalQuestions[whichQuestion]].question == "Ekko says: --It's not how much time you have, it's ____ you use it-- fill that sentence!"){
            document.getElementById('ekkoInput').style.display = "block";
            document.getElementById('yasuoSkills').style.display = "none";
            showAnswers.style.display = "none";
            hideNameInput.style.display = "none";
            hideNameInputText.style.display = "none";
            ekkoinputedAnswer = document.getElementById('ekkoInput').value;
            console.log(ekkoinputedAnswer);

        }else{
        //CSS display changes.
        showAnswers.style.display = "inline-block"; 
        hideNameInput.style.display = "none";
        hideNameInputText.style.display = "none";
        document.getElementById('yasuoSkills').style.display = "none";
        document.getElementById('ekkoInput').style.display = "none";
        }
        
        //Using innerHTML to change the content from the html for the ones in the sets of questions.
        firstHeaderChange.innerHTML = quizQuestions[finalQuestions[whichQuestion]].question;
        secondHeaderChange.innerHTML = "Welcome, " +  nameInput + ", Enjoy!";

        optionA.innerHTML = answerChoiceA;
        optionB.innerHTML = answerChoiceB;
        optionC.innerHTML = answerChoiceC;
        optionD.innerHTML = answerChoiceD;

        //Declaring the variables accordingly with the choice of answer.
        
        optionA.value = answerChoiceA;
        optionB.value = answerChoiceB;
        optionC.value = answerChoiceC;
        optionD.value = answerChoiceD;

        //Changing the Question Image.
        var imageChange = document.getElementById("questionImg");
        imageChange.src= quizQuestions[finalQuestions[whichQuestion]].imageId;
    
        //Logs on the console to see the behaviour of the main variables.
        console.log(whichQuestion);
        console.log("Inputed Answer:  " + inputedAnswer);

        if(inputedAnswer == confirmAnswer){
            isThatRight = true;
        }
        
        //Increasing the variable that goes trough the array of questions (index).
        
        //If the array index of the elements is equals or greater than 4 it stops the index from increasing.
        if(whichQuestion > 0){
            confirmAnswer = quizQuestions[finalQuestions[whichQuestion - 1]].rightAnswer;
        }
        else{
            confirmAnswer = quizQuestions[finalQuestions[whichQuestion]].rightAnswer;
        }
        if(yasuoinputedAnswer != ""){
            inputedAnswer = yasuoinputedAnswer;
            console.log(inputedAnswer);
            if(inputedAnswer == confirmAnswer){
                isThatRight = true;
            }
        }

        if(ekkoinputedAnswer != ""){
            console.log(ekkoinputedAnswer)
            inputedAnswer = ekkoinputedAnswer;
            if(inputedAnswer == confirmAnswer){
                isThatRight = true;
            }
        } 

        if(inputedAnswer != ""){
            console.log("Expected answer: " + confirmAnswer);    
            console.log("And the answer is: " + isThatRight);
        }

        if(whichQuestion == 5){
            document.getElementById("submitButton").style.display = "block";
            document.getElementById("nextButton").style.display = "none";
        }else{
        whichQuestion++;
        }

    }else{
        alert("Please input your name!");
        }
    if(isThatRight == true){
        answersRight++;
    }
}

