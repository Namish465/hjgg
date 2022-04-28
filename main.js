song = "";
leftWristX = 0;
leftWristY = 0;
RightWristX = 0;
RightWristY = 0; 

function setup()
{
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded );

poseNet.on('pose' , gotPoses)
}

function gotPoses(results)
{
if(results.length > 0)
{
  ScoreLeftWrist = results[0].pose.keypoints[9].score;
  console.log("ScoreLeftWrist" + ScoreLeftWrist);

   console.log(results); 
   leftWristX = results[0].pose.leftWrist.x;
   leftWristY = results[0].pose.leftWrist.y;
   console.log("leftWris x = " + leftWristX + " leftWris y = " + leftWristY);

   RightWristX = results[0].pose.rightWrist.x;
   RightWristY = results[0].pose.rightWrist.y;
   console.log("RightWrist x = " + RightWristX + "RightWrist y = " + RightWristY);
}
}

function modelLoaded()
{

    console.log('poseNet is Initialized');
}

function draw()
{
image(video,0,0,600,500);

song = "music2.mp3";
song2 = "music.mp3";

fill("#f2594e");
stroke("#f51302");

if(ScoreLeftWrist > 0.2)
{
circle(leftWristX,leftWristY,20);
song2.stop();

if(song = false)
{
 song.isPlaying() 
document.getElementById("name").innerHTML = "Enemy";
}
}

}

function preload()
{
song = loadSound("music2.mp3");
song2 = loadSound("music.mp3");
}


