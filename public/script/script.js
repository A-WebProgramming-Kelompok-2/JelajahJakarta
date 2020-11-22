$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

function myFunction(){
    alert("This place doesn't need ticket");
}

jQuery(document).ready(function(){
    $('.button').click(function(){
      $('.one').addClass('oneani');
      $('.two').addClass('twoani');
    });
  })


