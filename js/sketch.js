const UP = -1
const DOWN = 1
let ball
let p1
let p2

function setup () {
	createCanvas(windowWidth, windowHeight)
	ball = new Ball()
	p1= new Paddle(1, 'red')
	p2= new Paddle(2, 'blue')

	//frameRate(10)

}

function draw() {
	background('green')
	drawLine()
	ball.draw()
	ball.move()
	if(ball.collision(p1)|| ball.collision(p2))
			ball.move()
	let checkScore = ball.checkScore() 
	if(checkScore ===2)
		p2.updateScore()
		else if(checkScore ===1)
			p1.updateScore()
	p1.draw()
	p2.draw()


	if(keyIsPressed){
		if(keyIsDown(87))
			p1.move(UP)
		if(keyIsDown(83))
			p1.move(DOWN)
		if(keyIsDown(UP_ARROW))
			p2.move(UP)
		if(keyIsDown(DOWN_ARROW))
			p2.move(DOWN)
	}
	showScore()
}

const drawLine = function (){
	stroke('#fff')
	strokeWeight(5)
	line(width/2,0, width/2, height)
}

const showScore = function(){
	fill('#fff')
	textSize(50)
	textFont('Arial')
	text(p1.getScore(), width*0.25,70)
	text(p2.getScore(), width*0.75,70)
}




