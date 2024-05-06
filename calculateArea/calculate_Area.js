let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    

    let area = length * width;

    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;

    //console.log(document.getElementById("result").innerText = `The area of the rectangle is: ${area}`);


}