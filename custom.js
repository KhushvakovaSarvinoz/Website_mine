let type = new Typed('#changing-text', {
    strings : ["Front-end Developer", "Good Specialist"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
}) ;

let name = document.querySelector ('#name')
name.addEventListener('mouseenter', function() {
    name.textContent = 'SARVINOZ'
}) 

name.addEventListener('mouseleave', function() {
    name.textContent = 'KHUSHVAKOVA'
})


