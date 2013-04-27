$(document).ready(function(){
// Hämta värde för köksfönstret, AV eller PÅ?
     $.getJSON( PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/devices?id=" + devicekoket, function( json3 ) {
                var jsonText3 = JSON.parse(json3.properties.value);
                if (jsonText3 == "1")

        {
                img_control = document.getElementById('koket');
                if (img_control.getAttribute("class") == "koket")
        {
                img_control.src = img_control.src.replace("_off","_on");
        }
        else
        {
                img_control.src = img_control.src.replace("_on","_off");
        }
}
});

   
 // Ändra värde för enhet lilla köksfönstret		
  $(".koket").live('click', function(event, ui) {
    if ($(this).attr("class") == "koket") {
          xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/callAction?deviceID=" + devicekoket + "&name=turnOn";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
      this.src = this.src.replace("_off","_on");
    } else {
        	xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/callAction?deviceID=" + devicekoket + "&name=turnOff";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
      this.src = this.src.replace("_on","_off");
    }
    $(this).toggleClass("on");
  });
});

$(document).ready(function(){
// Hämta värde för hallen, AV eller PÅ?
     $.getJSON( PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/devices?id=" + devicehallen, function( json3 ) {
                var jsonText3 = JSON.parse(json3.properties.value);
                if (jsonText3 == "1")

        {
                img_control = document.getElementById('hallen');
                if (img_control.getAttribute("class") == "hallen")
        {
                img_control.src = img_control.src.replace("_off","_on");
        }
        else
        {
                img_control.src = img_control.src.replace("_on","_off");
        }
}
});

 // Ändra värde för enhet hallen		
  $(".hallen").live('click', function(event, ui) {
    if ($(this).attr("class") == "hallen") {
          xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/callAction?deviceID=" + devicehallen + "&name=turnOn";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
      this.src = this.src.replace("_off","_on");
    } else {
        	xmlhttp=new XMLHttpRequest()
         		var temp = PROXYPATH + "?key=http://" + HC2USERNAME + ":" + HC2PASSWORD + "@" + HC2IP + "/api/callAction?deviceID=" + devicehallen + "&name=turnOff";
 				xmlhttp.open("GET",temp,false);
 				xmlhttp.send();
      this.src = this.src.replace("_on","_off");
    }
    $(this).toggleClass("on");
  });
});