// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

       

$(document).ready(function(){	
	var chosencolor;
	var hasBeenClicked;
	var rows;
	var column;
	
	table= $('#pixelCanvas');
	$('table tr').remove();
	
	$('#submit').click(function(){
		rows = $("#inputHeight").val();
		column = $("#inputWeight").val();
		for(var i=0;i<rows; i++){	
			$((table).append("<tr></tr>"));
			for(var j=0;j<column;j++){
				$($('tr:last').append("<td></td>"));
			}
		}
		
	$('tr').attr('class','choose');

	$('#colorPicker').click(function(){
		hasBeenClicked = true;
	});
	$('.choose td').click(function(e){
		var cell = $(e.target).get(0);
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

