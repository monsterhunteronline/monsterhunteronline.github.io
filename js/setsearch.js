var page = "setsearch";
var skillsArray = skillsArray.result.rows;
function setsearchjs() {
	filtered = [];
	for(i = 0; i < skillsArray.length; i ++) {
		if (parseInt(skillsArray[i].data[7], 10) > 0) {
			filtered.push(skillsArray[i]);
		}
	}
	skillsArray = filtered;
	out1='';
	for(i = 0; i < skillsArray.length; i ++) {
		out1+='<a href="#" onclick="setskill1('+skillsArray[i].data[0]+')">'+translate(skillsArray[i].data[3])+' (+'+skillsArray[i].data[7]+')</a><br>';
	}
	document.getElementById("outputs1").innerHTML = out1;
	out2='';
	for(i = 0; i < skillsArray.length; i ++) {
		out2+='<a href="#" onclick="setskill1('+skillsArray[i].data[0]+')">'+translate(skillsArray[i].data[3])+' (+'+skillsArray[i].data[7]+')</a><br>';
	}
	document.getElementById("outputs2").innerHTML = out2;
}
$(function() {
       $('input#skills1search').keyup(function() {
    	   	var search = $('#skills1search').val();
            filteredS1 = [];
			for(i = 0; i < skillsArray.length; i ++) {
				skillString = skillsArray[i].data[5]+' '+translate(skillsArray[i].data[5]);
				if (skillString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
					filteredS1.push(skillsArray[i]);
				}
			}
			out='';
			for(i = 0; i < filteredS1.length; i ++) {
				out+='<a href="#" onclick="setskill1('+filteredS1[i].data[0]+')">'+translate(filteredS1[i].data[3])+' (+'+filteredS1[i].data[7]+')</a><br>';
			}
			document.getElementById("outputs1").innerHTML = out;
        });
       $('input#skills2search').keyup(function() {
    	   	var search = $('#skills2search').val();
            filteredS2 = [];
			for(i = 0; i < skillsArray.length; i ++) {
				skillString = skillsArray[i].data[5]+' '+translate(skillsArray[i].data[5]);
				if (skillString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
					filteredS2.push(skillsArray[i]);
				}
			}
			out='';
			for(i = 0; i < filteredS2.length; i ++) {
				out+='<a href="#" onclick="setskill1('+filteredS2[i].data[0]+')">'+translate(filteredS2[i].data[3])+' (+'+filteredS2[i].data[7]+')</a><br>';
			}
			document.getElementById("outputs2").innerHTML = out;
        });
});
function setskill1(id) {
	for(i = 0; i < skillsArray.length; i ++) {
		if (skillsArray[i].data[0] == id) {
			skill1 = skillsArray[i];
		}
	}
	//console.log(skill1);
}
function setskill2(id) {
	for(i = 0; i < skillsArray.length; i ++) {
		if (skillsArray[i].data[0] == id) {
			skill2 = skillsArray[i];
		}
	}
	//console.log(skill2);
}
function setskill3(id) {
	for(i = 0; i < skillsArray.length; i ++) {
		if (skillsArray[i].data[0] == id) {
			skill3 = skillsArray[i];
		}
	}
	//console.log(skill3);
}
function setskill4(id) {
	for(i = 0; i < skillsArray.length; i ++) {
		if (skillsArray[i].data[0] == id) {
			skill4 = skillsArray[i];
		}
	}
	//console.log(skill4);
}
function setskill5(id) {
	for(i = 0; i < skillsArray.length; i ++) {
		if (skillsArray[i].data[0] == id) {
			skill5 = skillsArray[i];
		}
	}
	//console.log(skill5);
}
function setskill6(id) {
	for(i = 0; i < skillsArray.length; i ++) {
		if (skillsArray[i].data[0] == id) {
			skill6 = skillsArray[i];
		}
	}
	//console.log(skill6);
}
function setskill7(id) {
	for(i = 0; i < skillsArray.length; i ++) {
		if (skillsArray[i].data[0] == id) {
			skill7 = skillsArray[i];
		}
	}
	//console.log(skill7);
}