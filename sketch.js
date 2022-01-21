
var waitimg
var play,how,playimg,howimg,back,backimg,reset,resetimg
var GameState="wait"


function preload(){
waitimg=loadImage("wait.png")



}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)

play=createImg("Play.png")
play.position(100,100)

how=createImg("How.png")
how.position(100,300)

back=createImg("back.png")
back.position(100,500)
back.size(200,200)

reset=createImg("Reset.png")
reset.position(100,700)


}

function draw(){
background(waitimg)
}