var bg, bgImg
var spaceship,spaceshipImg
var obstacle1,obstacle1Img
var obstacle2,obstacle2Img
var obstacleGroup, obstacleGroup2; 
var gameState = "play"
var life = 0;
var star, starImg;
var starGroup;
var score = 0;


function preload(){
    bgImg = loadImage('background.jpg');
    spaceshipImg = loadImage('spaceship.png');
    obstacle1Img = loadImage('obstacle1.png');
    obstacle2Img = loadImage('obstacle2.png');
    starImg = loadImage('star.png');

}

function setup() {
 createCanvas(600,600);

 bg = createSprite(300,300);
 bg.addImage(bgImg);
 bg.velocityY = 1.5;
 
 spaceship = createSprite(300,500)
 spaceship.addImage(spaceshipImg)
 spaceship.scale = 0.3;


 obstacleGroup = new Group();
 obstacleGroup2 = new Group();
 starGroup = new Group();




 
 

}

function draw() {
    if(gameState == "play"){
    background(0)

    if(bg.y>400){
        bg.y = 100;
    }

    if(keyDown("left_arrow")){
        spaceship.x = spaceship.x -4
    }

    if(keyDown("right_arrow")){
        spaceship.x = spaceship.x +4
    }


    if(obstacleGroup.isTouching(spaceship)){
        spaceship.velocityY = 0;
    }
    if(obstacleGroup2.isTouching(spaceship) || obstacleGroup.isTouching(spaceship)){
        obstacleGroup.destroyEach()
        obstacleGroup2.destroyEach()
        life = life+1
        
    } 

    if(starGroup.isTouching(spaceship)){
        score = score+1
        starGroup.destroyEach()
    }

 

    if(life>=3){
        gameState = "end"
    }

   

    spawnObstacles();



    drawSprites()
}
    text("Lives: "+life,x = 500,y=30)

    if(gameState === "end"){
        stroke("blue");
        fill("blue");
        text("Game Over", 300,300)
        textSize(80);

    }

    text("Score:"+score,x = 100, y=30)

     text("destroy astroids to avoid damage",x=170,y=550,textSize(20),stroke("white"))
     

    

    
}

    function spawnObstacles(){
        if(frameCount % 200 === 0){
            obstacle1 = createSprite(300,-15)
            obstacle1.addImage(obstacle1Img);
            obstacle1.scale = 0.3
            obstacle1.velocityY = 1.5;

            obstacle1.x = Math.round(random(100,500));

            obstacleGroup.add(obstacle1);
          
        }


          if(frameCount % 350 === 0){
            obstacle2 = createSprite(300,-15)
            obstacle2.addImage(obstacle2Img);
            obstacle2.scale = 0.25
            obstacle2.velocityY = 1.5;

            obstacle2.x = Math.round(random(100,500));

            obstacleGroup2.add(obstacle2);

            
          
        }

        if(frameCount % 300 === 0){
            star = createSprite(300,-10)
            star.addImage(starImg);
            star.velocityY = 1;
            star.scale = 0.2

            star.x = Math.round(random(100,500));
            starGroup.add(star);
            
        }

        

    }

  