var
    formQuestion = document.getElementById("form_question"),
    inputText = document.getElementById("inputtext"),
    nextnext = document.getElementById("next"),
    back = document.getElementById("back"),
    form1 = document.getElementById("form"),
    element0 = document.getElementById("a0"),
    element1 = document.getElementById("a1"),
    checkelement0 = document.getElementById("inp0"),
    checkelement1 = document.getElementById("inp1"),
    inputs = document.getElementsByClassName("inputs"),
    inputs0 = document.getElementById("inputs0"),
    inputs1 = document.getElementById("inputs1"),
    counter = 0;


// function app() {
//     if (questions[0].question === formQuestion.innerText) {
//         back.style.display = "none"
//     }!
//     if (questions.length === counter) {
//         //form1.style.display = "none";
//     } else {
//         // show question
//         formQuestion.innerHTML = questions[counter].question;
//         // //show choices
//         var answerA = document.getElementById("a0")
//         var answerB = document.getElementById("a1")

//         answerA.innerHTML = questions[counter].answerA;
//         answerB.innerHTML = questions[counter].answerB;
//     }
// }

// app();

// function next() {
//     back.style.display = "block";
//     if (questions[counter].answerA == true) {
//         formQuestion.innerHTML = question2[counter].text

//     } else {
//         formQuestion.innerHTML = questions[counter + 1].text;
//         counter++
//         for (var i = 0; i < 2; i++) {
//             var choic = document.getElementById("a" + i); //choicces0
//             choic.innerText = questions[counter].choices[i];

//         }

//     }
// }







function form(text, choices) {
    this.text = text;
    this.choices = choices;
}

function form2(text, choices) {
    this.text = text;
    this.choices = choices;
}


var userReponse = [];


var questions = [
    new form("Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?", ["OUI", "NON"]), //si ouiii 3ad yban la 2eme question
    new form("Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?", ["SI", "No"]),
    new form("Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?", ["BYE", "ok"]),
    new form("Ces derniers jours, avez-vous un mal de gorge ?", ["love", "happy"]),
    new form("Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.", ["Slytherin", "HufflePuff"]),
    new form("Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?", ["Slytherin", "HufflePuff"]),
    new form("Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?", ["Slytherin", "HufflePuff"]),
    new form("Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Actuellement, comment vous vous sentez ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Êtes-vous diabétique ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Avez-vous ou avez-vous eu un cancer ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Avez-vous une insuffisance rénale chronique dialysée ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Avez-vous une maladie chronique du foie ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Êtes-vous enceinte ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),
    new form("Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"]),

];



var question2 = [
    new form2("Quelle est votre température corporelle ?", ["Temperature"]),

]


function app() {
    if (questions[counter].text === formQuestion.innerText) {
        back.style.display = "none"
    }

    if (questions.length === counter) {
        //form1.style.display = "none";
    } else {
        // show question
        formQuestion.innerHTML = questions[counter].text;
        // //show choices
        for (var i = 0; i < questions[counter].choices.length; i++) {

            var choic = document.getElementById("a" + i); //choicces0
            choic.innerHTML = questions[counter].choices[i];

        }

    }
}





function displayChoices(counter) {
    var choicesList = '<ol type="a">';
    var item;
    var input = '';
    for (var i = 0; i < questions[counter].choices.length; i++) {
        item = '<li>';
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[counter].choices[i];
        item.append(input);
        choicesList.append(item);
    }
    return choicesList;
}





app();

function next() {
    back.style.display = "block";
    if (checkelement0.checked == true) {
        formQuestion.innerHTML = question2[counter].text

    } else {
        formQuestion.innerHTML = questions[counter + 1].text;
        displayChoices(counter + 1)
        counter++


    }

}


function backg() {
    if (counter => 0) {
        counter--;
        formQuestion.innerHTML = questions[counter].text;
        console.log(counter);
    }
}