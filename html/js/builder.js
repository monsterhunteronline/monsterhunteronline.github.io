function updateurl(zname, value)
{
  var href = window.location.href;
  var regex = new RegExp("[&\\?]" + zname + "=");
  if(regex.test(href))
  {
    regex = new RegExp("([&\\?])" + zname + "=\\d+");
    window.history.pushState("object or string", "Title", href.replace(regex, "$1" + zname + "=" + value));
    //window.location.href = href.replace(regex, "$1" + zname + "=" + value);
  }
  else
  {
    if(href.indexOf("?") > -1)
    	window.history.pushState("object or string", "Title", href + "&" + zname + "=" + value);
    	//window.location.href = href + "&" + zname + "=" + value;
    else
    	window.history.pushState("object or string", "Title", href + "?" + zname + "=" + value);
    	//window.location.href = href + "?" + zname + "=" + value;
  }
}
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

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("helmet").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Helmet');

        xmlhttp.open("GET", "helmet.php?Helmet=" + item, true);
        xmlhttp.send();
});

function helmetinfo() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("helmet").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Helmet');

        xmlhttp.open("GET", "helmet.php?Helmet=" + item, true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("vambraces").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Vambraces');

        xmlhttp.open("GET", "vambraces.php?Vambraces=" + item, true);
        xmlhttp.send();

});

function vambracesinfo() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("vambraces").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Vambraces');

        xmlhttp.open("GET", "vambraces.php?Vambraces=" + item, true);
        xmlhttp.send();

};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("armor").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Armor');

        xmlhttp.open("GET", "armor.php?Armor=" + item, true);
        xmlhttp.send();
});

function armorinfo() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("armor").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Armor');

        xmlhttp.open("GET", "armor.php?Armor=" + item, true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("waist").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Waist');

        xmlhttp.open("GET", "waist.php?Waist=" + item, true);
        xmlhttp.send();
});

function waistinfo() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("waist").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Waist');

        xmlhttp.open("GET", "waist.php?Waist=" + item, true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("greaves").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Greaves');

        xmlhttp.open("GET", "greaves.php?Greaves=" + item, true);
        xmlhttp.send();
});

function greavesinfo() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("greaves").innerHTML = xmlhttp.responseText;
            }
        };

        var item = getUrlParameter('Greaves');

        xmlhttp.open("GET", "greaves.php?Greaves=" + item, true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("helmetselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "helmetlist.php", true);
        xmlhttp.send();
});

function helmetlist() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("helmetselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "helmetlist.php", true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("vambracesselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "vambraceslist.php", true);
        xmlhttp.send();
});

function vambraceslist() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("vambracesselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "vambraceslist.php", true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("armorselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "armorlist.php", true);
        xmlhttp.send();
});

function armorlist() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("armorselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "armorlist.php", true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("waistselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "waistlist.php", true);
        xmlhttp.send();
});

function waistlist() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("waistselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "waistlist.php", true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("greavesselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "greaveslist.php", true);
        xmlhttp.send();
});

function greaveslist() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("greavesselection").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("GET", "greaveslist.php", true);
        xmlhttp.send();
};

$(function() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("skills").innerHTML = xmlhttp.responseText;
            }
        };
        var helmet = getUrlParameter('Helmet');
        var vambraces = getUrlParameter('Vambraces');
        var armor = getUrlParameter('Armor');
        var waist = getUrlParameter('Waist');
        var greaves = getUrlParameter('Greaves');
        xmlhttp.open("GET", "skills.php?Helmet=" + helmet + "&Vambraces=" + vambraces + "&Armor=" + armor + "&Waist=" + waist + "&Greaves=" + greaves, true);
        xmlhttp.send();
});

function skills() {

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("skills").innerHTML = xmlhttp.responseText;
            }
        };
        var helmet = getUrlParameter('Helmet');
        var vambraces = getUrlParameter('Vambraces');
        var armor = getUrlParameter('Armor');
        var waist = getUrlParameter('Waist');
        var greaves = getUrlParameter('Greaves');
        xmlhttp.open("GET", "skills.php?Helmet=" + helmet + "&Vambraces=" + vambraces + "&Armor=" + armor + "&Waist=" + waist + "&Greaves=" + greaves, true);
        xmlhttp.send();
};

$(function() {

    $("#search").click(function()
    {
        var textboxvalue = $('input[name=searchfor]').val();

        $.ajax(
        {
            type: "POST",
            url: 'helmetlist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#helmetselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'vambraceslist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#vambracesselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'armorlist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#armorselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'waistlist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#waistselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'greaveslist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#greavesselection").html(result);
            }
        });
    });
});

$(function() {

    $("#reset").click(function()
    {
        var textboxvalue = "";
        document.getElementById("searchfor").value = "";

        $.ajax(
        {
            type: "POST",
            url: 'helmetlist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#helmetselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'vambraceslist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#vambracesselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'armorlist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#armorselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'waistlist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#waistselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'greaveslist.php',
            data: {search: textboxvalue},
            success: function(result)
            {
                $("#greavesselection").html(result);
            }
        });
    });
});

$(function() {

    $("#blade").click(function()
    {
        var textboxvalue = $('input[name=searchfor]').val();

        $.ajax(
        {
            type: "POST",
            url: 'helmetlist.php',
            data: {search: textboxvalue, type: "B"},
            success: function(result)
            {
                $("#helmetselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'vambraceslist.php',
            data: {search: textboxvalue, type: "B"},
            success: function(result)
            {
                $("#vambracesselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'armorlist.php',
            data: {search: textboxvalue, type: "B"},
            success: function(result)
            {
                $("#armorselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'waistlist.php',
            data: {search: textboxvalue, type: "B"},
            success: function(result)
            {
                $("#waistselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'greaveslist.php',
            data: {search: textboxvalue, type: "B"},
            success: function(result)
            {
                $("#greavesselection").html(result);
            }
        });
    });
});

$(function() {

    $("#gun").click(function()
    {
        var textboxvalue = $('input[name=searchfor]').val();

        $.ajax(
        {
            type: "POST",
            url: 'helmetlist.php',
            data: {search: textboxvalue, type: "G"},
            success: function(result)
            {
                $("#helmetselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'vambraceslist.php',
            data: {search: textboxvalue, type: "G"},
            success: function(result)
            {
                $("#vambracesselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'armorlist.php',
            data: {search: textboxvalue, type: "G"},
            success: function(result)
            {
                $("#armorselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'waistlist.php',
            data: {search: textboxvalue, type: "G"},
            success: function(result)
            {
                $("#waistselection").html(result);
            }
        });
        $.ajax(
        {
            type: "POST",
            url: 'greaveslist.php',
            data: {search: textboxvalue, type: "G"},
            success: function(result)
            {
                $("#greavesselection").html(result);
            }
        });
    });
});