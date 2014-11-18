	var dropCount1 = 0;
	var dropCount2 = 0;
	var dropCount3 = 0;
	var dropCount4 = 0;
	var dropCount5 = 0;
	var currentid = "";
	var confirmCount = 0;
	function submitCheck() {
		if(confirmCount === 11) {
			var submit = document.createElement("button");
			var submit_text = document.createTextNode("Submit");
			submit.appendChild(submit_text);
			submit.setAttribute("id", "submit_form");
			submit.setAttribute("onClick", "");
			document.getElementById("div_submit").appendChild(submit);
		}
		else {
			console.log("Empty Fields");
			document.getElementById("div_submit").removeChild(document.getElementById("submit_form"));
		}
	}
	function allowDrop(ev) {
		ev.preventDefault();
	}
	function drag1(ev) {
		currentid = "img1";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount1 = 0;
  //   	document.getElementById("div_img1").removeChild(document.getElementById("img1_field"));
		// var field1 = document.createElement("h6");
		// var field1_text = document.createTextNode("Null");
		// field1.appendChild(field1_text);
		// field1.setAttribute("id", "img1_field");
		// field1.setAttribute("hidden", "true");
		// document.getElementById("div_img1").appendChild(field1);

	}
	function drag2(ev) {
		currentid = "img2";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount2 = 0;
		// document.getElementById("div_img2").removeChild(document.getElementById("img2_field"));
		// var field2 = document.createElement("h6");
		// var field2_text = document.createTextNode("Null");
		// field2.appendChild(field2_text);
		// field2.setAttribute("id", "img2_field");
		// field2.setAttribute("hidden", "true");
		// document.getElementById("div_img2").appendChild(field2);
	}
	function drag3(ev) {
    	currentid = "img3";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount3 = 0;
		// document.getElementById("div_img3").removeChild(document.getElementById("img3_field"));
		// var field3 = document.createElement("h6");
		// var field3_text = document.createTextNode("Null");
		// field3.appendChild(field3_text);
		// field3.setAttribute("id", "img3_field");
		// field3.setAttribute("hidden", "true");
		// document.getElementById("div_img3").appendChild(field3);
	}
	function drag4(ev) {
    	currentid = "img4";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount4 = 0;
		// document.getElementById("div_img4").removeChild(document.getElementById("img4_field"));
		// var field4 = document.createElement("h6");
		// var field4_text = document.createTextNode("Null");
		// field4.appendChild(field4_text);
		// field4.setAttribute("id", "img4_field");
		// field4.setAttribute("hidden", "true");
		// document.getElementById("div_img4").appendChild(field4);
	}
	function drag5(ev) {;
    	currentid = "img5";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount5 = 0;
		// document.getElementById("div_img5").removeChild(document.getElementById("img5_field"));
		// var field5 = document.createElement("h6");
		// var field5_text = document.createTextNode("Null");
		// field5.appendChild(field5_text);
		// field5.setAttribute("id", "img5_field");
		// field5.setAttribute("hidden", "true");
		// document.getElementById("div_img5").appendChild(field5);
	}
	function drop0(ev) {
    	ev.preventDefault();
    	var data = ev.dataTransfer.getData("Text");
    	document.getElementById(data).setAttribute("style", "height:100px; width:100px; border-radius:0px;");
    	ev.target.appendChild(document.getElementById(data));
	}
	function switch_drop1(ev) {
		if(currentid === "img1") {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder1").hasChildNodes()) {
				console.log("Error: Image holder one is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount1 = 1;
			}
			// document.getElementById("div_img1").removeChild(document.getElementById("img1_field"));
			// var field1 = document.createElement("h6");
			// var field1_text = document.createTextNode("1");
			// field1.appendChild(field1_text);
			// field1.setAttribute("id", "img1_field");
			// field1.setAttribute("hidden", "true");
			// document.getElementById("div_img1").appendChild(field1);
			document.getElementById("img1_field").value = "1";
		    alert(document.getElementById("img1_field").value);
		}
		else if(currentid === "img2"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder1").hasChildNodes()) {
				console.log("Error: Image holder two is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount2 = 1;
			}
			// document.getElementById("div_img2").removeChild(document.getElementById("img2_field"));
			// var field2 = document.createElement("h6");
			// var field2_text = document.createTextNode("1");
			// field2.appendChild(field2_text);
			// field2.setAttribute("id", "img2_field");
			// field2.setAttribute("hidden", "true");
			// document.getElementById("div_img2").appendChild(field2);
			document.getElementById("img2_field").value = "1";
		    alert(document.getElementById("img2_field").value);
		}
		else if(currentid === "img3"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder1").hasChildNodes()) {
				console.log("Error: Image holder three is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount3 = 1;
			}
			// document.getElementById("div_img3").removeChild(document.getElementById("img3_field"));
			// var field3 = document.createElement("h6");
			// var field3_text = document.createTextNode("1");
			// field3.appendChild(field3_text);
			// field3.setAttribute("id", "img3_field");
			// field3.setAttribute("hidden", "true");
			// document.getElementById("div_img3").appendChild(field3);
			document.getElementById("img3_field").value = "1";
		    alert(document.getElementById("img3_field").value);
		}
		else if(currentid === "img4"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder1").hasChildNodes()) {
				console.log("Error: Image holder four is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount4 = 1;
			}
			// document.getElementById("div_img4").removeChild(document.getElementById("img4_field"));
			// var field4 = document.createElement("h6");
			// var field4_text = document.createTextNode("1");
			// field4.appendChild(field4_text);
			// field4.setAttribute("id", "img4_field");
			// field4.setAttribute("hidden", "true");
			// document.getElementById("div_img4").appendChild(field4);
			document.getElementById("img4_field").value = "1";
		    alert(document.getElementById("img4_field").value);

		}
		else if(currentid === "img5"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder1").hasChildNodes()) {
				console.log("Error: Image holder five is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount5 = 1;
			}
			// document.getElementById("div_img5").removeChild(document.getElementById("img5_field"));
			// var field5 = document.createElement("h6");
			// var field5_text = document.createTextNode("1");
			// field5.appendChild(field5_text);
			// field5.setAttribute("id", "img5_field");
			// field5.setAttribute("hidden", "true");
			// document.getElementById("div_img5").appendChild(field5);
			document.getElementById("img5_field").value = "1";
		    alert(document.getElementById("img5_field").value);

		}
		else {
			console.log("Error");
		}
	}
	function switch_drop2(ev) {
		if(currentid === "img1") {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder2").hasChildNodes()) {
				console.log("Error: Image holder one is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:68px; width:68px; border-radius:50%;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount1 = 2;
			}
			// document.getElementById("div_img1").removeChild(document.getElementById("img1_field"));
			// var field1 = document.createElement("h6");
			// var field1_text = document.createTextNode("2");
			// field1.appendChild(field1_text);
			// field1.setAttribute("id", "img1_field");
			// field1.setAttribute("hidden", "true");
			// document.getElementById("div_img1").appendChild(field1);
			document.getElementById("img1_field").value = "2";
		    alert(document.getElementById("img1_field").value);
		}
		else if(currentid === "img2"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder2").hasChildNodes()) {
				console.log("Error: Image holder two is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:68px; width:68px; border-radius:50%;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount2 = 2;
			}
			// document.getElementById("div_img2").removeChild(document.getElementById("img2_field"));
			// var field2 = document.createElement("h6");
			// var field2_text = document.createTextNode("2");
			// field2.appendChild(field2_text);
			// field2.setAttribute("id", "img2_field");
			// field2.setAttribute("hidden", "true");
			// document.getElementById("div_img2").appendChild(field2);
			document.getElementById("img2_field").value = "2";
		    alert(document.getElementById("img2_field").value);
		}
		else if(currentid === "img3"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder2").hasChildNodes()) {
				console.log("Error: Image holder three is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:68px; width:68px; border-radius:50%;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount3 = 2;
			}
			// document.getElementById("div_img3").removeChild(document.getElementById("img3_field"));
			// var field3 = document.createElement("h6");
			// var field3_text = document.createTextNode("2");
			// field3.appendChild(field3_text);
			// field3.setAttribute("id", "img3_field");
			// field3.setAttribute("hidden", "true");
			// document.getElementById("div_img3").appendChild(field3);
			document.getElementById("img3_field").value = "2";
		    alert(document.getElementById("img3_field").value);

		}
		else if(currentid === "img4"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder2").hasChildNodes()) {
				console.log("Error: Image holder four is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:68px; width:68px; border-radius:50%;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount4 = 2;
			}
			// document.getElementById("div_img4").removeChild(document.getElementById("img4_field"));
			// var field4 = document.createElement("h6");
			// var field4_text = document.createTextNode("2");
			// field4.appendChild(field4_text);
			// field4.setAttribute("id", "img4_field");
			// field4.setAttribute("hidden", "true");
			// document.getElementById("div_img4").appendChild(field4);
			document.getElementById("img4_field").value = "2";
		    alert(document.getElementById("img4_field").value);

		}
		else if(currentid === "img5"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder3").hasChildNodes()) {
				console.log("Error: Image holder five is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:68px; width:68px; border-radius:50%;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount5 = 2;
			}
			// document.getElementById("div_img5").removeChild(document.getElementById("img5_field"));
			// var field5 = document.createElement("h6");
			// var field5_text = document.createTextNode("2");
			// field5.appendChild(field5_text);
			// field5.setAttribute("id", "img5_field");
			// field5.setAttribute("hidden", "true");
			// document.getElementById("div_img5").appendChild(field5);
			document.getElementById("img5_field").value = "2";
		    alert(document.getElementById("img5_field").value);

		}
		else {
			console.log("Error");
		}
	}
	function switch_drop3(ev) {
		if(currentid === "img1") {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder3").hasChildNodes()) {
				console.log("Error: Image holder one is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:63px; width:54px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount1 = 3;
			}
			// document.getElementById("div_img1").removeChild(document.getElementById("img1_field"));
			// var field1 = document.createElement("h6");
			// var field1_text = document.createTextNode("3");
			// field1.appendChild(field1_text);
			// field1.setAttribute("id", "img1_field");
			// field1.setAttribute("hidden", "true");
			// document.getElementById("div_img1").appendChild(field1);
			document.getElementById("img1_field").value = "3";
		    alert(document.getElementById("img1_field").value);
		}
		else if(currentid === "img2"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder3").hasChildNodes()) {
				console.log("Error: Image holder two is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:63px; width:54px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount2 = 3;
			}
			// document.getElementById("div_img2").removeChild(document.getElementById("img2_field"));
			// var field2 = document.createElement("h6");
			// var field2_text = document.createTextNode("3");
			// field2.appendChild(field2_text);
			// field2.setAttribute("id", "img2_field");
			// field2.setAttribute("hidden", "true");
			// document.getElementById("div_img2").appendChild(field2);
			document.getElementById("img2_field").value = "3";
		    alert(document.getElementById("img2_field").value);
		}
		else if(currentid === "img3"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder3").hasChildNodes()) {
				console.log("Error: Image holder three is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:63px; width:54px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount3 = 3;
			}
			// document.getElementById("div_img3").removeChild(document.getElementById("img3_field"));
			// var field3 = document.createElement("h6");
			// var field3_text = document.createTextNode("3");
			// field3.appendChild(field3_text);
			// field3.setAttribute("id", "img3_field");
			// field3.setAttribute("hidden", "true");
			// document.getElementById("div_img3").appendChild(field3);
			document.getElementById("img3_field").value = "3";
		    alert(document.getElementById("img3_field").value);

		}
		else if(currentid === "img4"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder3").hasChildNodes()) {
				console.log("Error: Image holder four is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:63px; width:54px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount4 = 3;
			}
			// document.getElementById("div_img4").removeChild(document.getElementById("img4_field"));
			// var field4 = document.createElement("h6");
			// var field4_text = document.createTextNode("3");
			// field4.appendChild(field4_text);
			// field4.setAttribute("id", "img4_field");
			// field4.setAttribute("hidden", "true");
			// document.getElementById("div_img4").appendChild(field4);
			document.getElementById("img4_field").value = "3";
		    alert(document.getElementById("img4_field").value);
		}
		else if(currentid === "img5"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder3").hasChildNodes()) {
				console.log("Error: Image holder five is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:19px; height:63px; width:54px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount5 = 3;
			}
			// document.getElementById("div_img5").removeChild(document.getElementById("img5_field"));
			// var field5 = document.createElement("h6");
			// var field5_text = document.createTextNode("3");
			// field5.appendChild(field5_text);
			// field5.setAttribute("id", "img5_field");
			// field5.setAttribute("hidden", "true");
			// document.getElementById("div_img5").appendChild(field5);
			document.getElementById("img5_field").value = "3";
		    alert(document.getElementById("img5_field").value);
		}
		else {
			console.log("Error");
		}
	}
	function switch_drop4(ev) {
		if(currentid === "img1"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder4").hasChildNodes()) {
				console.log("Error: Image holder one is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:17px; border-radius:50%; height:67px; width:67px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount1 = 4;
			}
			// document.getElementById("div_img1").removeChild(document.getElementById("img1_field"));
			// var field1 = document.createElement("h6");
			// var field1_text = document.createTextNode("4");
			// field1.appendChild(field1_text);
			// field1.setAttribute("id", "img1_field");
			// field1.setAttribute("hidden", "true");
			// document.getElementById("div_img1").appendChild(field1);
			document.getElementById("img1_field").value = "4";
		    alert(document.getElementById("img1_field").value);
		}
		else if(currentid === "img2"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder4").hasChildNodes()) {
				console.log("Error: Image holder two is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:17px; border-radius:50%; height:67px; width:67px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount2 = 4;
			}
			// document.getElementById("div_img2").removeChild(document.getElementById("img2_field"));
			// var field2 = document.createElement("h6");
			// var field2_text = document.createTextNode("4");
			// field2.appendChild(field2_text);
			// field2.setAttribute("id", "img2_field");
			// field2.setAttribute("hidden", "true");
			// document.getElementById("div_img2").appendChild(field2);
			document.getElementById("img2_field").value = "4";
		    alert(document.getElementById("img2_field").value);
		}
		else if(currentid === "img3"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder4").hasChildNodes()) {
				console.log("Error: Image holder three is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:17px; border-radius:50%; height:67px; width:67px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount3 = 4;
			}
			// document.getElementById("div_img3").removeChild(document.getElementById("img3_field"));
			// var field3 = document.createElement("h6");
			// var field3_text = document.createTextNode("4");
			// field3.appendChild(field3_text);
			// field3.setAttribute("id", "img3_field");
			// field3.setAttribute("hidden", "true");
			// document.getElementById("div_img3").appendChild(field3);
			document.getElementById("img3_field").value = "4";
		    alert(document.getElementById("img3_field").value);
		}
		else if(currentid === "img4"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder4").hasChildNodes()) {
				console.log("Error: Image holder four is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:17px; border-radius:50%; height:67px; width:67px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount4 = 4;
			}
			// document.getElementById("div_img4").removeChild(document.getElementById("img4_field"));
			// var field4 = document.createElement("h6");
			// var field4_text = document.createTextNode("4");
			// field4.appendChild(field4_text);
			// field4.setAttribute("id", "img4_field");
			// field4.setAttribute("hidden", "true");
			// document.getElementById("div_img4").appendChild(field4);
			document.getElementById("img4_field").value = "4";
		    alert(document.getElementById("img4_field").value);
		}
		else if(currentid === "img5"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder4").hasChildNodes()) {
				console.log("Error: Image holder five is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:17px; border-radius:50%; height:67px; width:67px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount5 = 4;
			}
			// document.getElementById("div_img5").removeChild(document.getElementById("img5_field"));
			// var field5 = document.createElement("h6");
			// var field5_text = document.createTextNode("4");
			// field5.appendChild(field5_text);
			// field5.setAttribute("id", "img5_field");
			// field5.setAttribute("hidden", "true");
			// document.getElementById("div_img5").appendChild(field5);
			document.getElementById("img5_field").value = "4";
		    alert(document.getElementById("img5_field").value);
		}
		else {
			console.log("Error");
		}
	}
	function switch_drop5(ev) {
		if(currentid === "img1") {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder5").hasChildNodes()) {
				console.log("Error: Image holder one is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount1 = 5;
			}
			// document.getElementById("div_img1").removeChild(document.getElementById("img1_field"));
			// var field1 = document.createElement("h6");
			// var field1_text = document.createTextNode("5");
			// field1.appendChild(field1_text);
			// field1.setAttribute("id", "img1_field");
			// field1.setAttribute("hidden", "true");
			// document.getElementById("div_img1").appendChild(field1);
			document.getElementById("img1_field").value = "5";
		    alert(document.getElementById("img1_field").value);
		}
		else if(currentid === "img2"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder5").hasChildNodes()) {
				console.log("Error: Image holder two is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount2 = 5;
			}
			// document.getElementById("div_img2").removeChild(document.getElementById("img2_field"));
			// var field2 = document.createElement("h6");
			// var field2_text = document.createTextNode("5");
			// field2.appendChild(field2_text);
			// field2.setAttribute("id", "img2_field");
			// field2.setAttribute("hidden", "true");
			// document.getElementById("div_img2").appendChild(field2);
			document.getElementById("img2_field").value = "5";
		    alert(document.getElementById("img2_field").value);
		}
		else if(currentid === "img3"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder5").hasChildNodes()) {
				console.log("Error: Image holder three is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount3 = 5;
			}
			// document.getElementById("div_img3").removeChild(document.getElementById("img3_field"));
			// var field3 = document.createElement("h6");
			// var field3_text = document.createTextNode("5");
			// field3.appendChild(field3_text);
			// field3.setAttribute("id", "img3_field");
			// field3.setAttribute("hidden", "true");
			// document.getElementById("div_img3").appendChild(field3);
			document.getElementById("img3_field").value = "5";
		    alert(document.getElementById("img3_field").value);
		}
		else if(currentid === "img4"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder5").hasChildNodes()) {
				console.log("Error: Image holder four is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:100px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount4 = 5;
			}
			// document.getElementById("div_img4").removeChild(document.getElementById("img4_field"));
			// var field4 = document.createElement("h6");
			// var field4_text = document.createTextNode("5");
			// field4.appendChild(field4_text);
			// field4.setAttribute("id", "img4_field");
			// field4.setAttribute("hidden", "true");
			// document.getElementById("div_img4").appendChild(field4);
			document.getElementById("img4_field").value = "5";
		    alert(document.getElementById("img4_field").value);
		}
		else if(currentid === "img5"){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			if(document.getElementById("img_holder5").hasChildNodes()) {
				console.log("Error: Image holder five is already occupied");
			}
			else {
				document.getElementById(data).setAttribute("style", "margin-top:12px; height:62px; width:78px;");
				ev.target.appendChild(document.getElementById(data));
		    	dropCount5 = 5;
			}
			// document.getElementById("div_img5").removeChild(document.getElementById("img5_field"));
			// var field5 = document.createElement("h6");
			// var field5_text = document.createTextNode("5");
			// field5.appendChild(field5_text);
			// field5.setAttribute("id", "img5_field");
			// field5.setAttribute("hidden", "true");
			// document.getElementById("div_img5").appendChild(field5);
			document.getElementById("img5_field").value = "5";
		    alert(document.getElementById("img5_field").value);
		}
		else {
			console.log("Error");
		}
	}
//Image 1
	function confirm_img_one() {
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
			console.log(fileReader.readAsDataURL(document.getElementById('img_input1').files[0]));
		}
		fileReader.readAsDataURL(document.getElementById('img_input1').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img1");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag1(event)");
		document.getElementById("images").appendChild(img); 
		document.getElementById("div_img1").removeChild(document.getElementById("confirm_img1"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_one()");
		button.setAttribute("id", "Deny_img1");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("div_img1").appendChild(button);
		confirmCount += 1;
		submitCheck();
	}
	function Deny_img_one(){
		if(dropCount1 === 1) {
			document.getElementById("img_holder1").removeChild(document.getElementById("img1"));
		}
		else if(dropCount1 === 2){
			document.getElementById("img_holder2").removeChild(document.getElementById("img1"));
		}
		else if(dropCount1 === 3){
			document.getElementById("img_holder3").removeChild(document.getElementById("img1"));
		}
		else if(dropCount1 === 4){
			document.getElementById("img_holder4").removeChild(document.getElementById("img1"));
		}
		else if(dropCount1 === 5){
			document.getElementById("img_holder5").removeChild(document.getElementById("img1"));
		}
		else {
			document.getElementById("images").removeChild(document.getElementById("img1"));
		}
		document.getElementById("div_img1").removeChild(document.getElementById("Deny_img1"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_one()");
		button.setAttribute("id", "confirm_img1");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("div_img1").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Image 2
	function confirm_img_two() {
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
			console.log(fileReader.readAsDataURL(document.getElementById('img_input2').files[0]));
		}
		fileReader.readAsDataURL(document.getElementById('img_input2').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img2");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag2(event)");
		document.getElementById("images").appendChild(img); ;
		document.getElementById("div_img2").removeChild(document.getElementById("confirm_img2"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_two()");
		button.setAttribute("id", "Deny_img2");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("div_img2").appendChild(button);
		confirmCount += 1;
		submitCheck();
	}
	function Deny_img_two(){
		if(dropCount2 === 1) {
			document.getElementById("img_holder1").removeChild(document.getElementById("img2"));
		}
		else if(dropCount2 === 2){
			document.getElementById("img_holder2").removeChild(document.getElementById("img2"));
		}
		else if(dropCount2 === 3){
			document.getElementById("img_holder3").removeChild(document.getElementById("img2"));
		}
		else if(dropCount2 === 4){
			document.getElementById("img_holder4").removeChild(document.getElementById("img2"));
		}
		else if(dropCount2 === 5){
			document.getElementById("img_holder5").removeChild(document.getElementById("img2"));
		}
		else {
			document.getElementById("images").removeChild(document.getElementById("img2"));
		}
		document.getElementById("div_img2").removeChild(document.getElementById("Deny_img2"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_two()");
		button.setAttribute("id", "confirm_img2");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("div_img2").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Image 3
	function confirm_img_three() {
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
			console.log(fileReader.readAsDataURL(document.getElementById('img_input3').files[0]));
		}
		fileReader.readAsDataURL(document.getElementById('img_input3').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img3");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag3(event)");
		document.getElementById("images").appendChild(img); 
		document.getElementById("div_img3").removeChild(document.getElementById("confirm_img3"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_three()");
		button.setAttribute("id", "Deny_img3");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("div_img3").appendChild(button);
		confirmCount += 1;
		submitCheck();
	}
	function Deny_img_three(){
		if(dropCount3 === 1) {
			document.getElementById("img_holder1").removeChild(document.getElementById("img3"));
		}
		else if(dropCount3 === 2){
			document.getElementById("img_holder2").removeChild(document.getElementById("img3"));
		}
		else if(dropCount3 === 3){
			document.getElementById("img_holder3").removeChild(document.getElementById("img3"));
		}
		else if(dropCount3 === 4){
			document.getElementById("img_holder4").removeChild(document.getElementById("img3"));
		}
		else if(dropCount3 === 5){
			document.getElementById("img_holder5").removeChild(document.getElementById("img13"));
		}
		else {
			document.getElementById("images").removeChild(document.getElementById("img3"));
		}
		document.getElementById("div_img3").removeChild(document.getElementById("Deny_img3"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_three()");
		button.setAttribute("id", "confirm_img3");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("div_img3").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Image 4
	function confirm_img_four() {
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
			console.log(fileReader.readAsDataURL(document.getElementById('img_input4').files[0]));
		}
		fileReader.readAsDataURL(document.getElementById('img_input4').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img4");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag4(event)");
		document.getElementById("images").appendChild(img); 
		document.getElementById("div_img4").removeChild(document.getElementById("confirm_img4"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_four()");
		button.setAttribute("id", "Deny_img4");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("div_img4").appendChild(button);
		confirmCount += 1;
		submitCheck();
	}
	function Deny_img_four(){
		if(dropCount4 === 1) {
			document.getElementById("img_holder1").removeChild(document.getElementById("img4"));
		}
		else if(dropCount4 === 2){
			document.getElementById("img_holder2").removeChild(document.getElementById("img4"));
		}
		else if(dropCount4 === 3){
			document.getElementById("img_holder3").removeChild(document.getElementById("img4"));
		}
		else if(dropCount4 === 4){
			document.getElementById("img_holder4").removeChild(document.getElementById("img4"));
		}
		else if(dropCount4 === 5){
			document.getElementById("img_holder5").removeChild(document.getElementById("img4"));
		}
		else {
			document.getElementById("images").removeChild(document.getElementById("img4"));
		}
		document.getElementById("div_img4").removeChild(document.getElementById("Deny_img4"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_four()");
		button.setAttribute("id", "confirm_img4");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("div_img4").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Image 5
	function confirm_img_five() {
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
			console.log(fileReader.readAsDataURL(document.getElementById('img_input5').files[0]));
		}
		fileReader.readAsDataURL(document.getElementById('img_input5').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img5");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag5(event)");
		document.getElementById("images").appendChild(img); 
		document.getElementById("div_img5").removeChild(document.getElementById("confirm_img5"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_five()");
		button.setAttribute("id", "Deny_img5");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("div_img5").appendChild(button);
		confirmCount += 1;
		submitCheck();
	}
	function Deny_img_five(){
		if(dropCount5 === 1) {
			document.getElementById("img_holder1").removeChild(document.getElementById("img5"));
		}
		else if(dropCount5 === 2){
			document.getElementById("img_holder2").removeChild(document.getElementById("img5"));
		}
		else if(dropCount5 === 3){
			document.getElementById("img_holder3").removeChild(document.getElementById("img5"));
		}
		else if(dropCount5 === 4){
			document.getElementById("img_holder4").removeChild(document.getElementById("img5"));
		}
		else if(dropCount5 === 5){
			document.getElementById("img_holder5").removeChild(document.getElementById("img5"));
		}
		else {
			document.getElementById("images").removeChild(document.getElementById("img5"));
		}
		document.getElementById("div_img5").removeChild(document.getElementById("Deny_img5"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_five()");
		button.setAttribute("id", "confirm_img5");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("div_img5").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Header Text
	function confirmHeader() {
		document.getElementById("div_header").removeChild(document.getElementById("header_text"));
		var header = document.createElement("h3");
		var header_text = document.createTextNode(document.text_form.header_text.value);
		header.appendChild(header_text);
		header.setAttribute("id", "header_text");
		header.setAttribute("style", "text-align:center");
		document.getElementById("div_header").appendChild(header);
		document.getElementById("label_header").removeChild(document.getElementById("confirm_header_text"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "DenyHeader()");
		button.setAttribute("id", "Deny_header_text");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("label_header").appendChild(button);
		document.getElementById("header_field").value = document.text_form.header_text.value;
		alert(document.getElementById("header_field").value);
		confirmCount += 1;
		submitCheck();
	}
	function DenyHeader() {
		document.getElementById("div_header").removeChild(document.getElementById("header_text"));
		var header = document.createElement("h3");
		var header_text = document.createTextNode("Header Text");
		header.appendChild(header_text);
		header.setAttribute("id", "header_text");
		header.setAttribute("style", "text-align:center");
		document.getElementById("div_header").appendChild(header);
		document.getElementById("label_header").removeChild(document.getElementById("Deny_header_text"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirmHeader()");
		button.setAttribute("id", "confirm_header_text");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("label_header").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Date 1
	function confirmDateOne() {
		document.getElementById("div_date1").removeChild(document.getElementById("sample_date1"));
		var date1 = document.createElement("h6");
		var date1_text = document.createTextNode(document.text_form.select_date1.value);
		date1.appendChild(date1_text);
		date1.setAttribute("id", "sample_date1");
		document.getElementById("div_date1").appendChild(date1);
		document.getElementById("label_date1").removeChild(document.getElementById("confirm_date1"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "DenyDateOne()");
		button.setAttribute("id", "Deny_date1");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("label_date1").appendChild(button);
		document.getElementById("date1_field").value = document.text_form.select_date1.value;
		alert(document.getElementById("date1_field").value);
		confirmCount += 1;
		submitCheck();
	}
	function DenyDateOne() {
		document.getElementById("div_date1").removeChild(document.getElementById("sample_date1"));
		var date1 = document.createElement("h6");
		var date1_text = document.createTextNode("1900");
		date1.appendChild(date1_text);
		date1.setAttribute("id", "sample_date1");
		document.getElementById("div_date1").appendChild(date1);
		document.getElementById("label_date1").removeChild(document.getElementById("Deny_date1"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirmDateOne()");
		button.setAttribute("id", "confirm_date1");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("label_date1").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Date 2
	function confirmDateTwo() {
		document.getElementById("div_date2").removeChild(document.getElementById("sample_date2"));
		var date2 = document.createElement("h6");
		var date2_text = document.createTextNode(document.text_form.select_date2.value);
		date2.appendChild(date2_text);
		date2.setAttribute("id", "sample_date2");
		document.getElementById("div_date2").appendChild(date2);
		document.getElementById("label_date2").removeChild(document.getElementById("confirm_date2"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "DenyDateTwo()");
		button.setAttribute("id", "Deny_date2");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("label_date2").appendChild(button);
		document.getElementById("date2_field").value = document.text_form.select_date2.value;
		alert(document.getElementById("date2_field").value);
		confirmCount += 1;
		submitCheck();
	}
	function DenyDateTwo() {
		document.getElementById("div_date2").removeChild(document.getElementById("sample_date2"));
		var date2 = document.createElement("h6");
		var date2_text = document.createTextNode("1901");
		date2.appendChild(date2_text);
		date2.setAttribute("id", "sample_date2");
		document.getElementById("div_date2").appendChild(date2);
		document.getElementById("label_date2").removeChild(document.getElementById("Deny_date2"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirmDateTwo()");
		button.setAttribute("id", "confirm_date2");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("label_date2").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Date 3
	function confirmDateThree() {
		document.getElementById("div_date3").removeChild(document.getElementById("sample_date3"));
		var date3 = document.createElement("h6");
		var date3_text = document.createTextNode(document.text_form.select_date3.value);
		date3.appendChild(date3_text);
		date3.setAttribute("id", "sample_date3");
		document.getElementById("div_date3").appendChild(date3);
		document.getElementById("label_date3").removeChild(document.getElementById("confirm_date3"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "DenyDateThree()");
		button.setAttribute("id", "Deny_date3");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("label_date3").appendChild(button);
		document.getElementById("date3_field").value = document.text_form.select_date3.value;
		alert(document.getElementById("date3_field").value);
		confirmCount += 1;
		submitCheck();
	}
	function DenyDateThree() {
		document.getElementById("div_date3").removeChild(document.getElementById("sample_date3"));
		var date3 = document.createElement("h6");
		var date3_text = document.createTextNode("1902");
		date3.appendChild(date3_text);
		date3.setAttribute("id", "sample_date3");
		document.getElementById("div_date3").appendChild(date3);
		document.getElementById("label_date3").removeChild(document.getElementById("Deny_date3"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirmDateThree()");
		button.setAttribute("id", "confirm_date3");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("label_date3").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Date 4
	function confirmDateFour() {
		document.getElementById("div_date4").removeChild(document.getElementById("sample_date4"));
		var date4 = document.createElement("h6");
		var date4_text = document.createTextNode(document.text_form.select_date4.value);
		date4.appendChild(date4_text);
		date4.setAttribute("id", "sample_date4");
		document.getElementById("div_date4").appendChild(date4);
		document.getElementById("label_date4").removeChild(document.getElementById("confirm_date4"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "DenyDateFour()");
		button.setAttribute("id", "Deny_date4");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("label_date4").appendChild(button);
		document.getElementById("date4_field").value = document.text_form.select_date4.value;
		alert(document.getElementById("date4_field").value);
		confirmCount += 1;
		submitCheck();
	}
	function DenyDateFour() {
		document.getElementById("div_date4").removeChild(document.getElementById("sample_date4"));
		var date4 = document.createElement("h6");
		var date4_text = document.createTextNode("1903");
		date4.appendChild(date4_text);
		date4.setAttribute("id", "sample_date4");
		document.getElementById("div_date4").appendChild(date4);
		document.getElementById("label_date4").removeChild(document.getElementById("Deny_date4"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirmDateFour()");
		button.setAttribute("id", "confirm_date4");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("label_date4").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}
//Date 5
	function confirmDateFive() {
		document.getElementById("div_date5").removeChild(document.getElementById("sample_date5"));
		var date5 = document.createElement("h6");
		var date5_text = document.createTextNode(document.text_form.select_date5.value);
		date5.appendChild(date5_text);
		date5.setAttribute("id", "sample_date5");
		document.getElementById("div_date5").appendChild(date5);
		document.getElementById("label_date5").removeChild(document.getElementById("confirm_date5"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "DenyDateFive()");
		button.setAttribute("id", "Deny_date5");
		var button_text = document.createTextNode("Deny");
		button.appendChild(button_text);
		document.getElementById("label_date5").appendChild(button);
		document.getElementById("date5_field").value = document.text_form.select_date5.value;
		alert(document.getElementById("date5_field").value);
		confirmCount += 1;
		submitCheck();
	}
	function DenyDateFive() {
		document.getElementById("div_date5").removeChild(document.getElementById("sample_date5"));
		var date5 = document.createElement("h6");
		var date5_text = document.createTextNode("1904");
		date5.appendChild(date5_text);
		date5.setAttribute("id", "sample_date5");
		document.getElementById("div_date5").appendChild(date5);
		document.getElementById("label_date5").removeChild(document.getElementById("Deny_date5"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirmDateFive()");
		button.setAttribute("id", "confirm_date5");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		document.getElementById("label_date5").appendChild(button);
		confirmCount -= 1;
		submitCheck();
	}

	function imgchange(imgclass) {
		var concat = "#" + imgclass;
        $(concat).show();
        
    }