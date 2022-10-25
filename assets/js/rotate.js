const card = document.querySelector('.rotate')
const frame = document.querySelector('.glass-container')
const elements = document.querySelector('.pop')

frame.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

frame.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.1s ease-out'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    elements.style.boxShadow = "none"
    elements.style.transform = 'translateZ(0px)'
})

frame.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'
    elements.style.boxShadow = "10px 10px 5px 0p rgba( 31, 38, 135, 0.37 )"
    elements.style.transform = 'translateZ(150px)'
})