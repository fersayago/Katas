import turtle

myTurtle = turtle.Turtle()
myWin = turtle.Screen()
def drawSpiral(myTurtle, linelen):
    myTurtle.forward(linelen)
    myTurtle.right(90)
    drawSpiral(myTurtle, linelen-10)

drawSpiral(myTurtle, 80)
myWin.exitonclick()