# Psychic-Game

I haven't placed the javascript in the "js" file yet.

My final problem with this Psychic program is: 

not being able to reset the computer's letter selection after losing or winning.


I have the "var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];" above the "document.onkeyup"
event.

When I placed "var computerGuess" BELOW "onkeyup", it changed the computer's letter selection every time I pressed a key, which, after I thought about it, made sense.

I have been down the rabbit hole of figuring out how to trigger a reselection for the better part of two days. My assumption is that I need to nest some sort of trigger in my first and third "if" parameters, but I am failing.

Please advise.
