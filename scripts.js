let A = document.getElementById('pitfiller');
let B = document.getElementById('pitfull'); 
let C = getComputedStyle(B);
let D = getComputedStyle(A);
console.log(C.height);
console.log(D.height);
A.style.height = window.outerHeight - parseFloat(C.height) + "px";

