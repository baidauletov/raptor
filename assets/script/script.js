function changeSvg() {
	var line_1 = document.getElementById('line_1');
	var line_2 = document.getElementById('line_2');
	var line_3 = document.getElementById('line_3');
	var line_4 = document.getElementById('line_4');
	
	var svg = document.getElementById('svg');
	var body = document.querySelector('body');
	
	var svgStyle = window.getComputedStyle(svg);
	var svgWidth = parseInt(svgStyle.width.split('p')[0]);
	var svgHeight = parseInt(svgStyle.height.split('p')[0]);
	
	var bodyStyle = window.getComputedStyle(body);
	var bodyWidth = parseInt(bodyStyle.width.split('p')[0]);
	
	console.log('bodyWidth: ',bodyWidth);
	console.log(line_1);
	console.log('width: ',svgWidth);
	console.log('height: ',svgHeight);

	if (bodyWidth < 449) {
		var line_1_posX = (svgWidth * 0.4).toFixed(2);
		var line_2_posX = (svgWidth * 0.7).toFixed(2);
		var line_3_posX = (svgWidth * 0.4).toFixed(2);
		var line_4_posX = (svgWidth * 0.7).toFixed(2);

		var line_1_posX2 = (svgWidth * 0.7).toFixed(2);
		var line_2_posX2 = (svgWidth * 0.4).toFixed(2);
		var line_3_posX2 = (svgWidth * 0.7).toFixed(2);
		var line_4_posX2 = (svgWidth * 0.4).toFixed(2);

		line_1.setAttribute('x1',line_1_posX);
		line_2.setAttribute('x1',line_2_posX);
		line_3.setAttribute('x1',line_3_posX);
		line_4.setAttribute('x1',line_4_posX);

		line_1.setAttribute('x2',line_1_posX2);
		line_2.setAttribute('x2',line_2_posX2);
		line_3.setAttribute('x2',line_3_posX2);
		line_4.setAttribute('x2',line_4_posX2);

		line_1.setAttribute('y1', '110');
		line_2.setAttribute('y1', '180');
		line_3.setAttribute('y1', '240');
		line_4.setAttribute('y1', '320');

		line_1.setAttribute('y2', '180');
		line_2.setAttribute('y2', '240');
		line_3.setAttribute('y2', '320');
		line_4.setAttribute('y2', '380');
	} else{
		var line_1_posX = (svgWidth * 0.1).toFixed(2);
		var line_2_posX = (svgWidth * 0.3).toFixed(2);
		var line_3_posX = (svgWidth * 0.5).toFixed(2);
		var line_4_posX = (svgWidth * 0.7).toFixed(2);

		var line_1_posX2 = (svgWidth * 0.3).toFixed(2);
		var line_2_posX2 = (svgWidth * 0.5).toFixed(2);
		var line_3_posX2 = (svgWidth * 0.7).toFixed(2);
		var line_4_posX2 = (svgWidth * 0.9).toFixed(2);

		line_1.setAttribute('y1', '40');
		line_2.setAttribute('y1', '60');
		line_3.setAttribute('y1', '40');
		line_4.setAttribute('y1', '60');

		line_1.setAttribute('y2', '60');
		line_2.setAttribute('y2', '40');
		line_3.setAttribute('y2', '60');
		line_4.setAttribute('y2', '40');

		line_1.setAttribute('x1',line_1_posX);
		line_2.setAttribute('x1',line_2_posX);
		line_3.setAttribute('x1',line_3_posX);
		line_4.setAttribute('x1',line_4_posX);

		line_1.setAttribute('x2',line_1_posX2);
		line_2.setAttribute('x2',line_2_posX2);
		line_3.setAttribute('x2',line_3_posX2);
		line_4.setAttribute('x2',line_4_posX2);
	}
}

// changeSvg();
window.onload = changeSvg
window.onresize = changeSvg
