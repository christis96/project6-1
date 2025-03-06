updateView();
function updateView() {
    app.innerHTML =/*HTML*/ `
    
    <div>Respect: ${respect}</div>
    <div>${situations[randomSituationIndex].greeting}</div>
    <div>${quest}</div>
    <input onchange="checkGreeting(this.value)" type="text">
    <button onclick="randomSituation()" >Neste</button>
    <div></div>
    `;

};

