var lat, firstUpdate = false;
$(document).ready(function() {

	

if(true) {
    navigator.geolocation.getCurrentPosition(GetLocation);
    function GetLocation(location) {

        // don't use var here, that will make a local variable
        lat = location.coords.latitude;

        // this will run only on the first time we get a location.
        if(firstUpdate == false){
           doSomething();
           firstUpdate = true;
        }

    }           
};  
	
});




function doSomething(){
    alert(lat);
}