
div1 = document.getElementById("div1")
div2 = document.getElementById("div2")
div3 = document.getElementById("div3")
div4 = document.getElementById("div4")
div5 = document.getElementById("div5")
div6 = document.getElementById("div6")
div7 = document.getElementById("div7")
div8 = document.getElementById("div8")
div9 = document.getElementById("div9")
div10 = document.getElementById("div10")
div11 = document.getElementById("div11")
div12 = document.getElementById("div12")
div13 = document.getElementById("div13")
div14 = document.getElementById("div14")
div15 = document.getElementById("div15")
div16 = document.getElementById("div16")
div17 = document.getElementById("div17")
div18 = document.getElementById("div18")
div19 = document.getElementById("div19")
div20 = document.getElementById("div20")
div21 = document.getElementById("div21")
div22 = document.getElementById("div22")
div23 = document.getElementById("div23")
div24 = document.getElementById("div24")
div25 = document.getElementById("div25")
div26 = document.getElementById("div26")
div27 = document.getElementById("div27")
div28 = document.getElementById("div28")
div29 = document.getElementById("div29")

// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


function sound(playSound) {
    new Audio(playSound).play();
}

let level = 2500
let divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12, div13, div14, div15, div16, div17, div18, div19, div20, div21, div22, div23, div24, div25, div26, div27, div28, div29]

let interval = setInterval(pickNote, level);

function levelfunc(num) {
    clearInterval(interval)
    level = num
    interval = setInterval(pickNote, level);
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function pickNote() {
    let div = divs[getRandomInt(29)]
    note(div)

}

function note(div) {
    div.classList.add("play")
    setTimeout(function () { remove(div) }, 10000)
}
function remove(div) {
    div.classList.remove('play')
    void div.offsetWidth
}







// function animation() {
//     let note = document.createElement('button')
//     note.setAttribute('id', 'note')
//     note.setAttribute("style", "right:" + getRandomInt(0, 913) + "px")
// }


// note.classList.add()
// top" + getRndInteger(8000, 10000) + "px"




// create a new audio context
const audioContext = new AudioContext();

// create a function that generates a sound for a given frequency
function playSound(frequency) {
    // create a new oscillator node
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    // create a new gain node
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.5, audioContext.currentTime);

    // connect the nodes together
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    // start the oscillator and stop it after 1 second
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1);
}
