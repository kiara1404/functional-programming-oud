console.log("script loaded succesfully!");


const surveyAnswers = data;

let onderwerpNaam = "hoogteStudieschuld"
let alleAntwoorden= getAnswerforQuestion(surveyAnswers,onderwerpNaam)



function getAnswerforQuestion(answers, question){
    let answersForQuestion = [];
    for (answer of answers){
        answersForQuestion.push(answer[question]);
    }
    return answersForQuestion;


}


let lowerCaseData = surveyAnswers.map(answers => answers[onderwerpNaam].toLowerCase())
console.log('Lowercase data is', lowerCaseData);

let filterData = [];

lowerCaseData.forEach(newData => {
   
    if(newData.startsWith('g')){
        console.log(newData);
        newData = 'n.v.t.';
        filterData.push(newData);
     }
     else{
     filterData.push(newData);
    }
})



// Zin/antwoorden opsplitsen in array van woorden
// loop over de array van woorden
// Van elk nieuw woord in de array moet de eerste letter een hoofdletter worden
// Breng de woorden weer samen in een zin

//oefenen met simpelere data:

/* let heleZin = 'Dit is een hele zin'; 

//splitsen:
let zinGesplitst = heleZin.split(" ");
console.log(zinGesplitst) // controle in console

let hoofdLetters = zinGesplitst.map(function(word) {
    return word[0].toUpperCase() + word.substring(1)
})

console.log(hoofdLetters.join(" "))  */

//oefenen met een antwoord van de survey data
onderwerpNaam = "lievelingsMuziekNummer";
let onderwerp = getAnswerforQuestion(surveyAnswers,onderwerpNaam);
console.log(onderwerp);

heleZin = onderwerp[0]
console.log(heleZin)
let zinGesplitst = onderwerp[0].split(" ") 

let hoofdLetters = zinGesplitst.map(function(hoofdletter) {
    return hoofdletter[0].toUpperCase() + hoofdletter.substring(1)
})


let samenvoegen = hoofdLetters.join(" ");


// delete alle lege antwoorden
alleAntwoorden = getAnswerforQuestion(surveyAnswers,onderwerpNaam).filter(Boolean);

console.log(alleAntwoorden)

function zinnenSplitsen(){
  let gesplitseAntwoorden = alleAntwoorden.forEach(inzending => {
    let zinGesplitst = inzending.split(" ");

    let hoofdLetters = zinGesplitst.map(function(hoofdletter) {
        return hoofdletter[0].toUpperCase() + hoofdletter.substring(1);
        
        
    })
    let samenvoegen = hoofdLetters.join(" ");
    console.log(samenvoegen)
  })
}
zinnenSplitsen()
