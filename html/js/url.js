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