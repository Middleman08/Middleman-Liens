// Make it rain!

// hamburger and side bar code
$('.hamburger').on('click', function(){
	console.log("clicked");

	$('.sidebar').addClass('active');

})

$('.close').on('click', function(){
	console.log("Super Click");
	$('.sidebar').removeClass('active');
	
});


//Google map code
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(37.583312,-122.475328),
        zoom: 80,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


// this is an offset for the fixed navigation
$('a[href*="#"]:not([href="#"])').click(function() {

  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
       var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if (target.length) {
           $('html, body').animate({
               scrollTop: target.offset().top-130 //this is the offset to change
           }, 1000);
           return false;
       }
   }
});


//this is the code for my modal order form
$('#showModal').on('click', function () {
  $('.modal').css("display", "flex").hide().fadeIn();
  console.log('click');
});

$('#close').on('click', function () {
  $('.modal').fadeOut();
  console.log('click');
  
});