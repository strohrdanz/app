$(function(){

// $('#col3').hide();
$('#col1').hide();
$('#back').hide();


$('input').first().focus();            


	$('table').on("click",".add", function() {

		var tableid = $(this).parent().parent().parent().attr('id');

		var ingredient = $(this).siblings().children('input').val(); 

		if (ingredient !== "") { 

			$(this).siblings('.ingredient').addClass('added').html(ingredient);

			var t = '<tr><td class="ingredient"><input class="term" type="text"></td><td class="add"><a href="#">+</a></td></tr>';

			$('#'+ tableid).append(t);

			$(this).removeClass('add').addClass('remove').html('<a href="#">&#8211;</a>');   

			$(this).parent().parent().find('input').focus();   
		}
	});	

	$('table').on("keypress", ".term", function(e){
        if(e.which == 13){
            $(this).parent().siblings('.add').click();
        }
    });

	$('table').on("click",".remove", function() {
		$(this).parent().remove();
	});

	$('button').on("click", function(){
		$('#col2').fadeIn();
	});

	$('.result').on("click", function(){
		$('#col1').hide();
		$('#col2').css("width","45%");
		$('#col3').fadeIn();
		$('#back').fadeIn();
	});

	$('#back').on("click", function(){
		$('#col1').fadeIn();
		$('#col2').css("width","57%");
		$('#col3').hide();
		$('#back').fadeOut();
	});

});