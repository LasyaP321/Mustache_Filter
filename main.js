xCoordinate = 0;
yCoordinate = 0;

function preload()
{
    mustache = loadImage("Mustache.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, xCoordinate - 13, yCoordinate + 6, 30, 30);
}

function take_snapshot()
{
    save('moustacheFilterImage.png');
}

function gotPoses(results)
{
    if (results.length > 0)
        {
            console.log(results);
            xCoordinate = results[0].pose.nose.x;
            yCoordinate = results[0].pose.nose.y;
            console.log("nose x = " + xCoordinate);
            console.log("nose y = " + yCoordinate);
        }
}