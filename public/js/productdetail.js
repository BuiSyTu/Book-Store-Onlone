// function checkout() {
//     function plus() {
//         $(".plus").click(function (e) {
//             console.log("zz");
//         });
//     }

//     plus();

//     var base_url = location.protocol + "//" + document.domain + ":" + location.port;

//     $.ajax({
//         type: "",
//         url: "",
//         data: "data",
//         dataType: "dataType",
//         success: function (response) {

//         }
//     });


// }
// ``

// $(document).ready(function () {
//     new checkout();
// });

function plus() {
    var number = parseInt(document.getElementById('quantity1').value, 10);
    if (number < 20) {
        document.getElementById('quantity1').value = number + 1;
    }
}

function minus() {
    if (document.getElementById('quantity1').value > 1) {
        document.getElementById('quantity1').value -= 1;
    }
}