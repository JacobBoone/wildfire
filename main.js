$(function() {

var power = null;
// var changeColor = []

// select the lake button
$('.power').click(function(){
	$('.selected').removeClass('selected')
	$(this).addClass('selected')
	power = $(this).attr('data-power')
		console.log('select')	
		return false

		// should work only when that main button is selected




});
		

		$('.btn-default').click(function(){
			// $(this).addClass('selected')
			console.log(power)
			if (power === 'water'){
				$(this).addClass('btn-info')
			}
			else if (power === 'fire'){
				$(this).addClass('btn-danger')
			}

		});


// $('.btn-default').click(function(){
// 	// $('.power').removeClass('selected')
// 	$(this).addClass('btn-info')
// 		console.log('selected land')	

// });


















// // after lake button selected subsequent buttons when clicked get the same color

// $(document).on('click', '.btn', function(){
// 	var	that = this
// 	var newColor= changeColor.splice(changeColor.length-1, 1)
	
// 	// .css('color', 'btn-info');
// 	that.append(newColor)
// });





// make constructor(s) that know when either color button is clicked and makes subsequent buttons clicked that color







});