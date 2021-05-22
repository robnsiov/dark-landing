let _ = document;
let rings = _.querySelectorAll('.ring');
setTimeout(()=>{
    rings.forEach((ring)=>{
        ring.classList.add('rotate')
        ring.classList.remove('first-animate')
    })
}, 5000)