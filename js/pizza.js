function getReceipt() {
    var text1 = "";
    var total = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByName("size");
    for(var i = 0; i < sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1 +selectedSize+"<br>";
        }

    } if(selectedSize === "Personal"){
        sizeTotal = 6;
        
    } else if(selectedSize === "Medium") {
        sizeTotal = 10;
        
    } else if(selectedSize === "Large") {
        sizeTotal = 14;
        
    } else if(selectedSize === "X-Large") {
        sizeTotal = 16;
        
    }
    total = sizeTotal;
    getCheese(text1,total);
}

function getCheese(text1, total) {
    var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
    }
    text1 = text1+selectedCheese+"<br>";
    total= total + cheeseTotal;
    getCrust(text1,total);
}

function getCrust(text1, total) {
    var crustTotal=0;
    var selectedCrust;
    var crustArray= document.getElementsByClassName("crust");
    for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "cheese stuffed crust") {
			crustTotal = 3;
		}
	}
    total= total + crustTotal;
    getSauce(text1,total);
}

function getSauce(text1, total) {
    var sauceTotal=0;
    var sauceArray= document.getElementsByClassName("sauce");
    for(var i=0; i<sauceArray.length;i++){
        if(sauceArray[i].checked){
            var selectedSauce=sauceArray[i].value;
            text1=text1+selectedSauce+"<br/>";
        }
    
    total = total + sauceTotal;
    getMeat(text1,total);
}
}

function getMeat(text1, total) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray= document.getElementsByClassName("meat");
    for(var i=0; i<meatArray.length; i++){
        if (meatArray[i].checked) {
			selectedMeat.push(meatArray[i].value);
            text1 = text1 +meatArray[i].value+ "<br>";
        }
    }
        var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }		
        total = total + meatTotal;
        getVeggie(text1,total);
    }

function getVeggie(text1, total) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggie");
    for(var i = 0; i < veggieArray.length; i++){
        if(veggieArray[i].checked){
         selectedVeggie.push(veggieArray[i].value);
        text1 = text1 +veggieArray[i].value+ "<br>";
        }
    }
    var veggieCount=selectedVeggie.length;
    if(veggieCount>1){
        veggieTotal= (veggieCount - 1);
    }else{
        veggieTotal=0;
    }
        total = total + veggieTotal;     
        document.getElementById("showText1").innerHTML=text1;
        document.getElementById("total").innerHTML="<h3>"+total+".00"+"</h3>";
    }



function clearAll() {
    document.getElementById("frm").reset();
    document.getElementById("basket").reset();
}