var step = 0;
var arr = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

$('#area').click(event => {
	if(event.target.innerHTML === '') {
		if(step % 2 === 0)
			event.target.innerHTML = 'X'
		else
			event.target.innerHTML = 'O'
		step++;
	}

	checkWin();
})

const checkWin = () => {
	var boxes = $('.box');
	var win = false;

	for(var i = 0; i < arr.length; i++) {
		if(boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X') {
			win = true;
			alert('ПОБЕДИЛИ КРЕСТИКИ!')
			location.reload();
			return;
		}
		else if(boxes[arr[i][0]].innerHTML === 'O' && boxes[arr[i][1]].innerHTML === 'O' && boxes[arr[i][2]].innerHTML === 'O') {
			win = true;
			alert('ПОБЕДИЛИ НОЛИКИ!')
			location.reload();
			return;
		}
	}
	var elements = 0;
	boxes.map(elem => {
		if(boxes[elem].innerHTML !== '') elements++;
	})
	if (elements === 9) {
		alert('НИЧЬЯ!')
		location.reload();
		return;
	}

}