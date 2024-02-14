status = "";
Objects = [];
sound = "";

function preLoad(){
    sound = loadSound("alarm.mp3");
}

function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    video = createCapture(VIDEO);
    video.size(450, 450);
    video.hide();
    
}

function modelLoaded(){
    console.log("modal loaded");
    status = true;
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    } else{
    console.log(results)};
    Objects = results;
}

function draw(){
    image(video, 0, 0, 450, 450);
    for (i=0; i < Objects.length; i++){
        if(Objects[i].label = "person"){
            document.getElementById("status").innerHTML = "baby Detected";
            sound.pause();
        }else{
            document.getElementById("status").innerHTML = "baby not Detected";
            sound.play();
        }}
    if(Objects.length <= 0){
        document.getElementById("status").innerHTML = "baby not Detected";
        sound.play();
    }
}