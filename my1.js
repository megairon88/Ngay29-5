let cheap = document.getElementById('cheap');
let good = document.getElementById('good');
let fast = document.getElementById('fast');

function cheap_checked() {
    if (cheap.checked == true && good.checked == true) {
        fast.checked = false;
    }
}
function good_checked() {
    if (good.checked == true && fast.checked == true) {
        cheap.checked = false;
    }
}
function fast_checked() {
    if (fast.checked == true && cheap.checked == true) {
        good.checked = false;
    }
}