function draw () {	
	var cvs = document.getElementById('cvs');
	var ctx = cvs.getContext('2d');
	var height = cvs.getAttribute('height');
	ctx.moveTo(710, 30);
	ctx.lineTo(710, height);
	ctx.moveTo(0, 457);
	ctx.lineTo(1000, 457);
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.stroke();
}
draw();