function draw () {	
	var cvs = document.getElementById('cvs');
	var ctx = cvs.getContext('2d');
	var height = cvs.getAttribute('height');
	ctx.beginPath();
	ctx.moveTo(710, 30);
	ctx.lineTo(710, height);
	ctx.moveTo(0, 455);
	ctx.lineTo(1000, 455);
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.stroke();
}
draw();