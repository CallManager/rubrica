//FISICA
document.getElementById("piattaformaFisica").addEventListener("change", getPlatFisica)
  function getPlatFisica() {
    var selectedPlatformFisica = document.getElementById("piattaformaFisica").value;
    if(selectedPlatformFisica === "Meet"){
    	document.getElementById("alertMeetFisica").setAttribute('style', 'display: block');
    }if(selectedPlatformFisica != "Meet"){
        document.getElementById("alertMeetFisica").setAttribute('style', 'display: none');
    };
  }
//GET ID OF MEETING
document.getElementById("saveButton1").addEventListener("click", save1)
  function save1(){
    var platformFisica = document.getElementById("piattaformaFisica").value;
    var meetIdFisica = document.getElementById("codiceFisica").value;
    var pwFisica = document.getElementById("pwFisica").value;
    var fisica = [platformFisica, meetIdFisica, pwFisica];
    chrome.storage.local.set({fisica: fisica}, function() {
      console.log('Fisica salvato. Piattaforma:' + fisica[0] + ' ID:' + fisica[1] + ' Password:' + fisica[2])
      document.getElementById("saveButton1").innerText = "Salvato!";
    })
  }

//ALL SAVED DATES ARE DISPLAYED
document.getElementById("richieste").addEventListener("click", save1)
//function displayed() {
chrome.storage.sync.get(['fisica'], function(result) {;
  console.log(result.fisica [0]);
});
//  document.getElementById("piattaformaFisica").setAttribute('value', 'color: green');
//}

/* EASTER EGG XDXD
var easterText = "";
var easterI;
for (easterI = 0; easterI < 420; easterI++) {
  easterText += "Penis <br>";
}
document.getElementById("easterEggXddX").innerHTML = easterText;
*/

/*document.getElementById("zoomid").addEventListener("click", submit);
    function submit(){
      var zoomid = document.getElementById("zoomid").value;

      chrome.storage.sync.set({tatu: zoomid}, function() {
                console.log('Log1: Value di Tatu is set to ' + zoomid);
              });
              chrome.storage.sync.get(['tatu'], function(result) {
                  console.log('Value currently is ' + result.tatu);
                });
   }
*/
