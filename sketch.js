// This is an P5.js and p5play.js example program
// https://p5js.org/
// https://p5play.org/

//    GNU V3 Copyright (C) <2023> <Kyle Arquilla> contact@ kaarquilla@gmail.com

// already setup with libraries to use
// feel free to delete program in sketch to build your own

// Example by: Kyle Arquilla

// variables - let variable = block scoped, var variable = function scoped, neither = global scoped
// JS autoTypes the variables if want to static cast use 
//- let integerNumber = parseInt(floatNumber) or else if you do a float operation on an int it will make a float 10 - 0.5 = 9.5 not 9
// examples
// var number = 10
// let number = 10
// number = 10

// setup() is a built in function
//runs once and only once when page is loaded
function setup()
{
    new Canvas(500, 500)         // creates canvas at size 500 by 500. (0,0) is topleft corner.
    frameRate(60)                // set frame rate to 60
    world.gravity.y = 3          // set the vertical gravity over the "world"

    // rectangle
    rect = new Sprite()          // constructor to create a new sprite can fill with - new Sprite(x,  y,  w,  h, collider)
    rect.w = 50
    rect.h = 50
    rect.x = 150
    rect.y = 250
    rect.color = color("purple") // color() makes a color to set as can be CSS color like "red" "darkred" "blue" etc or RGB color(255,0,0)
    rect.collider = 'kinematic'  // only moves when programmed to move
    rect.rotationSpeed = 1

    // circle
    circ = new Sprite()
    circ.d = 50
    circ.x = 300
    circ.y = 250
    circ.color = color(0,150,0)
    circ.collider = 'dynamic'
    circ.bounciness = 1


    // rectangular floor
                   // (x,    y,   w,   h, collider)
    floor = new Sprite(250, 450, 500, 10, 'k')
    floor.color = color("blue")


}
// draw() is a built in function of p5
// draw() loops over forever, speed controlled by frameRate()
function draw()
{
    clear()                             // clears the canvas before redrawing.
    background(100,100,100)             // draws background at color specified
    if(circ.collided(floor))            // returns true if circ has collided with the floor
    {
        circ.speed -= 0.5               // slow circle after each floor collision
        if (circ.speed < .1 )           // stops the circle when slow enough
        {
            circ.collider = 'static'
        }
    }
}

