function plus() {
    var number = parseInt(document.getElementById("quantity2").value, 10);
    if (number < 20) {
        document.getElementById("quantity2").value = number + 1;
    }
}

function minus() {
    if (document.getElementById("quantity2").value > 1) {
        document.getElementById("quantity2").value -= 1;
    }
}