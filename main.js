function unLock() {
	document.getElementById("edit").contentEditable = true;
}

function Lock() {
	document.getElementById("edit").contentEditable = false;
}

function modifyElem() {
	document.getElementById("addelem").disabled = false;	
	document.getElementById("removelem").disabled = false;	
}

function addElem() {
	var e = document.getElementById("selectb");
	var text = e.options[e.selectedIndex].value;
	if(text=="name") {
		var table = document.getElementById('name');
		var rowCnt = table.rows.length;
		var tr = table.insertRow(rowCnt);
		// create 1st column
		var td = document.createElement('td');
		td = tr.insertCell(0);
		td.setAttribute('class', 'thead');
		td.innerText = "Add-Title";
		// create 2nd column
		var td2 = document.createElement('td');
		td2 = tr.insertCell(1);
		td2.innerText = "Add the contact details here";
	} else if(text=="education") {
		var table = document.getElementById('tableE');
		var rowCnt = table.rows.length;
		var tr = table.insertRow(rowCnt);
		// create 1st column
		var td1 = document.createElement('td');
		td1 = tr.insertCell(0);
		td1.setAttribute('id', 'tdE');
		td1.innerText = "Certificate";
		// create 2nd column
		var td1 = document.createElement('td');
		td1 = tr.insertCell(1);
		td1.setAttribute('id', 'tdE');
		td1.innerText = "Uni./Board";
		// create 3nd column
		var td1 = document.createElement('td');
		td1 = tr.insertCell(2);
		td1.setAttribute('id', 'tdE');
		td1.innerText = "Result";
		// create 4nd column
		var td1 = document.createElement('td');
		td1 = tr.insertCell(3);
		td1.setAttribute('id', 'tdE');
		td1.innerText = "Year";
	} else if(text=="techskill") {
		var data = '<span id="ulhead">Main-Title :</span> Write technical skills here';
		var x = document.createElement("LI");
		x.innerHTML = data;
		document.getElementById("ts").appendChild(x);
	} else if(text=="projects") {
		var data = '<span id="ulhead">ProjectX Title :</span><span id="uld">Date: xx/xx/xx</span><br/><span id="ulm">Mentor Name</span><span id="uld">Project-link</span><br/>Basic description of the project, functionality etc.';
		var x = document.createElement("LI");
		x.innerHTML = data;
		document.getElementById("prj").appendChild(x);
	} else if(text=="experience") {
		var data = '<span id="ulhead">Experience Title :</span><span id="uld">from xx/xx/xx to xx/xx/xx</span><br/><span id="expdes">Basic description of the project for examplle description, etc.</span>';
		var x = document.createElement("LI");
		x.innerHTML = data;
		document.getElementById("exp").appendChild(x);
	} else if(text=="achievement") {
		var data = '<span id="ulhead">XYZ Contest :</span> Descripttion of the contest you have participated.';
		var x = document.createElement("LI");
		x.innerHTML = data;
		document.getElementById("achive").appendChild(x);
	} else if(text=="language") {
		var data = 'Enter Language';
		var x = document.createElement("LI");
		x.innerText = data;
		document.getElementById("lang").appendChild(x);
	} else if(text=="extra") {
		var data = '<span id="ulhead">XYZ Workshop :</span> Attended 1 day XYZ workshop.';
		var x = document.createElement("LI");
		x.innerHTML = data;
		document.getElementById("extra").appendChild(x);
	}
}


function removeElem() {
	var e = document.getElementById("selectb");
	var text = e.options[e.selectedIndex].value;
	if(text=="name") {
		var table = document.getElementById('name');
		var rowCnt = table.rows.length;
		if(rowCnt==0) {
			alert("No more Fields available!!");
		}else {table.deleteRow(rowCnt-1);}
	} else if(text=="education") {
		var table = document.getElementById('tableE');
		var rowCnt = table.rows.length;
		if(rowCnt==1) {
			alert("No more Fields available!!");
		}else {table.deleteRow(rowCnt-1);}
	} else if(text=="techskill") {
		var elem = document.getElementById('ts');
		var chCnt = elem.childElementCount;
		if(chCnt==0) {	
			alert("No more Fields available!!");
		} else {
			elem.removeChild(elem.lastChild);
			elem.removeChild(elem.lastChild);	
		}
	} else if(text=="projects") {
        var elem = document.getElementById('prj');
        var chCnt = elem.childElementCount;
        if(chCnt==0) {
            alert("No more Fields available!!");
        } else {
            elem.removeChild(elem.lastChild);
            elem.removeChild(elem.lastChild);
        }
	} else if(text=="experience") {
        var elem = document.getElementById('exp');
        var chCnt = elem.childElementCount;
        if(chCnt==0) {
            alert("No more Fields available!!");
        } else {
            elem.removeChild(elem.lastChild);
            elem.removeChild(elem.lastChild);
        }
	} else if(text=="achievement") {
        var elem = document.getElementById('achive');
        var chCnt = elem.childElementCount;
        if(chCnt==0) {
            alert("No more Fields available!!");
        } else {
            elem.removeChild(elem.lastChild);
            elem.removeChild(elem.lastChild);
        }		
	} else if(text=="language") {
        var elem = document.getElementById('lang');
        var chCnt = elem.childElementCount;
        if(chCnt==0) {
            alert("No more Fields available!!");
        } else {
            elem.removeChild(elem.lastChild);
            elem.removeChild(elem.lastChild);
        }
	} else if(text=="extra") {
        var elem = document.getElementById('extra');
        var chCnt = elem.childElementCount;
        if(chCnt==0) {
            alert("No more Fields available!!");
        } else {
            elem.removeChild(elem.lastChild);
            elem.removeChild(elem.lastChild);
        }
	}
}
