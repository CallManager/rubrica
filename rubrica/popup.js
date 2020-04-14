//TIMETABLE
var timetable = [["Fisica", "STA", "PE", "Inglese", "Grammatica"],
                 ["STA", "Diritto", "Biologia", "Religione", "TTRG"],
                 ["LabFisica.", "PE", "Diritto", "Inglese", "Storia", "Italiano"],
                 ["Fisica", "Inglese", "Matematica", "Biologia", "LabChim"],
                 ["Chimica", "TTRG", "Storia", "Chimica", "STA", "Matematica"],
                 ["Grammatica", "Narrativa", "LabTTRG", "Matematica", "Matematica"]];

//GET DATE
    var data = new Date();
    var hh = data.getHours();
    var giorni = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
    var ng = giorni[data.getDay()];

//CURRENT HOUR
if       (hh == 8) {
  var currenthh = 0;
}else if (hh == 9) {
  var currenthh = 1;
}else if (hh == 10) {
  var currenthh = 2;
}else if (hh ==  11) {
  var currenthh = 3;
}else if (hh ==  12) {
  var currenthh = 4
}else if (hh ==  13) {
  var currenthh = 5;
}

//NEXT HOURS
var next = currenthh+1;
var nexxt = currenthh+2;

//DAY into ARRAY
if       (ng == "lun") {
  var currentDay = 0;
}else if (ng == "mar") {
  var currentDay = 1;
}else if (ng == "mer") {
  var currentDay = 2;
}else if (ng == "gio") {
  var currentDay = 3;
}else if (ng == "ven") {
  var currentDay = 4
}else if (ng == "sab") {
  var currentSubj = 5;
}

//GET SUBJECTS
var getCurrentSubj = timetable[currentDay][currenthh];
var nextSubj = timetable[currentDay][next];
var nexxtSubj = timetable[currentDay][nexxt];

//EXCEPTIONS
if (getCurrentSubj === undefined && nextSubj === undefined && nexxtSubj === undefined){
  if (hh >= 13 && hh <= 19){
    var getCurrentSubj = "Buon pomeriggio, non c'è nulla da mostrare."
  }
  if (hh >= 19 && hh <= 6){
    var getCurrentSubj = "Sei un gufo. non c'è nulla da mostrare."
  }
  if (hh >= 6 && hh <= 7){
    var getCurrentSubj = "Buongiornissimo, kaffe?? Preparati per le videolezioni."
  }
  if (hh >= 6 && hh <= 7 && ng == "dom"){
    var getCurrentSubj = "È domenica! Rimani a dormire"
  }
}

//HIDE ELEMENTS
if (getCurrentSubj === undefined){
  var div1 = document.getElementById('currentdiv');
  div1.setAttribute('style', 'display: none');
}
if (nextSubj === undefined){
  var div2 = document.getElementById('nextdiv');
  div2.setAttribute('style', 'display: none');
}
if (nexxtSubj === undefined){
  var div3 = document.getElementById('nexxtdiv');
  div3.setAttribute('style', 'display: none');
}

//PUT STUFF TO POPUP
document.getElementById("current").innerText = getCurrentSubj;
document.getElementById("next").innerText = nextSubj;
document.getElementById("nexxt").innerText = nexxtSubj;

// --------- END SUBJECTS --------

//GET LINKS TO MEETING SERVICES
var zoomStart = "https://zoom.us/j/";
var zoomID = document.getElementById("numb").value;

// BUTTON
var a = document.getElementById('joinA');
a.setAttribute('href', 'display: none');
