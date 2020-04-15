document.getElementById("piattaformaFisica").addEventListener("change", getPlatFisica)
  function getPlatFisica() {
    var selectedPlatformFisica = document.getElementById("piattaformaFisica").value;
    console.log(selectedPlatformFisica)
    if(selectedPlatformFisica === "Meet"){
    	document.getElementById("alertMeetFisica").setAttribute('style', 'display: block');
    }if(selectedPlatformFisica != "Meet"){
        document.getElementById("alertMeetFisica").setAttribute('style', 'display: none');
    };
  }






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
