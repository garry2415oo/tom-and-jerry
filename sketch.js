var cat,cat_image,cat_waking,cat_standing,mouse_seeing,mouse,mouse_image,mouse_standing;
var  ground,groundImage;


function preload() {
    //load the images here
cat_waking= loadAnimation("images/cat2.png","images/cat3.png");
mouse_seeing= loadAnimation("images/mouse2.png","images/mouse3.png");
groundImage= loadImage("images/garden.png");
cat_image= loadAnimation("images/cat1.png");
mouse_image= loadAnimation("images/mouse1.png");
cat_standing= loadAnimation("images/cat4.png");
mouse_standing= loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite(800,700);
cat.addAnimation("seeing",cat_image);
cat.scale=0.2;

mouse= createSprite(200,700);
mouse.addAnimation("see",mouse_image);
mouse.scale=0.15;
}

function draw() {
background(groundImage);
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX= 0;
    cat.x = 300;
    cat. addAnimation("standing",cat_standing);
    cat.changeAnimation("standing");

    mouse.addAnimation("standing",mouse_standing);
    mouse.changeAnimation("standing");


};
    drawSprites();
}


function keyPressed(){
if(keyCode ===  LEFT_ARROW){
cat.velocityX= -5;
cat. addAnimation("waking",cat_waking);
cat.changeAnimation("waking");

mouse.addAnimation("dancing",mouse_seeing);
mouse.changeAnimation("dancing");
}
 

}
