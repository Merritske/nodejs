//EVENT aanmaken
let opslaanBtn = document.getElementById("evenement")
let evenet = document.getElementById("eventnaam")
let eventcontainer = document.getElementById("evenementgegevens")
let waar = document.getElementById("waar")
let wanneer = document.getElementById("wanneer")
let eventGegevens = []
let eventTonen = document.getElementById("gegevensTonen")

//EVENTPLANNER

function opslaan() {
  eventGegevens.push({ wat: evenet.value, waar: waar.value, wanneer: wanneer.value })
  localStorage.setItem("evenementContainer", JSON.stringify(eventGegevens))
  console.log(eventGegevens)
  opslaanBtn.style.display = "none"
  if (opslaanBtn.style.display = "none") {
    //      let txtI = document.createElement("h1")
    //      let txtO = document.createTextNode(`${evenet.value}`)
    // txtI.appendChild(txtO)
    console.log(waar.value, wanneer.value)
    // eventcontainer.innerHTML += `
    // <h1>${evenet.value}</h1>
    // <ul style="list-style-type=none">
    // <li>Waar: ${waar.value}</li>
    // <li>Wanneer: ${wanneer.value}</li>
    // </ul>
    // `
  }

  console.log(eventcontainer)
}
console.log(eventTonen)

//takenlijst - draaiboek
let takenlijst = []
let naamTaak = document.getElementById('naamTaak')
let deadline = document.getElementById('deadline')
let aantalPersonen = document.getElementById('aantalPersonen')
let opmerkingen = document.getElementById('opmerkingen')
let taken = document.getElementById('taken')

function voegTaakToe() {
  takenlijst.push({
    'naamTaak': naamTaak.value,
    'deadline': deadline.value,
    'aantalPersonen': aantalPersonen.value,
    'opmerkingen': opmerkingen
  })
  console.log(takenlijst)
  localStorage.setItem("taakContainer", JSON.stringify(takenlijst))
taken.innerHTML +=
`<tr>
<td>${naamTaak.value}</td>
<td>${deadline.value}</td>
<td>${aantalPersonen.value}</td>
<td>${opmerkingen.value}</td>
</tr>`
}

let selectieTaak = document.getElementById('selectieTaak')

function getevent() {
  console.log(eventcontainer)
  let getEvent = JSON.parse(localStorage.getItem("evenementContainer"))

  getEvent.forEach(element => {

    //   eventTonen.appendChild('ul')
    //  let item = list.appendChild('li')
    //  let itemInhoud = item.textContent(element)

    //om de datum juist te zetten volgens onze notatie, uitgeschreven met voluit de maanden!!!
    //getdate() - getMonth() -getYear()
    eventTonen.innerHTML +=
      `<ul>
   <li>wat: ${element.wat}</li>
 <li>Waar: ${element.waar}</li>
<li>Wanneer: ${element.wanneer}</li>
 </ul>
`
  })
let getTaken = JSON.parse(localStorage.getItem("taakContainer"))
console.log(getTaken)
for(let i=0 ; i< getTaken.length; i++){
  console.log(getTaken[i].naamTaak)
eventTonen.innerHTML +=
`<ul>
<li>taak: ${getTaken[i].naamTaak}</li>
<li>deadline: ${getTaken[i].deadline}</li>
<li>Wie: ${getTaken[i].aantalPersonen}</li>
<li>opmerkingen: ${getTaken[i].opmerkingen}</li>
</ul>
`

}
}
function aanmelden(){
  let getTaken = JSON.parse(localStorage.getItem("taakContainer"))
  for(let i=0 ; i< getTaken.length; i++){
  selectieTaak.innerHTML +=
`
                <option value="${getTaken[i].naamTaak}">${getTaken[i].naamTaak}</option>
`}

}
