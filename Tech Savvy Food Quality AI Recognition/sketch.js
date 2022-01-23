// Special credit goes to: The Coding Train / Daniel Shiffman
var picbutton;
var speakbutton;
var title;
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
  
  //load all the audio
  
  //tutorial
  tut = loadSound('tutorial.mp3');
  
  //fresh fruit
  fa = loadSound('fresh apple.mp3');
  fb = loadSound('fresh banana.mp3');
  fo = loadSound('fresh orange.mp3');
  
  //rotten fruit
  ra = loadSound('rot apple.mp3');
  rb = loadSound('rot banana.mp3');
  ro = loadSound('rot orange.mp3');
  
  
  title = "Welcome to the Fruit Quality AI Recognition App!";
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
  
  speakbutton = createButton("Speak");
  speakbutton.position(130, 850);
  speakbutton.size(120, 100);
  speakbutton.style('background-color: #5400e6');
  speakbutton.style('color: #beff19');
  speakbutton.style('font-family: Cookie');
  speakbutton.style('text-shadow: 1px 1px 1px');
  speakbutton.style('font-size: 55px');
  speakbutton.style('border-radius: 10px');
  
  tut.play();
  
  /*textCo('color: #00ff04');
  textStyle('text-shadow: 1px 1px 1px');*/

}

function draw() {
  background(bgimg);
  //Program our button to take a picture when clicked
  picbutton.mousePressed(
    takePic
  );
  picbutton.mousePressed(
    classifyVideo
  );
  
  speakbutton.mousePressed(speak);
  
  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont('Montserrat Alternates');
  fill('#ffff61');
  text(label, width / 2, height - 16);
  
  textSize(70);
  fill('#00ff04');
  text("Welcome to the Food", 475, 40);
  text("Quality AI Recognition App!", 500, 100);

  //Give information based on reading
  if (label == "Fresh Apple") {
    image(a1, 0, 0, 300, 300);
    image(a2, 300, 0, 330, 300);
    image(a3, 0, 300, 580, 500);
    image(a4, 580, 300, 380, 270);
    image(a5, 580, 570, 330, 270);
    
  } else if (label == "Fresh Orange") {
    image(o3, 0, 0, 400, 400);
    image(o2, 400, 0, 430, 400);
    image(o1, 0, 400, 350, 430);
    
  } else if (label == "Fresh Banana") {
    image(b1, 0, 0, 300, 300);
    image(b2, 300, 0, 330, 300);
    image(b3, 0, 300, 580, 500);
    image(b4, 580, 300, 380, 270);
    
  } else if (label == "Rotten Apple") {
    textSize(30);
    fill('#ffffff');
    textFont('Passero One');
    textAlign(LEFT, TOP);
    text(
      "Fresh apples feel firm, have bright skin, and smell pleasant and fruity. They won’t have bruises, soft spots, or areas of discoloration. When you bite into them, they are crispy and juicy. Here are a few indications that an apple has begun to go bad: soft spots or bruising, wrinkled skin, holes and brown blemishes, liquid oozing from its skin, a mushy texture, and a mealy or bland and grainy taste. It’s best to discard apples that show signs of expiration, as they carry the risk of toxic mold. Apples are especially at risk of growing mycotoxins like patulin, which can be dangerous to consume, and cause frightening effects like nausea, bleeding ulcers, and increase in the risk of developing or getting cancer. Increase the shelf life of apples by storing them individually, unwashed, and whole at colder temperatures, such as in the fridge or freezer. Apple slices can be kept fresher with the help of an acid like lemon juice.",
      20, 150, 980, 700
    );
    
  } else if (label == "Rotten Orange") {
    textSize(25);
    fill('#ffffff');
    textFont('Passero One');
    textAlign(LEFT, TOP);
    text(
      "Oranges go bad eventually just like any other fruit. Sour or fermented smells or bruised, soft, dark spots on the oranges peel are good signs that your oranges have spoiled. Here's how to check their quality. Method 1: Look over your oranges and if they have any brown discoloration or mushy spots then they are starting to rot. Or the rind might be shriveling as another sign of oranges going bad. Additionally: You might see that some oranges have small scars on their peels. This is ok. It is caused by them getting scraped by the branches on the trees and as long as it didn’t cut the orange peel open, you should be fine. White on the peel is mold growing; stay clear of those. If they are already cut slices then you may notice green mold growing when your oranges are bad. Another test is to: Go ahead and pick up each orange and give it a gentle squeeze; you want your orange to be firm. If oranges are bad you will notice that they have soft mushy spots. Sometimes if oranges are left rotting for too long they will start to ooze juices. These will typically start to grow mold on them as well. Psst! Your nose helps too. If your oranges have gone bad they will have a moldy or foul smell to them. Fresh oranges do not have much of a smell to them. Any unpleasant 'fragrance ;)' of your oranges is a good sign that they have gone bad. If you really can’t tell then, you can taste them and if they are sour or have a fermented taste to them, you shouldthrow them away. This is a great way to tell if orange juice especially has gone bad. Finally, the shelf life: Oranges typically last about 3 weeks at room temperature from when they are picked. But you are probably buying oranges that were picked a week or so ago. With that said, store-bought oranges can last you about 2 weeks on the counter. To make them last you even longer you can store them in the fridge. Refrigerated oranges will last you a couple of months unpeeled. Once you have peeled or cut up your oranges you can keep them in the refrigerator for up to two days before you will want to discard them.",
      20, 150, 980, 700
    );
    
  } else if (label == "Rotten Banana") {
    textSize(23);
    fill('#ffffff');
    textFont('Passero One');
    textAlign(LEFT, TOP);
    text(
      "Info on storage and shelf life: Unripe bananas – if your bananas are green and unripe, the countertop at room temperature is the best place for them to ripen. It's advised to store them is to place them in a bowl. Speed up their ripening process - Store them with other ethylene producing fruit and vegetables – other such fruit and veg are avocados, potatoes, and apples. But bananas will also speed up the ripening of these, too. Slow it down - Cover the stalk with clingfilm/plastic wrap or tin foil – the stalk is where the ethylene that ripens bananas is released. Covering it will decrease the amount of this gas released and therefore keep bananas fresher for longer. Ripe bananas – these can be kept on the countertop, but only if you intend to eat them as soon as possible. Otherwise, they will become overripe in a couple of days. Unripe bananas – the refrigeration process will severely slow down/stop the ripening process. Whilst it will prevent them from turning brown, it means that unripe bananas placed in the fridge may never ripen. They will still be edible, but the riper the bananas are, the sweeter and tastier they'll be. Ripe bananas – once your bananas have reached the desired level of ripeness, you can store bananas in the fridge to stop them from ripening too quickly. Unfinished bananas – to keep these for a little longer, cover them in plastic wrap/cling film, or a sealed plastic container. Try to keep as much of the peel intact to expose little flesh. Be aware that, after any fruit or vegetable has been partially eaten or prepared, it will rapidly lose its water-soluble nutrients, such as vitamin C. Unripe, ripe, and unfinished bananas expire in 2-5 days, 1-3 days, and pretty quickly on the countertop respectively. Here's some ways to figure out the quality of a banana: Touch– a banana should be fairly firm to the touch. If the flesh beneath the skin feels very soft, it is likely to have gone bad. Look – bananas are best known for being completely yellow. But developing brown spots, or even the skin turning black, is not a sign it has gone bad. It is mostly a sign of how ripe the banana is. Indeed, very dark and overripe bananas are ideal for use in cooking, such as in muffins or banana bread. To tell if a banana has gone bad, look for mold growing on the skin. Also, if there is liquid underneath the bananas, it’s a sure sign that they have gone bad. The best way to see if a banana has gone bad is to unpeel it. If the flesh is a brown color and is very mushy, it has gone bad and should not be used.",
      20, 150, 980, 700
    );
  }

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

function speak() {
  if (label == "Fresh Apple") {
    fa.play();
    
  } else if (label == "Fresh Orange") {
    fo.play();
    
  } else if (label == "Fresh Banana") {
    fb.play();
    
  } else if (label == "Rotten Apple") {
    ra.play();
    
  } else if (label == "Rotten Orange") {
    ro.play();
    
  } else if (label == "Rotten Banana") {
    rb.play();
    
  } else if (label == "Loading, please wait...") {
    tut.play();
  }
}







