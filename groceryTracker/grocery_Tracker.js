let grocery_1;
let grocery_2;
let grocery_3;

function groceryTracker() {
    a = parseFloat(document.getElementById("grocery_1").value);
    b = parseFloat(document.getElementById("grocery_2").value);
    c = parseFloat(document.getElementById("grocery_3").value);


    amount = a + b + c;
    formatted_amount = amount.toFixed(2);

    document.getElementById("total").innerText = `The total amount is:${'¢' + formatted_amount}`

} 