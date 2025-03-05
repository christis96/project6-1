// function addRespect() {

// };

// function subRespect() {

// };

function checkGreeting(greeting) {

    let ignoreResponse = "ikke si noe";
    let friendlyResponse = "hei";
    let aggressiveResponse = "fuck off"

    if (randomSituationIndex == 0){            


        if (greeting == friendlyResponse && respect < 75) {
            respect -= 25;
        } else if (greeting == friendlyResponse && respect > 75) {
            //TODO: push en item inn i car-inventory ;
        } else {
            respect += 0

        }
    }
    updateView();
};

function checkAction() {


};

function randomSituation() {





    updateView();
}