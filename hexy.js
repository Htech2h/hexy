function generateColor(){
    let str = "0123456789ABCDEF";
    let color= "#";
    for(let i=0; i<6; i++){
        color += str[Math.floor(Math.random()*16)];
    }

    return color;
}

let colors = [];
for(let i=0 ;i<6; i++){
    colors.push(generateColor());
}


function rgbToHex(rgb) {
    const rgbValues = rgb
      .match(/\d+/g)
      .map(Number)
      .map((val) => val.toString(16).padStart(2, '0'));
    return "#" + rgbValues.join('').toUpperCase();
  }
  


let target = colors[Math.floor(Math.random()* colors.length)];
document.getElementById("hexColor").innerText = target;

let boxes = document.getElementsByClassName("color-box");
for (let i = 0; i < 6; i++) {
    boxes[i].style.backgroundColor = colors[i];
}

// play sounds
let correctSound = document.getElementById("correctSound");
let wrongSound = document.getElementById("wrongSound");


for (let i = 0; i < 6; i++) {
    boxes[i].addEventListener("click", function () {
        let clickedColor = boxes[i].style.backgroundColor;
        if (rgbToHex(clickedColor) === target.toUpperCase()) {
            document.getElementById("message").innerText = "🎉 Correct!";
            correctSound.play();
            setTimeout(function() {
                location.reload();  
            }, 1000);
        } else {
            document.getElementById("message").innerText = "❌ Try Again!";
            wrongSound.play();
            setTimeout(function() {
                location.reload();  
            }, 1000);
        }
    });
}

// Function to convert RGB to HEX
function rgbToHex(rgb) {
    const rgbValues = rgb
        .match(/\d+/g)
        .map(Number)
        .map((val) => val.toString(16).padStart(2, '0'));
    return "#" + rgbValues.join('').toUpperCase();
}





