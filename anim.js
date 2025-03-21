var audio = document.querySelector ("audio")
var lyrics = document.querySelector ("#lyrics")

var lyricsData = [
{ text: "Maybe it´s the way you say my name", time: 0.12},
{ Text: "And I ve heard of a love that comes once in a lifetime", time: 36},
{ Text: "And I m pretty sure that you are that love of mine", time: 43}

];

function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentline = lyricsData.find(
        (line)=>time>=line.time && time < line.time + 6
    );

   if (currentline) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time . currentline.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentline.text;
   } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
   }
}