// Make it rain!

$('.hamburger').on('click', function(){
	console.log("clicked");

	$('.sidebar').addClass('active');

})

$('.close').on('click', function(){
	console.log("Super Click");
	$('.sidebar').removeClass('active');
	
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(37.5833637,-122.4758374),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}