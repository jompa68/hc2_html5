$(document).ready(function(){
	var dojoConfig = {parseOnLoad: true};
	dojo.require("esri.map");
	var map;
      
	dojo.ready(function() {
	map = new esri.Map("map", {
    	basemap: "streets",
    	center: [16.28, 60.54],
    	zoom: 8
    	});
    	
	});
	
	//$("#map").width($(window).width());
});
