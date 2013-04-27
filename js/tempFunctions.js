$(document).ready(function(){

	// Hämta temperatur för vardagsrum
 	$('#inomhus').live('expand', function(){
 		$.getJSON( PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/devices?id=60", function( json ) {
   			var jsonText = JSON.parse(json.properties.value);
   			chart(jsonText, "chartdiv2", "Temperatur vardagsrum: ");
 		});
 	});
 	
 	// Hämta temperatur för hallen
 	$('#inomhus').live('expand', function(){
 		$.getJSON( PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/devices?id=34", function( json ) {
   			var jsonText = JSON.parse(json.properties.value);
   			chart(jsonText, "chartdiv3", "Temperatur hallen: ");
 		});
 	});
 	
 	
 	// Hämta temperatur för utomhus
 	 $('#utomhus').live('expand', function(){
        $.getJSON( PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/devices?id=33", function( json ) {
   		var jsonText = JSON.parse(json.properties.value);
   		chart(jsonText, "chartdiv1", "Temperatur utomhus: ");
 		});
     });
});

// Funktion för att skapa meter gauge
function chart(temp,div, location) {
	s1 = [temp];
	plot3 = $.jqplot(div,[s1],{
	   title: location + temp,
       seriesDefaults: {
           renderer: $.jqplot.MeterGaugeRenderer,
           rendererOptions: {
               //label: 'grader celcius',
               min: -40,
               max: 40,
               intervals:[-20, 0, 20, 40],
               intervalColors:['#0004FF', '#8F91FF', '#FFA600', '#FF0000']
           }
       }
   });
}