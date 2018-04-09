// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

       

$(document).ready(function(){	
	
	let hasBeenClicked;	
	table= $('#pixelCanvas');	
	$('#submit').click(function(){
		let rows;
		let column;
		$('table tr').remove();
		rows = $("#inputHeight").val();
		column = $("#inputWeight").val();
		for(let i=0;i<rows; i++){	
			$((table).append("<tr></tr>"));
			for(let j=0;j<column;j++){
				$($('tr:last').append("<td></td>"));
			}
		}
		
	$('tr').attr('class','choose');

	$('#colorPicker').click(function(){
		hasBeenClicked = true;
	});
	$('.choose td').click(function(e){
		let chosencolor;
		let cell = $(e.target).get(0);
		if(hasBeenClicked){
			chosencolor=$('#colorPicker').val();			
			$(cell).css({backgroundColor: chosencolor});	
		}	
		else{
		$(cell).css({backgroundColor: "black"});	
		}
	
	});
	});
});

