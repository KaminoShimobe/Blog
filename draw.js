function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
 }


var mouseX = 0, mouseY = 0;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;
}

function getsize(){
	size = Math.floor(Math.random()*100 + 1);
}
    
var size = 50;

function draw() {



    cube.color = getRandomColor()
	cube.width = size;
	cube.height = size;
	cube.x = mouseX;
	cube.y =  mouseY;	
	cube.draw();
    cube.fade(.01);
}
