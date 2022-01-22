// Special credit goes to: The Coding Train / Daniel Shiffman
var picbutton;
// Make the video
let video;
// For displaying the label
let label = "Loading, please wait...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/69ZmzOwlh/';

// STEP 1: Load the model using the ML5 library!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  
  //Load all the infographics
  
  //apples
  a1 = loadImage('a1.jpg');
  a2 = loadImage('a2.jpg');
  a3 = loadImage('a3.jpg');
  a4 = loadImage('a4.jpg');
  a5 = loadImage('a5.jpg');
  
  //bananas
  b1 = loadImage('b1.jpg');
  b2 = loadImage('b2.jpg');
  b3 = loadImage('b3.jpg');
  b4 = loadImage('b4.jpg');
  
  //oranges
  o1 = loadImage('c1.jpg');
  o2 = loadImage('c2.jpg');
  o3 = loadImage('c3.jpg');
  
  //background
  bgimg = loadImage('hackathonbgo.jpg');
}


function setup() {
  createCanvas(1000, 1000);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
  
  //Make and style the picture taking button
  picbutton = createButton("Take a Picture");
  picbutton.position(10, 850);
  picbutton.size(120, 100);
  picbutton.style('background-color: #6bffff');
  picbutton.style('color: #9900ff');
  picbutton.style('font-family: Cookie');
  picbutton.style('text-shadow: 1px 1px 1px');
  picbutton.style('font-size: 45px');
  picbutton.style('border-radius: 10px');
}

function draw() {
  background(bgimg);
  //Program our button to take a picture when clicked
  picbutton.mousePressed(
    takePic
  )
  picbutton.mousePressed(
    classifyVideo
  )
  
  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  //Give information based on reading
  if (label == "Fresh Apple") {
    image(a1, 0, 0, 300, 300);
    image(a2, 300, 0, 330, 300);
    image(a3, 0, 300, 580, 500);
    image(a4, 580, 300, 380, 270);
    image(a5, 580, 570, 330, 270);
    
  } else if (label == "Fresh Orange") {
    image(o3, 0, 0, 400, 400);
    image(o2, 300, 0, 430, 400);
    image(o1, 0, 400, 580, 500);
    
  } else if (label == "Fresh Banana") {
    image(b1, 0, 0, 300, 300);
    image(b2, 300, 0, 330, 300);
    image(b3, 0, 300, 580, 500);
    image(b4, 580, 300, 380, 270);
    
  } else if (label == "Rotten Apple") {
    
  } else if (label == "Rotten Orange") {
    
  } else if (label == "Rotten Banana") {
    
  }

  /* Ignore following code: Draw the emoji
  textSize(100);
  text(emoji, width / 2, height / 2);*/
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // In case something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  //classifyVideo();
}

//Make the function to take a picture
function takePic() {
  // Draw the video
  image(video, 0, 0);
}
