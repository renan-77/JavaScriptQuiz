//Calling the items from the html file and assigning them to a variable.
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const nextQuestionButton = document.getElementById('nextQuestion');
var whichQuestion = 0;
var questions = randomNumber(5,10);
var rightAnswers = 0;
var radioForm = document.getElementById('radioButtonsForm');

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
        rightAnswer: "c",
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
        rightAnswer: "d",
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
        rightAnswer: "a",
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
        rightAnswer: "d",
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
        rightAnswer: "a",
        imageId: "img/basic.png"
    },
    {
        //An image should come before that question.
        question:"Who is that Champion?",
        answers: {
            a: "Morgana",
            b: "Lissandra",
            c: "Ashe",
            d: "Vi"
        },
        rightAnswer: "d",
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
        rightAnswer: "c",
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
        rightAnswer: "d",
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
        rightAnswer: "a",
        imageId: "img/basic.png"
    },
    {
        question:"“It's not how much time you have, it's ____ you use it” Fill Ekkos Sentence!",
        answers: {
            textInput: ""
        },
        rightAnswer: "how",
        imageId: "img/basic.png"
    },
]

function showResults(){

}

//Function that get's an array of 5 elements out of 1 to 10 without repetition.
function randomNumber(elements, rangeFromZero){
    //Declare an empty array with number of elements declared above.
    var givenQuestion = new Array(elements);

    //Loops from 0 until the numbers that represents the lenght of the array.
    for(var i=0 ; i < givenQuestion.length ; i++){
        //Creates the random number from 0 until 9 (10 numbers in total) than adds 1 to the result to get from 1 to 10.
        var randomQuestion = Math.floor(Math.random() * rangeFromZero) + 1;

        //Says that if in the generated number is not in the array called givenQuestion to add it in the position "i". 
           if(randomQuestion != givenQuestion[0] && randomQuestion != givenQuestion[1] && randomQuestion != givenQuestion[2] 
                && randomQuestion != givenQuestion[3] && randomQuestion != givenQuestion[4]){
                    givenQuestion[i] = randomQuestion;
           
            //If the number is in the array subtract 1 from i.
            }else{
                i--;
            } 
            //console.log(givenQuestion[i]);
    }return givenQuestion;
}

function countRights(){

    


/*     if(isRightAnswer == rightAnswer){
        rightAnswers++;
    } */
}

function setAnswer(){
    var checkA = document.getElementById("checkA");
    var checkB = document.getElementById("checkB");
    var checkC = document.getElementById("checkC");
    var checkD = document.getElementById("checkD");
    var finalQuestions = questions;
    var isRightAnswer = document.getElementById('answers').value;
    var answerChoiceA = checkA.value;
    var answerChoiceB = checkB.value;
    var answerChoiceC = checkC.value;
    var answerChoiceD = checkD.value;

    if(checkA.checked){
        isRightAnswer = answerChoiceA;
    }
    else if(checkB.checked){
        isRightAnswer = answerChoiceB;
    }
    else if(checkC.checked){
        isRightAnswer = answerChoiceC;
    }
    else if(checkD.checked){
        isRightAnswer = answerChoiceD;
    }else{
      /*   isRightAnswer = ""; */
    }

    console.log(isRightAnswer);

}

//Tests for the buttons and array.
function testingTexting(){
    //assigning variables to the id's.
    var firstHeaderChange = document.getElementById("firstHeader");
    var secondHeaderChange = document.getElementById("secondHeader");
    var optionA = document.getElementById("optionA");
    var optionB = document.getElementById("optionB");
    var optionC = document.getElementById("optionC");
    var optionD = document.getElementById("optionD");
    var checkA = document.getElementById("checkA");
    var checkB = document.getElementById("checkB");
    var checkC = document.getElementById("checkC");
    var checkD = document.getElementById("checkD");
    var showAnswers = document.getElementById("answers");
    var nameInput = document.getElementById("nameInput").value;
    var hideNameInput = document.getElementById("nameInput");
    var hideNameInputText = document.getElementById("nameInputText");
    var finalQuestions = questions;
    var answerChoiceA = quizQuestions[finalQuestions[whichQuestion]].answers.a;
    var answerChoiceB = quizQuestions[finalQuestions[whichQuestion]].answers.b;
    var answerChoiceC = quizQuestions[finalQuestions[whichQuestion]].answers.c;
    var answerChoiceD = quizQuestions[finalQuestions[whichQuestion]].answers.d;
   // var isRightAnswer = document.getElementById('answers').value;
    

    //Starts the main function if the user input his/her name.
    if(nameInput != "" && nameInput != "INPUT YOUR NAME" ){

        //CSS display changes.
        showAnswers.style.display = "block"; 
        hideNameInput.style.display = "none";
        hideNameInputText.style.display = "none";

        //console.log(finalQuestions);

        //Using innerHTML to change the content from the html for the ones in the sets of questions.
        firstHeaderChange.innerHTML = quizQuestions[finalQuestions[whichQuestion]].question;
        secondHeaderChange.innerHTML = "Welcome, " +  nameInput + ", Enjoy!";
        optionA.innerHTML = answerChoiceA;
        optionB.innerHTML = answerChoiceB;
        optionC.innerHTML = answerChoiceC;
        optionD.innerHTML = answerChoiceD;


        /*if(checkA.checked){
            isRightAnswer = answerChoiceA;
        }
        else if(checkB.checked){
            isRightAnswer = answerChoiceB;
        }
        else if(checkC.checked){
            isRightAnswer = answerChoiceC;
        }
        else if(checkD.checked){
            isRightAnswer = answerChoiceD;
        }else{
            isRightAnswer = "";
        } */


        //console.log(isRightAnswer);

        var imageChange = document.getElementById("questionImg");
        imageChange.src= quizQuestions[finalQuestions[whichQuestion]].imageId;
        console.log(whichQuestion);
        //console.log(isRightAnswer);

        whichQuestion++;

        checkA.checked = false;
        checkB.checked = false;
        checkC.checked = false;
        checkD.checked = false;

        if(whichQuestion >= 4){
          //  console.log();
        }
        
    //If the Name is not input asks the user for it.
    }else{
        alert("Please input your name!");
    }
}


