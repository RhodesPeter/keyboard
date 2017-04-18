function playKey(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio){ return; }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

var keys = document.querySelectorAll('.key');
keys.forEach(function(key){
  key.addEventListener('transitionend', removeTransition)
});

function removeTransition(e){
  this.classList.remove('playing');
}

document.addEventListener('keydown', playKey);
