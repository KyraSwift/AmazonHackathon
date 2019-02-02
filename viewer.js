
var yes = 0;
var maybe = 0;
var no = 0;
var notsure = 0;
var output = [];

function writeText(form) {
    function yes() {
        if (document.getElementById('yes').checked) {
            yes = yes + 1;
            output[0] = output[0] + yes;
            document.getElementById('yes1').innerHTML = yes;
        } else {
            document.getElementById('yes1').innerHTML = output[0];
        }
    }
    //If Answer is MAYBE
    function maybe() {
        if (document.getElementById('maybe').checked) {
            maybe = maybe + 1;
            document.getElementById('maybe1').innerHTML = maybe;
        } else {
            document.getElementById('maybe1').innerHTML = maybe;
        }
    }
    //If Answer is NO
    function no() {
        if (document.getElementById('no').checked) {
            no = no + 1;
            document.getElementById('no1').innerHTML = no;
        } else {
            document.getElementById('maybe1').innerHTML = maybe;
        }
    }
    //If Answer is NOT SURE
    function not_sure() {
        if (document.getElementById('notsure').checked) {
            notsure = notsure + 1;
            document.getElementById('notsure1').innerHTML = notsure;
        } else {
            document.getElementById('maybe1').innerHTML = maybe;
        }
    }
