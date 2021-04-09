const quizData = [
    {
        question: 'Ile ludzi pracuje w Artifex Mundi?',
        a: '130',
        b: '110',
        c: '90',
        d: '70',
        correct: 'c'
    },{
        question: 'Co znaczy "Artifex Mundi"?',
        a: 'Sztuczny Świat',
        b: 'Artystyczny Twórca',
        c: "Twórca Świata",
        d: 'Artysta Świata',
        correct: 'd'
    },{
        question: 'W którym roku założono Artifex Mundi?',
        a: '2005',
        b: '2006',
        c: '2007',
        d: '2008',
        correct: 'b'
    },{
        question: 'Kto założył Artifex Mundi?',
        a: 'Sylwia Sieczko',
        b: 'Tomasz Grudziński',
        c: 'Konrad Tomaszkiewicz',
        d: 'Marcin Iwiński',
        correct: 'b'
    },{
        question: 'Jak nazywa się najnowsza wydana przez Artifex Mundi gra?',
        a: 'Family Mysteries 3: Zbrodnicza Mentalność',
        b: 'Yuletide Legends: Kto wrobił Mikołaja',
        c: 'Persian Nights 2: Blask Księżyca',
        d: 'Bractwo Tajemnic 8: Powrót do Smoczego Królestwa',
        correct: 'a'
    }
]

const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const question = document.getElementById("pytanie");
const counter = document.getElementById("which");
const odpowiedzi = document.querySelectorAll(".input-radio");
const radios = document.getElementsByName('odp');
const quiz = document.querySelector('.quiz-container');
const resultScreen = document.querySelector('.result-screen');
const result = document.getElementById("result");
const comment = document.getElementById("comment");

let licznik=2;
let numberCorrect = 0;

function newq(x){
    counter.textContent='('+x+'/5)';
    question.textContent = quizData[x-1].question;
    odpowiedzi[0].firstChild.textContent=quizData[x-1].a;
    odpowiedzi[1].firstChild.textContent=quizData[x-1].b;
    odpowiedzi[2].firstChild.textContent=quizData[x-1].c;
    odpowiedzi[3].firstChild.textContent=quizData[x-1].d;

    if(x==5)
    {
        button.textContent="Zakończ"
    }
    licznik++;
    for(let i =0;i<radios.length; i++){
        radios[i].checked=false;
    }
}

button.onclick = function(){

    for(let i =0;i<radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value==quizData[licznik-2].correct){
                numberCorrect++;
            }
        }
    }


    if(licznik<6){
        newq(licznik);
    }
    else{
        let children = quiz.children;
        for(let i = 0;i<children.length;i++)
        {
            let child = children[i];
            child.style.display='none';
        }
        result.textContent="("+numberCorrect+"/5)";
        switch(numberCorrect){
            case 0:
                quiz.style.background="#F53535"
                comment.textContent="Nie masz nawet pojęcia o czym był ten quiz, co?";
                break;
            case 1:
                quiz.style.background="#F58F35"
                comment.textContent="Trafiło się ślepej kurze ziarno";
                break;
            case 2:
                quiz.style.background="#FCD134"
                comment.textContent="Coś dzwoni, ale nie wiadomo w którym kościele.";
                break;
            case 3:
                quiz.style.background="#EAFC34"
                comment.textContent="Zdane, ale ledwo...";
                break;
            case 4:
                quiz.style.background="#77FC34"
                comment.textContent="Nie jest źle, ale mogło być lepiej";
                break;
            case 5:
                quiz.style.background="#14C221"
                comment.textContent="Jesteś prawdziwym fanem/fanką Artifex Mundi!";
                break;
        }
        resultScreen.style.display='block';
        
    }
}

button2.onclick = function(){ 
    console.log("hello");
    window.location.reload();
}
