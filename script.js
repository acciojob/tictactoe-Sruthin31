//your JS code here. If required.
let boxes = document.querySelectorAll(."box");

let turnO = true;

const winner = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8],
]

boxes.forEach((box) =>{
	box.addEventListiner("click",() =>{
		if(turnO){
			box.innerText = "X";
			turnO = false;
		}
		else{
			box.innerText = "O";
			turnO = true;
		}
		box.disabled = true;

		checkwinner();
	});
});

const checkwinner = () =>{
	for(let pattern of winner){
		let val1 = boxes[pattern[0]].innerText;
		let val2 = boxes[pattern[1]].innerText;
		let val3 = boxes[pattern[2]].innerText;
	}
}

const Winners = () =>{
	if(val1 != "" && val2 != "" && val3 != "" ){
		if(val1 === val2 && val2 ===val3){
			console.log(`${}, congratulations you won!);
				
		}
	}
}
