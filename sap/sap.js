gsap.from(".mian *",{
    duration:2,
    delay:1,
    opacity:0,
    x:40,
    y:-30,
    stagger:0.5,
})
gsap.from(".sec1>h1",{
    duration:2,
    delay:2,
    opacity:0,
    scale:0.5,
    rotate:260,
    color:"blue"

})
gsap.from(".sec2>img",{
    x:400,
    duration:2,
    delay:2,
    opacity:0,
    scale:0.5,
    scrollTrigger:".sec2>img"


})