$(document).ready(function(){
     
     // Hämta värde för hemma, AV eller PÅ?
     $.getJSON( PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/devices?id=", function( json3 ) {
   		var jsonText3 = JSON.parse(json3.properties.value);
   		if (jsonText3 == "0")
   			{
   				$("#flip-motor").val('off').slider('refresh');
   			}
   		else
   		   	{
   				$("#flip-motor").val('on').slider('refresh');
   			}
 		});
	// Ändra värde för hemma
 	$( "#flip-motor" ).bind( "change", function(event, ui) {
  		if ($("#flip-motor").val() == "off")
			{
    			xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/callAction?deviceID=&name=turnOff";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
   			}
   		else
   			{
    			xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/callAction?deviceID=&name=turnOn";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
   			}
	});
	
	// Ändra värde för alarm
	$( "#flip-larm" ).bind( "change", function(event, ui) {
  		if ($("#flip-larm").val() == "off")
			{
    			xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/sceneControl?id=8&action=start";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
   			}
   		else
   			{
    			xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/sceneControl?id=3&action=start";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
   			}
	});
	
	// Hämta värde för GoodNight, AV eller på
	$.getJSON( PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/globalVariables?name=GoodNight", function( json ) {
   		//var jsonTexts = JSON.parse(json);
   		
   		s = JSON.stringify(json.value);
   		s = s.substring(1, s.length-1).replace(/\\"/g,'"');

   		
   		if (s == "AV")
   			{
   				$("#flip-larm").val('off').slider('refresh');
   			}
   		else
   		   	{
   				$("#flip-larm").val('on').slider('refresh');
   			}
 		});
});