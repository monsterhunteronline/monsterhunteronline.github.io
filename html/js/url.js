function updateurl(zname, value) {
  var href = window.location.href;
  var regex = new RegExp("[&\\?]" + zname + "=");
  if(regex.test(href))
  {
    regex = new RegExp("([&\\?])" + zname + "=\\d+");
    window.history.pushState("object or string", "Title", href.replace(regex, "$1" + zname + "=" + value));
  }
  else
  {
    if(href.indexOf("?") > -1)
    	window.history.pushState("object or string", "Title", href + "&" + zname + "=" + value);
    else
    	window.history.pushState("object or string", "Title", href + "?" + zname + "=" + value);
  }
};

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
function removeAll() {
  removeParam("1"); removeParam("2"); removeParam("3"); removeParam("4"); removeParam("5"); removeParam("6"); removeParam("7"); removeParam("8"); removeParam("9"); removeParam("10"); removeParam("11"); removeParam("12"); removeParam("13"); removeParam("14"); removeMosaics("1"); removeMosaics("2"); removeMosaics("3"); removeMosaics("4"); removeMosaics("5");
  delete helmetType; delete vambracesType; delete armorType; delete waistType; delete greavesType;
  var helmetType; var vambracesType; var armorType; var waistType; var greavesType;
  displayData();
  document.getElementById("helmetImg").innerHTML = '';
  document.getElementById("helmet").innerHTML = 'No Helmet';
  document.getElementById("helmetSkills").innerHTML = '';
  document.getElementById("helmetMosaic").innerHTML = '';
  document.getElementById("vambracesImg").innerHTML = '';
  document.getElementById("vambraces").innerHTML = 'No Vambraces';
  document.getElementById("vambracesSkills").innerHTML = '';
  document.getElementById("vambracesMosaic").innerHTML = '';
  document.getElementById("armorImg").innerHTML = '';
  document.getElementById("armor").innerHTML = 'No Armor';
  document.getElementById("armorSkills").innerHTML = '';
  document.getElementById("armorMosaic").innerHTML = '';
  document.getElementById("waistImg").innerHTML = '';
  document.getElementById("waist").innerHTML = 'No Waist';
  document.getElementById("waistSkills").innerHTML = '';
  document.getElementById("waistMosaic").innerHTML = '';
  document.getElementById("greavesImg").innerHTML = '';
  document.getElementById("greaves").innerHTML = 'No Greaves';
  document.getElementById("greavesSkills").innerHTML = '';
  document.getElementById("greavesMosaic").innerHTML = '';
  document.getElementById('typecolor').style.borderColor = '#000000';
  helmetMosaicjs(0);
  vambracesMosaicjs(0);
  armorMosaicjs(0);
  waistMosaicjs(0);
  greavesMosaicjs(0);
}
function removeMosaics(type) {
  if(type=="1"){
    removeParam("15"); removeParam("16"); removeParam("17");
  }
  if(type=="2"){
    removeParam("18"); removeParam("19"); removeParam("20");
  }
  if(type=="3"){
    removeParam("21"); removeParam("22"); removeParam("23");
  }
  if(type=="4"){
    removeParam("24"); removeParam("25"); removeParam("26");
  }
  if(type=="5"){
    removeParam("27"); removeParam("28"); removeParam("29");
  }
}
function removeParam(key) {
    var sourceURL = window.location.href;
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            };
        };
        rtn = rtn + "?" + params_arr.join("&");
    };
    window.history.pushState("object or string", "Title", rtn);
};