document.getElementById("zoomid").addEventListener("click", submit);
    function submit(){
      var zoomid = document.getElementById("zoomid").value;

      chrome.storage.sync.set({tatu: zoomid}, function() {
                console.log('Log1: Value di Tatu is set to ' + zoomid);
              });
              chrome.storage.sync.get(['tatu'], function(result) {
                  console.log('Value currently is ' + result.tatu);
                });
   }
