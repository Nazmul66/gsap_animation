gsap.from("#page1 #box",{
    opacity: 0,
    rotate: 360,
    scale: 0,
    duration: 2,
    // scrollTrigger: "#page1 #box"
})

gsap.from("#page2 #box",{
    opacity: 0,
    rotate: 360,
    scale: 0,
    duration: 2,
        scrollTrigger: {
            trigger: "#page2 #box",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "top 10%",
            scrub: 2
        }
})

gsap.from("#page3 h2",{
    transform: "translateX(32%)",
    duration: 2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})