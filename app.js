const img1 = document.querySelector('.img1')
const images = document.querySelectorAll('.img-test');
const btns = document.querySelectorAll('.btn');

gsap.to(images, {
    x: '+=150', 
    duration: 1,
    ease: 'power4.out',
    stagger: 0.1
    // onStart: start,
    // onUpdate: update,
    // onComplete: completed
});

gsap.from(btns, {
    x: '-150', 
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.1

});


// gsap.from(img1, {x: -850, duration: 1});
// gsap.fromTo(images[0], {x: -850}, {x: 250, duration: 1})

// function start(){
//     console.log("Décolenchement !");
// }
// function update(){
//     console.log("Mise à jour !");
// }
// function completed(){
//     console.log("Fin !");
// }