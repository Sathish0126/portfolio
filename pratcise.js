var typed = new Typed(".typing",{
    strings:["Web designer","Web-developer","Team-leader","Joint-secretary","Class-Represetive"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})
document.getElementById('change-bg-btn').addEventListener('click', changeColor);

function changeColor() {
    // Get the value from the input field
    var color = document.getElementById('color-input').value;
    // Change the background color of the body
    document.body.style.backgroundColor = color;
}

function openPDF() {
    window.open('Profile.pdf', '_blank');
}
function openintern() {
    window.open('internship.pdf', '_blank');
}

