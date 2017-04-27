# Keyboard

Play the keyboard [here](https://rhodespeter.github.io/keyboard/)!

Animation with [Anime.js](http://anime-js.com/). <br>
SVG illustration designed in Adobe Illustrator. <br>
SVG optimised with [svg-optimiser](http://petercollingridge.appspot.com/svg-optimiser).

![](https://github.com/RhodesPeter/keyboard/blob/master/assets/illustration-for-readme.png)

### Key learnings:

The use of custom [HTML data attributes](https://www.w3schools.com/tags/att_global_data.asp):

`<path id="a" data-key="65" class="st3 key"`

This was useful as the data key then relates to the the key code we receive from the keypress event listener as can be seen here:

```
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

document.addEventListener('click', playKey);
```
