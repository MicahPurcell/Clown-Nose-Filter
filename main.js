noseX=0;
noseY=0;

function preload() {
    img=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  circle(noseX, noseY, 30);
  image(img,noseX-15,noseY-15,30,30)
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
