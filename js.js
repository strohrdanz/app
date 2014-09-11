$(function(){

$('#results').hide();
$('#recipe').hide();
// $('#searchform').hide();
// $('#suggestions').hide();
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
    $('#suggestions').hide();
    $('#results').fadeIn();
	});

	$('#results .result').on("click", function(){
    $(this).addClass("green");
    $('#searchform').hide();
    $('#results').addClass("small");
    $('#recipe').fadeIn();
    $('#back').fadeIn();
	});

  $('#suggestions .result').on("click", function(){
    $('#searchform').hide();
    $('#suggestions').addClass("small");
    $('#recipe').fadeIn();
    $('#back').fadeIn();
  });

	$('#back').on("click", function(){
    $(".result").removeClass("green");
    $('#results').hide();
    $('#recipe').hide();
    $('#searchform').fadeIn();
    $('#suggestions').fadeIn();
    $('#results').removeClass("small");
    $('#suggestions').removeClass("small");
	});
});