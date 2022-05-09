function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/gz0t5pWdh/model.json",loadedmodel);
}
function loadedmodel() {
    console.log("Model has loaded");
}