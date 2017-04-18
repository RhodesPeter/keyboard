(function () {
  function playKey(e){
    var dataKey = e.type === 'click' ? e.target.getAttribute("data-key") : e.keyCode;
    var audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    var key = document.querySelector(`.key[data-key="${dataKey}"]`);
    var keyLetter = document.querySelector(`.letter[data-key="${dataKey}"]`);
    if (!audio){ return; }
    key.classList.add('playing');
    keyLetter.classList.add('playing');
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
  document.addEventListener('click', playKey);
})();
