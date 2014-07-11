$(function() {

// var power = null;
// var changeColor = []

// select the lake button
$('.power').click(function(){
	$('.selected').removeClass('selected') //remove added class from any other buttons with the class
	$(this).addClass('selected') // adds class to the clicked item. this adds a border so visibly shows the selection upon click
	power = $(this).attr('data-power')// takes the attribute of the clicked item and assigns it the the variable 'power'
		console.log('select')	
		// return false

		// should work only when that main button is selected




});
		
// this click handler will add a new class for the color according to the current value of the variable power, declared inthe function above on any #land item clicked
		$('.btn-default').click(function(){

			// console.log(power)
			if (power === 'water'){
				$(this).addClass('btn-info')
				console.log('used water')
			}
			else if (power === 'fire'){
				$(this).addClass('btn-danger')
				console.log('used fire')
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