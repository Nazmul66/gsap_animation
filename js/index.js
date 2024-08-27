var tl = gsap.timeline();

// gsap.to('#box',{
//     x: 400,  
//     y: 400,  
//     duration: 2, 
//     delay: 2,
//     opacity: 0.5,
//     rotate: 360,
//     BackgroundColor: "blue",
//     borderRadius: '50%',
//     scale: 1.5,
//     ease: "elastic.out(1, 0.3)"
// });

// gsap.from('#box',{
//     x: 400,
//     y: 400,
//     duration: 1,
//     delay: 2,
//     opacity: 0.5,
//     rotate: 360,
//     BackgroundColor: "blue",
//     borderRadius: '50%',
//     scale: 1.5,
//     ease: "elastic.out(1, 0.3)"
// });


tl.to('#box',{
    x: 400,
    duration: 2,
    delay: 1,
    rotate: 360,
    borderRadius: '50%',
    repeat: -1,
    yoyo: true,
})
tl.to('#box2',{
    x: 400,
    duration: 2,
    // delay: 3,
    rotate: 360,
    borderRadius: '50%',
    repeat: -1,
    yoyo: true,
})

// gsap.from('h1',{
//      y: 50,
//      duration: 1,
//      opacity: 0,
//      stagger: 1,
//      delay: 1
// })