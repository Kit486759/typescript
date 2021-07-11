var ipt1 = document.getElementById("ipt1");
var ipt2 = document.getElementById("ipt2");
var btn = document.getElementById("btn");
var cal = function (val1, val2) {
    return val1 + val2;
};
btn.addEventListener("click", function () {
    console.log(cal(+ipt1.value, +ipt2.value));
});
