var btn = document.getElementById("btn-adc");

btn.onclick = function () {
    var num01 = document.getElementById("number-1").value;
    var num02 = document.getElementById("number-2").value;

    $('#resultado').html(parseInt(num01) + parseInt(num02)); 
};
