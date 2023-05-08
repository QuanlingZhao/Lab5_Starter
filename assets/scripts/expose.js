window.addEventListener("DOMContentLoaded", init);

function init() {

  let sound_element = document.getElementsByClassName("hidden")[0];
  let button_element = document.querySelector("button");
  let selector_element = document.getElementById("horn-select");
  let current_sound = 'null'
  let current_volume = '50'

  selector_element.addEventListener("input", update_sound);
  function update_sound() {
    if (this.value == "air-horn"){
      sound_element.src = "assets/audio/air-horn.mp3";
      var image_icon = document.querySelectorAll("img");
      image_icon[0].src = "assets/images/air-horn.svg";
      current_sound = 'air'
    }
    if (this.value == "car-horn"){
      sound_element.src = "assets/audio/car-horn.mp3";
      var image_icon = document.querySelectorAll("img");
      image_icon[0].src = "assets/images/car-horn.svg";
      current_sound = 'car'
    }
    if (this.value == "party-horn"){
      sound_element.src = "assets/audio/party-horn.mp3";
      var image_icon = document.querySelectorAll("img");
      image_icon[0].src = "assets/images/party-horn.svg";
      current_sound = 'party'
    }
  }

  let effect = new JSConfetti();
  button_element.addEventListener("click", play_sound);
  function play_sound() {
    sound_element.volume = current_volume / 100 
    sound_element.play();
    if (current_sound=='party'){
      effect.addConfetti();
    }
  }



  let volume_control = document.querySelector('input[name="volume"]');
  volume_control.addEventListener("change", update_volume);
  function update_volume() {
    current_volume = this.value
    var image_icon = document.querySelectorAll("img");
    if (this.value == 0){
      image_icon[1].src = "assets/icons/volume-level-0.svg";
    }
    else if (this.value >= 1 && this.value <= 32){
      image_icon[1].src = "assets/icons/volume-level-1.svg";
    }
    else if (this.value >= 33 && this.value <= 66){
      image_icon[1].src = "assets/icons/volume-level-2.svg";
    }
    else if (this.value >= 67){
      image_icon[1].src = "assets/icons/volume-level-3.svg";
    }
  }
  
}








