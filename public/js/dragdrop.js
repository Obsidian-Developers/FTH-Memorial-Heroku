	var dropCount1 = 0;
	var dropCount2 = 0;
	var dropCount3 = 0;
	var dropCount4 = 0;
	var dropCount5 = 0;
	var currentid = "";
	function submitCheck() {
		if(img_holder1.hasChildNodes() && img_holder2.hasChildNodes() && img_holder3.hasChildNodes() && img_holder4.hasChildNodes && img_holder5.hasChildNodes()) {
			var download = document.createElement("button");
			var download_text = document.createTextNode("Download");
			download.appendChild(download_text);
			download.setAttribute("id", "download_form");
			download.setAttribute("onClick", "render()");
			document.getElementById("form_div").appendChild(download);
			var submit = document.createElement("button");
			var submit_text = document.createTextNode("Submit");
			submit.appendChild(submit_text);
			submit.setAttribute("id", "submit_form");
			submit.setAttribute("onClick", "submitt()");
			document.getElementById("div_submit").appendChild(submit);
		}
		else {
			if(document.getElementById("div_submit").hasChildNodes()) {
				document.getElementById("form_div").removeChild(document.getElementById("download_form"));
				document.getElementById("div_submit").removeChild(document.getElementById("submit_form"));
				console.log("Field Empty");
			}
			else {
				console.log("Empty Fields");
			}
		}
	}
	function submitt() {
		var date1 = document.getElementById("img_holder1_text").value;
		var date2 = document.getElementById("img_holder2_text").value;
		var date3 = document.getElementById("img_holder3_text").value;
		var date4 = document.getElementById("img_holder4_text").value;
		var date5 = document.getElementById("img_holder5_text").value;
		var header = document.getElementById("header_text").value;
		var img1_field = document.getElementById("img1_field").value;
		var img2_field = document.getElementById("img2_field").value;
		var img3_field = document.getElementById("img3_field").value;
		var img4_field = document.getElementById("img4_field").value;
		var img5_field = document.getElementById("img5_field").value;
		var date1FB = document.createElement("input");
		date1FB.setAttribute("type", "text");
		date1FB.setAttribute("hidden", "true");
		date1FB.setAttribute("value", date1);
		date1FB.setAttribute("id", "date1FB");
		document.getElementById("form_div").appendChild(date1FB);
		var date2FB = document.createElement("input");
		date2FB.setAttribute("type", "text");
		date2FB.setAttribute("hidden", "true");
		date2FB.setAttribute("value", date2);
		date2FB.setAttribute("id", "date2FB");
		document.getElementById("form_div").appendChild(date2FB);
		var date3FB = document.createElement("input");
		date3FB.setAttribute("type", "text");
		date3FB.setAttribute("hidden", "true");
		date3FB.setAttribute("value", date3);
		date3FB.setAttribute("id", "date3FB");
		document.getElementById("form_div").appendChild(date3FB);
		var date4FB = document.createElement("input");
		date4FB.setAttribute("type", "text");
		date4FB.setAttribute("hidden", "true");
		date4FB.setAttribute("value", date4);
		date4FB.setAttribute("id", "date4FB");
		document.getElementById("form_div").appendChild(date4FB);
		var date5FB = document.createElement("input");
		date5FB.setAttribute("type", "text");
		date5FB.setAttribute("hidden", "true");
		date5FB.setAttribute("value", date5);
		date5FB.setAttribute("id", "date5FB");
		document.getElementById("form_div").appendChild(date5FB);
		var headerFB = document.createElement("input");
		headerFB.setAttribute("type", "text");
		headerFB.setAttribute("hidden", "true");
		headerFB.setAttribute("value", header);
		headerFB.setAttribute("id", "headerFB");
		document.getElementById("form_div").appendChild(headerFB);
		var img1FB = document.createElement("input");
		img1FB.setAttribute("type", "text");
		img1FB.setAttribute("hidden", "true");
		img1FB.setAttribute("value", img1);
		img1FB.setAttribute("id", "img1FB");
		document.getElementById("form_div").appendChild(img1FB);
		var img2FB = document.createElement("input");
		img2FB.setAttribute("type", "text");
		img2FB.setAttribute("hidden", "true");
		img2FB.setAttribute("value", img2);
		img2FB.setAttribute("id", "img2FB");
		document.getElementById("form_div").appendChild(img2FB);
		var img3FB = document.createElement("input");
		img3FB.setAttribute("type", "text");
		img3FB.setAttribute("hidden", "true");
		img3FB.setAttribute("value", img3);
		img3FB.setAttribute("id", "img3FB");
		document.getElementById("form_div").appendChild(img3FB);
		var img4FB = document.createElement("input");
		img4FB.setAttribute("type", "text");
		img4FB.setAttribute("hidden", "true");
		img4FB.setAttribute("value", img4);
		img4FB.setAttribute("id", "img4FB");
		document.getElementById("form_div").appendChild(img4FB);
		var img5FB = document.createElement("input");
		img5FB.setAttribute("type", "text");
		img5FB.setAttribute("hidden", "true");
		img5FB.setAttribute("value", img5);
		img5FB.setAttribute("id", "img5FB");
		document.getElementById("form_div").appendChild(img5FB);
		console.log("Submitted");
	}
	function render() {
		var date1 = document.getElementById("img_holder1_text").value;
		var date2 = document.getElementById("img_holder2_text").value;
		var date3 = document.getElementById("img_holder3_text").value;
		var date4 = document.getElementById("img_holder4_text").value;
		var date5 = document.getElementById("img_holder5_text").value;
		var header = document.getElementById("header_text").value;
		var content = date1  + " " + date2 + " "  + date3 + " "  + date4 + " "  + date5 + " "  + header
		var canvas = document.getElementById("rendered_img");
		var ctx = canvas.getContext("2d");
		var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");	
		var img3 = document.getElementById("img3");	
		var img4 = document.getElementById("img4");	
		var img5 = document.getElementById("img5");	
		var width = 50;
		var height = 25;
		ctx.strokeText(content, 10, 10);
		ctx.drawImage(img1, 10, 20, width, height);
		ctx.drawImage(img2, 10, 45, width, height);
		ctx.drawImage(img3, 10, 70, width, height);
		ctx.drawImage(img4, 10, 95, width, height);
		ctx.drawImage(img5, 10, 120, width, height);
		var data = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		window.location.href = data;
	}
	function allowDrop(ev) {
		ev.preventDefault();
	}
	function drag1(ev) {
		currentid = "img1";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount1 = 0;
	}
	function drag2(ev) {
		currentid = "img2";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount2 = 0;
	}
	function drag3(ev) {
    	currentid = "img3";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount3 = 0;
	}
	function drag4(ev) {
    	currentid = "img4";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount4 = 0;
	}
	function drag5(ev) {;
    	currentid = "img5";
    	ev.dataTransfer.setData("Text", ev.target.id);
    	dropCount5 = 0;
	}
	function drop0(ev) {
		var img_div = document.createElement("div");
		img_div.setAttribute("class", "two columns");
		if(currentid === "img1"){
			img_div.setAttribute("id", "preview1_div");
			document.getElementById("img1_field").value = "0";
		}
		else if(currentid === "img2") {
			img_div.setAttribute("id", "preview2_div");
			document.getElementById("img2_field").value = "0";
		}
		else if(currentid === "img3") {
			img_div.setAttribute("id", "preview3_div");
			document.getElementById("img3_field").value = "0";			
		}
		else if(currentid === "img4") {
			img_div.setAttribute("id", "preview4_div");
			document.getElementById("img4_field").value = "0";			
		}
		else if(currentid === "img5") {
			img_div.setAttribute("id", "preview5_div");
			document.getElementById("img5_field").value = "0";			
		}
		else {
			console.log("Error");
		}
    	ev.preventDefault();
    	var data = ev.dataTransfer.getData("Text");
    	document.getElementById(data).setAttribute("style", "height:100px; width:100px; border-radius:0px;");
		img_div.appendChild(document.getElementById(data));
    	ev.target.appendChild(img_div);
    	submitCheck();
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
			document.getElementById("img1_field").value = "1";
    		document.getElementById("images").removeChild(document.getElementById("preview1_div"));
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
			document.getElementById("img2_field").value = "1";
    		document.getElementById("images").removeChild(document.getElementById("preview2_div"));
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
			document.getElementById("img3_field").value = "1";
    		document.getElementById("images").removeChild(document.getElementById("preview3_div"));
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
			document.getElementById("img4_field").value = "1";
    		document.getElementById("images").removeChild(document.getElementById("preview4_div"));

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
			document.getElementById("img5_field").value = "1";
    		document.getElementById("images").removeChild(document.getElementById("preview5_div"));
		}
		else {
			console.log("Error");
		}
		submitCheck();
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
			document.getElementById("img1_field").value = "2";
    		document.getElementById("images").removeChild(document.getElementById("preview1_div"));
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
			document.getElementById("img2_field").value = "2";
    		document.getElementById("images").removeChild(document.getElementById("preview2_div"));
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
			document.getElementById("img3_field").value = "2";
    		document.getElementById("images").removeChild(document.getElementById("preview3_div"));

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
			document.getElementById("img4_field").value = "2";
    		document.getElementById("images").removeChild(document.getElementById("preview4_div"));

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
			document.getElementById("img5_field").value = "2";
    		document.getElementById("images").removeChild(document.getElementById("preview5_div"));
		}
		else {
			console.log("Error");
		}
		submitCheck();
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
			document.getElementById("img1_field").value = "3";
    		document.getElementById("images").removeChild(document.getElementById("preview1_div"));
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
			document.getElementById("img2_field").value = "3";
    		document.getElementById("images").removeChild(document.getElementById("preview2_div"));
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
			document.getElementById("img3_field").value = "3";
    		document.getElementById("images").removeChild(document.getElementById("preview3_div"));

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
			document.getElementById("img4_field").value = "3";
    		document.getElementById("images").removeChild(document.getElementById("preview4_div"));
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
			document.getElementById("img5_field").value = "3";
    		document.getElementById("images").removeChild(document.getElementById("preview5_div"));
		}
		else {
			console.log("Error");
		}
		submitCheck();
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
			document.getElementById("img1_field").value = "4";
    		document.getElementById("images").removeChild(document.getElementById("preview1_div"));
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
			document.getElementById("img2_field").value = "4";
    		document.getElementById("images").removeChild(document.getElementById("preview2_div"));
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
			document.getElementById("img3_field").value = "4";
    		document.getElementById("images").removeChild(document.getElementById("preview3_div"));
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
			document.getElementById("img4_field").value = "4";
    		document.getElementById("images").removeChild(document.getElementById("preview4_div"));
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
			document.getElementById("img5_field").value = "4";
    		document.getElementById("images").removeChild(document.getElementById("preview5_div"));
		}
		else {
			console.log("Error");
		}
		submitCheck();
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
			document.getElementById("img1_field").value = "5";
    		document.getElementById("images").removeChild(document.getElementById("preview1_div"));
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
			document.getElementById("img2_field").value = "5";
    		document.getElementById("images").removeChild(document.getElementById("preview2_div"));
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
			document.getElementById("img3_field").value = "5";
    		document.getElementById("images").removeChild(document.getElementById("preview3_div"));
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
			document.getElementById("img4_field").value = "5";
    		document.getElementById("images").removeChild(document.getElementById("preview4_div"));
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
			document.getElementById("img5_field").value = "5";
    		document.getElementById("images").removeChild(document.getElementById("preview5_div"));
		}
		else {
			console.log("Error");
		}
		submitCheck();
	}
//Image 1
	function confirm_img_one() {
		var img_div = document.createElement("div");
		img_div.setAttribute("class", "two columns");
		img_div.setAttribute("id", "preview1_div");
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
		}
		fileReader.readAsDataURL(document.getElementById('img_input1').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img1");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag1(event)");
		img_div.appendChild(img); 
		document.getElementById("images").appendChild(img_div);
		document.getElementById("div_img1").removeChild(document.getElementById("confirm_img1"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_one()");
		button.setAttribute("id", "Deny_img1");
		var button_text = document.createTextNode("Delete");
		button.appendChild(button_text);
		document.getElementById("div_img1").appendChild(button);
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
			document.getElementById("images").removeChild(document.getElementById("preview1_div"));
		}
		document.getElementById("div_img1").removeChild(document.getElementById("Deny_img1"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_one()");
		button.setAttribute("id", "confirm_img1");
		var button_text = document.createTextNode("Confirm");
		button.setAttribute("hidden", "true");
		button.appendChild(button_text);
		document.getElementById("div_img1").appendChild(button);
		submitCheck();
	}
//Image 2
	function confirm_img_two() {
		var img_div = document.createElement("div");
		img_div.setAttribute("class", "two columns");
		img_div.setAttribute("id", "preview2_div");
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
		}
		fileReader.readAsDataURL(document.getElementById('img_input2').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img2");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag2(event)");
		img_div.appendChild(img); 
		document.getElementById("images").appendChild(img_div);
		document.getElementById("div_img2").removeChild(document.getElementById("confirm_img2"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_two()");
		button.setAttribute("id", "Deny_img2");
		var button_text = document.createTextNode("Delete");
		button.appendChild(button_text);
		document.getElementById("div_img2").appendChild(button);
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
			document.getElementById("images").removeChild(document.getElementById("preview2_div"));
		}
		document.getElementById("div_img2").removeChild(document.getElementById("Deny_img2"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_two()");
		button.setAttribute("id", "confirm_img2");
		var button_text = document.createTextNode("Confirm");
		button.setAttribute("hidden", "true");
		button.appendChild(button_text);
		document.getElementById("div_img2").appendChild(button);
		submitCheck();
	}
//Image 3
	function confirm_img_three() {
		var img_div = document.createElement("div");
		img_div.setAttribute("class", "two columns");
		img_div.setAttribute("id", "preview3_div");
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
		}
		fileReader.readAsDataURL(document.getElementById('img_input3').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img3");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag3(event)");
		img_div.appendChild(img); 
		document.getElementById("images").appendChild(img_div);
		document.getElementById("div_img3").removeChild(document.getElementById("confirm_img3"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_three()");
		button.setAttribute("id", "Deny_img3");
		var button_text = document.createTextNode("Delete");
		button.appendChild(button_text);
		document.getElementById("div_img3").appendChild(button);
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
			document.getElementById("images").removeChild(document.getElementById("preview3_div"));
		}
		document.getElementById("div_img3").removeChild(document.getElementById("Deny_img3"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_three()");
		button.setAttribute("id", "confirm_img3");
		var button_text = document.createTextNode("Confirm");
		button.setAttribute("hidden", "true");
		button.appendChild(button_text);
		document.getElementById("div_img3").appendChild(button);
		submitCheck();
	}
//Image 4
	function confirm_img_four() {
		var img_div = document.createElement("div");
		img_div.setAttribute("class", "two columns");
		img_div.setAttribute("id", "preview4_div");
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
		}
		fileReader.readAsDataURL(document.getElementById('img_input4').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img4");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag4(event)");
		img_div.appendChild(img); 
		document.getElementById("images").appendChild(img_div);
		document.getElementById("div_img4").removeChild(document.getElementById("confirm_img4"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_four()");
		button.setAttribute("id", "Deny_img4");
		var button_text = document.createTextNode("Delete");
		button.appendChild(button_text);
		document.getElementById("div_img4").appendChild(button);
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
			document.getElementById("images").removeChild(document.getElementById("preview4_div"));
		}
		document.getElementById("div_img4").removeChild(document.getElementById("Deny_img4"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_four()");
		button.setAttribute("id", "confirm_img4");
		var button_text = document.createTextNode("Confirm");
		button.appendChild(button_text);
		button.setAttribute("hidden", "true");
		document.getElementById("div_img4").appendChild(button);
		submitCheck();
	}
//Image 5
	function confirm_img_five() {
		var img_div = document.createElement("div");
		img_div.setAttribute("class", "two columns");
		img_div.setAttribute("id", "preview5_div");
		var img = document.createElement("img");
		var fileReader = new FileReader();
		fileReader.onload = function() {
			img.src = fileReader.result;
		}
		fileReader.readAsDataURL(document.getElementById('img_input5').files[0]);
		img.setAttribute("style", "width:100px; height:100px");
		img.setAttribute("id", "img5");
		img.setAttribute("draggable", "true");
		img.setAttribute("ondragstart", "drag5(event)");
		img_div.appendChild(img); 
		document.getElementById("images").appendChild(img_div);
		document.getElementById("div_img5").removeChild(document.getElementById("confirm_img5"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "Deny_img_five()");
		button.setAttribute("id", "Deny_img5");
		var button_text = document.createTextNode("Delete");
		button.appendChild(button_text);
		document.getElementById("div_img5").appendChild(button);
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
			document.getElementById("images").removeChild(document.getElementById("preview5_div"));
		}
		document.getElementById("div_img5").removeChild(document.getElementById("Deny_img5"));
		var button = document.createElement("button");
		button.setAttribute("onClick", "confirm_img_five()");
		button.setAttribute("id", "confirm_img5");
		var button_text = document.createTextNode("Confirm");
		button.setAttribute("hidden", "true");
		button.appendChild(button_text);
		document.getElementById("div_img5").appendChild(button);
		submitCheck();
	}
	function imgchange(imgclass) {
		var concat = "#" + imgclass;
        $(concat).show();
        
    }