window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let selector = document.querySelector('#voice-select');
  let language_selection = 'null'
  

  let voices = speechSynthesis.getVoices();


  
  for(let i = 0; i < voices.length ; i++) {
    var language = document.createElement("option");
    language.value = voices[i].name;
    language.textContent = voices[i].name;
    selector.appendChild(language);
  }
  

  selector.addEventListener("input",update_language);
  function update_language() {
    language_selection = this.value
  }



  function close() {
    var image = document.querySelector("img");
    image.src = 'assets/images/smiling.png';
  }

  let buttom = document.querySelector('button');
  buttom.addEventListener('click', talk);
  function talk(){
    if (language_selection == 'null'){
      var text = document.getElementById("text-to-speak");
      var speech = new SpeechSynthesisUtterance(text.value);
      var image = document.querySelector("img");
      image.src = 'assets/images/smiling-open.png';
      synth.speak(speech)
      speech.addEventListener('end',close);
    }
    else {
      var text = document.getElementById("text-to-speak");
      var speech = new SpeechSynthesisUtterance(text.value);
      var image = document.querySelector("img");
      image.src = 'assets/images/smiling-open.png';
      
      for(let i = 0; i < voices.length ; i++) {
        if (language_selection == voices[i].name){
          speech.voice = voices[i]
        }
      }
      
      synth.speak(speech)
      speech.addEventListener('end',close);
    }
  }

}

