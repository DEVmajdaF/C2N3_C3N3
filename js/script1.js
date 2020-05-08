let quest = document.getElementById("form_question");
let back = document.getElementById("back");
let next = document.getElementById("next");
let answers = document.getElementById("answers");
let form = document.getElementById("form");
let elem = document.getElementById("progress-done")
let submit = document.getElementById("submit")
let paragraphResult = document.getElementById("resultat_paragra1")
let preambule = document.getElementById("preambule");
let resultat = document.getElementById("resultat");
let btn = document.getElementById("testbtn")
let prgressBar = document.getElementById("prgressBar")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let modal = document.getElementById("brchr")
let brochurebtn = document.getElementById("information-3-btn")





preambule.style.display = "block"

function shownext() {

    form.classList.remove("hide");
    preambule.style.display = "none"
    span2.classList.remove("hide");

}

// function brochbtn() {
//     if (modal.style.display == "none") {
//         modal.style.display = "block"

//     } else {
//         modal.style.display = "none"
//     }
// };







let usersAnswers = [];
let isBelowThreshold = (currentValue) => currentValue == "Non";
// let facteurGMineur = [usersAnswers[2] >= 39, usersAnswers[7] == "Oui", usersAnswers[10] === "Très fatigué(e)", usersAnswers[10] === "Fatigué(e)"];
// let facteurGMajeur = [usersAnswers[17] === "Oui", usersAnswers[9] === "Oui", usersAnswers[2] <= 35.4];
// let NofacteurPronoS = [usersAnswers[14] === "Non", usersAnswers[15] === "Non", usersAnswers[16] === "Non", usersAnswers[17] === "Non", usersAnswers[18] === "Non", usersAnswers[19] === "Non", usersAnswers[20] === "Non", usersAnswers[21] === "Non", usersAnswers[22] === "Non", ];
let facteurGMineur = [];
let facteurGMajeur = [];
let facteurPronost = [];
let Symptome = [];

let counter = 0;
var resultatMineur = 0;
var resultatMajeur = 0;
var rsltsymptome = 0;




Questions = [

    {
        "question": '<p class="form__question"> Quel est votre âge ? </p>',

        "rep": '<input type="number"  class="form__choice" name="question" placeholder="15 - 110" min="15" max="110" >',
    },

    {
        "question": '<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>',
    },

    {
        "question": '<p class="form__question">Quelle est votre température corporelle ?</p>',
        "rep":

            '<input type="number" class="form__choice" placeholder="34 - 42" min="34" max="42">',
    },

    {
        "question": '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>',
    },

    {
        "question": '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },
    {
        "question": '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },
    {
        "question": '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p>',

        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question"> Actuellement, comment vous vous sentez ? </p>',
        "rep": ' <label for="bien"><input type="radio" id="bien" class="form__choice" name="question" value="bien">Bien<span></span></label><label for="abien"><input type="radio" id="abien" class="form__choice" name="question" value="abien">Assez Bien<span></span></label><label for="fatigue"><input type="radio" id="fatigue" class="form__choice" name="question" value="fatigue">Fatigué(e) <span></span></label><label for="tfatigue"><input type="radio" id="tfatigue" class="form__choice" name="question" value="Tfatigue">Très fatigué(e)<span></span></label>',
    },

    {
        "question": '<p class="form__question">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection </p>',
        "rep": '<input type="number" class="form__choice" name="question"  placeholder="40 - 150" min="40" max="150">',
    },

    {
        "question": '<p class="form__question">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection. </p>',
        "rep": '<input type="number"  class="form__choice" name="question" placeholder="80 - 110" min="80" max="110">',
    },

    {
        "question": '<p class="form__question">Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Êtes-vous diabétique ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Avez-vous ou avez-vous eu un cancer ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Avez-vous une maladie chronique du foie ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Êtes-vous enceinte ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ? </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },

    {
        "question": '<p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive). </p>',
        "rep": '<label for="oui" > <input type="radio" id="oui" class="form__choice" name="question" value="Oui"> Oui   <span class="fake-radio"> </span> </label><label for="non"  class="radio"> <input type="radio" id="non" class="form__choice" name="question" value="Non">Non  <span class="fake-radio"></span>  </label>'
    },


];



// function myMove() {
//     var elem = document.getElementById("progress-done");
//     var width = 0;
//     var id = setInterval(frame, 60);

//     function frame() {
//         if (width === 50) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + "%";

//         }
//     }
// }


function app() {

    next.disabled = true;
    if (quest.innerHTML = Questions[counter].question) {
        back.style.display = "none"
        submit.style.display = "none"
    }

    if (Questions.length === counter) {
        //result

    } else {
        //show question 
        quest.innerHTML = Questions[counter].question;
        //show response

        answers.innerHTML = Questions[counter].rep;
    }

    let inputall = document.querySelectorAll('input.form__choice');

    pushData(inputall)

}



app();

next.addEventListener("click", function () {
    back.style.display = "inline-block"
    next.disabled = true;

    counter++
    //show question 
    quest.innerHTML = Questions[counter].question;
    //show response
    answers.innerHTML = Questions[counter].rep;
    if (counter == Questions.length - 1) {
        back.style.display = "none"
        next.style.display = "none"
        submit.style.display = "block"
    }
    if (usersAnswers[0] <= 15) {
        resultat.classList.remove("hide");
        form.classList.add("hide");
        span3.classList.remove("hide");
        paragraphResult.innerHTML = " Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15."

    }
    let inputall = document.querySelectorAll('input.form__choice');


    // myMove()

    pushData(inputall)
});

back.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        quest.innerHTML = Questions[counter].question;
        answers.innerHTML = Questions[counter].rep;
    }
});

let inputall = document.querySelectorAll('input.form__choice');


function pushData(inputall) {

    // let inputall = document.querySelectorAll('input.form__choice');

    //get the value from the input
    for (let i = 0; i < inputall.length; i++) {
        let answer = inputall[i].value

        inputall[i].addEventListener("change", function () {
                if (inputall[i].type === "number" || inputall[i].type === "text" || inputall[i].type === "radio" && inputall[i].checked == true) {
                    let answer = inputall[i].value
                    console.log(answer)
                    usersAnswers.splice(counter, 1, answer);
                    console.log(usersAnswers)
                    next.disabled = false

                }
            }

            // if (inputall[i].type === "radio" && inputall[i].checked == true) {
            //     let answer = inputall[i].value
            //     console.log(answer)
            //     if (!inputall[i].value) {
            //         alert("please choose One ")
            //     } else {
            //         usersAnswers.splice(counter, 1, answer);
            //         console.log(usersAnswers)

            //     }
            // }


        );

    }
};


submit.addEventListener("click", function () {


    for (let i = 0; i < usersAnswers.length; i++) {
        //facteurmineurs
        if (i == 2) {
            facteurGMineur.push(usersAnswers[i]);
            facteurGMajeur.push(usersAnswers[i]);
        }
        if (i == 7 || i == 10) {
            facteurGMineur.push(usersAnswers[i])
        }
        //facteurmineurs
        if (i == 8 || i == 9) {
            facteurGMajeur.push(usersAnswers[i])
        }
        //facteurspronosti
        if (i >= 13 && i <= 22) {
            facteurPronost.push(usersAnswers[i])
        }
        //symptome
        if (i >= 0 && i <= 10) {
            Symptome.push(usersAnswers[i])

        }
    }
    //resultat Mineur
    if (
        facteurGMineur[0] >= 39 ||
        facteurGMineur[1] === "Oui" ||
        facteurGMineur[2] === "fatigue" ||
        facteurGMineur[2] === "tfatigue"
    ) {

        resultatMineur++

    }

    //resultat Majeur

    if (
        facteurGMajeur[0] <= 35.4 ||
        facteurGMajeur[1] === "Oui" ||
        facteurGMajeur[2] === "Oui"

    ) {

        resultatMajeur++

    }
    //resultat Symptme


    if (
        facteurGMajeur[1] === "Oui" ||
        facteurGMajeur[3] === "Oui" ||
        facteurGMajeur[4] === "Oui" ||
        facteurGMajeur[5] === "Oui" ||
        facteurGMajeur[6] === "Oui" ||
        facteurGMajeur[7] === "Oui" ||
        facteurGMajeur[8] === "Oui" ||
        facteurGMajeur[9] === "Oui" ||
        facteurGMajeur[10] === "Oui" ||
        facteurGMajeur[11] === "Oui"

    ) {
        rsltsymptome++
    }









    //algorithme  premier cas  
    if ((usersAnswers[1] === "Oui") || (usersAnswers[3] === "Oui" && usersAnswers[5] === "Oui") || (usersAnswers[3] === "Oui" && usersAnswers[4] === "Oui") || (usersAnswers[6] === "Oui")) {

        const nonvalue = (currentValue) => currentValue == "Non";

        console.log(facteurPronost.every(nonvalue)); // expected output: true
        if (facteurPronost.every(nonvalue) === true) {
            if ((usersAnswers[2] > 35.4 && usersAnswers[2] < 39) && (usersAnswers[8] === "Non") && (usersAnswers[9] === "Non") && usersAnswers[0] < 50) {

                paragraphResult.innerHTML = "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes"
            } else if ((usersAnswers[2] > 35.4 && usersAnswers[2] < 39) && (usersAnswers[8] === "Non") && (usersAnswers[9] === "Non") && (usersAnswers[0] >= 50 && usersAnswers[0] <= 69) && resultatMineur >= 1) {

                paragraphResult.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile "
            }
        } else if (facteurPronost.every(nonvalue) === false) {
            if ((usersAnswers[2] > 35.4 && usersAnswers[2] < 39) && (usersAnswers[8] === "Non") && (usersAnswers[9] === "Non")) {
                paragraphResult.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile"

            } else if (resultatMineur === 1) {
                paragraphResult.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile "

            } else if (resultatMineur >= 2) {
                paragraphResult.innerHTML = "appel 141 "
            }

        } else if ((facteurPronost.every(nonvalue) === true || facteurPronost.every(nonvalue) === false) && resultatMajeur >= 1) {
            paragraphResult.innerHTML = "appel 141, Pour tout patient orienté vers une téléconsultation ou médecin généraliste : préciser “appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.”"

        }

    }
    //algorithme  2eme  cas 
    else if ((usersAnswers[1] === "Oui") && (usersAnswers[3] === "Oui")) {
        if (facteurPronost.every(nonvalue) === true) {
            if (resultatMajeur === 0 && resultatMineur >= 1) {
                paragraphResult.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile"

            }

        } else if (facteurPronost.every(nonvalue) === false) {
            if (resultatMajeur === 0 && resultatMineur === 0) {
                paragraphResult.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile"

            } else if (resultatMineur >= 1) {
                paragraphResult.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile"

            } else if (resultatMineur >= 1) {
                paragraphResult.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile"

            } else if (resultatMineur >= 2) {
                paragraphResult.innerHTML = "appel 141 "

            }



        }



    }
    //  algorithme  3eme  cas
    if (usersAnswers[1] === "Oui" || usersAnswers[3] === "Oui" || usersAnswers[4] === "Oui" || usersAnswers[5] === "Oui") {

        if (resultatMajeur === 0) {
            paragraphResult.innerHTML = "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute. "

        } else if (resultatMajeur >= 1 || facteurPronost.every(nonvalue) === false) {
            paragraphResult.innerHTML = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. "

        }


    }

    if (rsltsymptome === 0) {
        paragraphResult.innerHTML = "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil."
    };


    form.classList.add("hide");
    resultat.classList.remove("hide");
    span3.classList.remove("hide");

});











//facteurGMineur
// if (counter === 2) {
//     let answer = inputall[i].value
//     facteurGMineur.push(answer);
//     facteurGMajeur.push(answer);
//     console.log(facteurGMineur)
// }
// if (counter === 7) {
//     let answer = inputall[i].value
//     facteurGMineur.splice(1, 1, answer);
//     console.log(facteurGMineur)
// }
// if (counter === 10) {
//     let answer = inputall[i].value
//     facteurGMineur.splice(2, 1, answer);
//     console.log(facteurGMineur)
// }
// //facteurGMajeur
// if (counter === 2) {
//     let answer = inputall[i].value
//     facteurGMajeur.splice(0, 1, answer);
//     console.log(facteurGMajeur)
// }
// if (counter === 9) {
//     let answer = inputall[i].value
//     facteurGMajeur.splice(1, 1, answer);
//     console.log(facteurGMajeur)
// }
// if (counter === 17) {
//     let answer = inputall[i].value
//     facteurGMajeur.splice(2, 1, answer);
//     console.log(facteurGMajeur)
// }

// if (counter >= 14 && counter < 22) {
//     let answer = inputall[i].value
//     facteurPronost.splice(0, 1, answer);
//     console.log(facteurPronost)
// }
// for (var i = 0; i < counter.length; i++) {
//     if (counter === 2) {
//         let answer = inputall[i].value
//         facteurGMineur.push(i, 1, answer);
//     }



// }