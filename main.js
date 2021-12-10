function preload(){
}
function setup (){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded (){
    console.log("poseNet is initialized");
}
function draw(){
image(video,0,0,300,300);
}
function take_pic(){
    save("My_filter_pic.png");
}
function gotPoses(results){
    if (results.length>0){
console.log(results);
console.log("rightEye x = " + results[0].pose.rightEye.x ); 
console.log("leftEye y = " + results[0].pose.leftEye.y ); 
console.log("rightEye y = " + results[0].pose.rightEye.y ); 
console.log("leftEye x = " + results[0].pose.leftEye.x );
onsole.log("rightEar x = " + results[0].pose.rightEar.x ); 
console.log("leftEar y = " + results[0].pose.leftEar.y ); 
console.log("rightEar y = " + results[0].pose.rightEar.y ); 
console.log("leftEar x = " + results[0].pose.leftEar.x );
    }
}