function bgchange() {
    var navbar = document.getElementById("colorchange");
    let scroll = window.scrollY;
    if (scroll < 150) {
        navbar.classList.remove('bgcolore')
    } else {
        navbar.classList.add('bgcolore')
    }
}
window.addEventListener('scroll', bgchange)

  let chnagetextcolore =() => {
    var xyz = document.getElementById("change");
    var y = window.scrollY;
    if (y < 150) {
        xyz.classList.remove('colorechangetext')
    } else {
        xyz.classList.add('colorechangetext')
    }
}
window.addEventListener('scroll', chnagetextcolore)

