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
  document.getElementById("mosaic1Img").innerHTML = '';
  document.getElementById("mosaic1Skills").innerHTML = '';
  document.getElementById("mosaic2Img").innerHTML = '';
  document.getElementById("mosaic2Skills").innerHTML = '';
  document.getElementById("mosaic3Img").innerHTML = '';
  document.getElementById("mosaic3Skills").innerHTML = '';
  document.getElementById("mosaic4Img").innerHTML = '';
  document.getElementById("mosaic4Skills").innerHTML = '';
  document.getElementById("mosaic5Img").innerHTML = '';
  document.getElementById("mosaic5Skills").innerHTML = '';
  document.getElementById("mosaic6Img").innerHTML = '';
  document.getElementById("mosaic6Skills").innerHTML = '';
  document.getElementById("mosaic7Img").innerHTML = '';
  document.getElementById("mosaic7Skills").innerHTML = '';
  document.getElementById("mosaic8Img").innerHTML = '';
  document.getElementById("mosaic8Skills").innerHTML = '';
  document.getElementById("mosaic9Img").innerHTML = '';
  document.getElementById("mosaic9Skills").innerHTML = '';
  document.getElementById("mosaic10Img").innerHTML = '';
  document.getElementById("mosaic10Skills").innerHTML = '';
  document.getElementById("mosaic11Img").innerHTML = '';
  document.getElementById("mosaic11Skills").innerHTML = '';
  document.getElementById("mosaic12Img").innerHTML = '';
  document.getElementById("mosaic12Skills").innerHTML = '';
  document.getElementById("mosaic13Img").innerHTML = '';
  document.getElementById("mosaic13Skills").innerHTML = '';
  document.getElementById("mosaic14Img").innerHTML = '';
  document.getElementById("mosaic14Skills").innerHTML = '';
  document.getElementById("mosaic15Img").innerHTML = '';
  document.getElementById("mosaic15Skills").innerHTML = '';
  document.getElementById("talismanImg").innerHTML = '';
  document.getElementById("talisman").innerHTML = 'No Talisman';
  document.getElementById("talismanSkills1").innerHTML = '';
  document.getElementById("talismanSkills1Value").innerHTML = '';
  document.getElementById("talismanSkills2").innerHTML = '';
  document.getElementById("talismanSkills2Value").innerHTML = '';
  document.getElementById("talismanSkills3").innerHTML = '';
  document.getElementById("talismanSkills3Value").innerHTML = '';
  document.getElementById("necklaceImg").innerHTML = '';
  document.getElementById("necklace").innerHTML = 'No Necklace';
  document.getElementById("necklaceSkills").innerHTML = '';
  document.getElementById("ringImg").innerHTML = '';
  document.getElementById("ring").innerHTML = 'No Ring';
  document.getElementById("ringSkills").innerHTML = '';
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
    document.getElementById("mosaic1Img").innerHTML = '';
    document.getElementById("mosaic1Skills").innerHTML = '';
    document.getElementById("mosaic2Img").innerHTML = '';
    document.getElementById("mosaic2Skills").innerHTML = '';
    document.getElementById("mosaic3Img").innerHTML = '';
    document.getElementById("mosaic3Skills").innerHTML = '';
  }
  if(type=="2"){
    removeParam("18"); removeParam("19"); removeParam("20");
    document.getElementById("mosaic4Img").innerHTML = '';
    document.getElementById("mosaic4Skills").innerHTML = '';
    document.getElementById("mosaic5Img").innerHTML = '';
    document.getElementById("mosaic5Skills").innerHTML = '';
    document.getElementById("mosaic6Img").innerHTML = '';
    document.getElementById("mosaic6Skills").innerHTML = '';
  }
  if(type=="3"){
    removeParam("21"); removeParam("22"); removeParam("23");
    document.getElementById("mosaic7Img").innerHTML = '';
    document.getElementById("mosaic7Skills").innerHTML = '';
    document.getElementById("mosaic8Img").innerHTML = '';
    document.getElementById("mosaic8Skills").innerHTML = '';
    document.getElementById("mosaic9Img").innerHTML = '';
    document.getElementById("mosaic9Skills").innerHTML = '';
  }
  if(type=="4"){
    removeParam("24"); removeParam("25"); removeParam("26");
    document.getElementById("mosaic10Img").innerHTML = '';
    document.getElementById("mosaic10Skills").innerHTML = '';
    document.getElementById("mosaic11Img").innerHTML = '';
    document.getElementById("mosaic11Skills").innerHTML = '';
    document.getElementById("mosaic12Img").innerHTML = '';
    document.getElementById("mosaic12Skills").innerHTML = '';
  }
  if(type=="5"){
    removeParam("27"); removeParam("28"); removeParam("29");
    document.getElementById("mosaic13Img").innerHTML = '';
    document.getElementById("mosaic13Skills").innerHTML = '';
    document.getElementById("mosaic14Img").innerHTML = '';
    document.getElementById("mosaic14Skills").innerHTML = '';
    document.getElementById("mosaic15Img").innerHTML = '';
    document.getElementById("mosaic15Skills").innerHTML = '';
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