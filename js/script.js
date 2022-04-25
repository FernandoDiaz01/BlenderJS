var blenderStatus = "apagada";
var blenderSound = document.getElementById("blender-sound");
var blenderButton = document.getElementById("blender-button-sound");
var blender = document.getElementById("blender");

function controlarLicuadora() {
    if (blenderStatus == "apagada") {
        blenderStatus = "encendida";
        licuar();
        blender.classList.add("active");
    } else {
        blenderStatus = "apagada";
        licuar();
        blender.classList.remove("active");
    }
}
document.getElementById("blender-button").addEventListener("click", controlarLicuadora);

function licuar() {
    if (blenderSound.paused) {
        blenderButton.play();
        blenderSound.play();
    } else {
        blenderButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}