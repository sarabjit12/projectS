var $ = function (id) {
    return document.getElementById(id);
};

function final_item_price(price, discount) {
    var total_item_price = price;
	{
        total_item_price = price - (price * discount / 100);
    }
    total_item_price = total_item_price.toFixed(2);
    return total_item_price;
}

function Discount_price(price,discount) {
	var total_percentage;
	{
	total_percentage = price- (price - (price * discount/100));
	}
	total_percentage = total_percentage.toFixed(2);
	return total_percentage;
}


function process_in_background () {
    var price = parseFloat ( $("item_price").value );
    var discount = parseFloat ( $("discount_Percentage").value );
   
    
    if (isNaN(price) || isNaN(discount) ) {
        alert("Please enter a value on Item price and Discount persentage");
    }
    else if (0 < price && price > 999) {  
		alert("Item price must be greater than 0 and less than 1000");
    }
	else if (0 < discount && discount > 69) {
		alert("Discount persentage must be greater than 0 and less than 70");
	}
	else{
		$("discount_dollar").value = Discount_price(price, discount);
		$("net_price").value = final_item_price(price, discount);
	}
}
window.onload = function () {
    $("calculate").onclick = process_in_background;
	   
};