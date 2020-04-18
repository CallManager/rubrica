//FISICA
//CHECK MEET
document.getElementById("piattaformaFisica").addEventListener("change", getPlatFisica)
  function getPlatFisica() {
    var selectedPlatformFisica = document.getElementById("piattaformaFisica").value;
    if(selectedPlatformFisica === "Meet"){
    	document.getElementById("alertMeetFisica").setAttribute('style', 'display: block');
    }if(selectedPlatformFisica != "Meet"){
        document.getElementById("alertMeetFisica").setAttribute('style', 'display: none');
    };
  }
  //CHARACTER CHECK IN ID
  document.getElementById("codiceFisica").addEventListener("change", charCheck)
  function charCheck() {
    if (document.getElementById("codiceFisica").value == "" || document.getElementById("codiceFisica").value.length <= "2"){
      document.getElementById("divFisica2").classList.add("has-danger");
    }else if (document.getElementById("codiceFisica").value != "" || document.getElementById("codiceFisica").value.length >= "2"){
      document.getElementById("divFisica2").classList.remove("has-danger");
      console.log("charCheck successfully removed the class.")
  }
    if (document.getElementById("piattaformaFisica").value == "Meet" && document.getElementById("codiceFisica").value.length < "12"){
      document.getElementById("divFisica2").classList.add("has-danger");
    }else{document.getElementById("divFisica2").classList.remove("has-danger");}
  }

//GET ID OF MEETING
document.getElementById("saveButton1").addEventListener("click", save1)
  function save1(){
    var platformFisica = document.getElementById("piattaformaFisica").value;
    var meetIdFisica = document.getElementById("codiceFisica").value;
    var pwFisica = document.getElementById("pwFisica").value;
    charCheck();
    if (!$(document.getElementById("divFisica2")).hasClass("has-danger") && !$(document.getElementById("divFisica1")).hasClass("has-danger")) {
    var fisica = [platformFisica, meetIdFisica, pwFisica];
    chrome.storage.sync.set({fisica: fisica}, function() {
      console.log('Fisica salvato. Piattaforma:' + fisica[0] + ' ID:' + fisica[1] + ' Password:' + fisica[2])
      document.getElementById("saveButton1").innerText = "Salvato! :)";
    })
  }
}



//ALL SAVED DATA IS DISPLAYED
$(document).ready(function(){
  chrome.storage.sync.get(['fisica'], function(result) {
            document.getElementById("piattaformaFisica").value = result.fisica [0];
            document.getElementById("codiceFisica").value = result.fisica [1];
            document.getElementById("pwFisica").value = result.fisica [2];
          });
  })

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
