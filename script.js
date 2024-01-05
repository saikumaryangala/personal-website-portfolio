document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

   
});



function mouseshapechange() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    var timeout; // Declare the timeout variable

    window.addEventListener("mousemove", function (details) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, details.clientY - yprev);

        circlemousefollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${1}, ${1})`;
        }, 100);

        xprev = details.clientX; // Update xprev after using its value
        yprev = details.clientY; // Update yprev after using its value
    });
}




mouseshapechange();



function firstpageanimation() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut,
    });

  tl.to(".boundingelem", {
        y: '0',
        duration: 2,
        ease: Expo.easeInOut,
        delay:-1,
        stagger:0.2,

    });


}




function circlemousefollower(xscale,yscale) {
    window.addEventListener("mousemove",function(details){


               
                document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;


    })

}


circlemousefollower();

firstpageanimation();


document.querySelectorAll(".elem").forEach(function(elem) {
    var rotate = 0;
    var diffrotate = 0;

    elem.addEventListener("mousemove", function(details) {
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrotate = details.clientX - rotate;
        rotate = details.clientX;

        diff = gsap.utils.clamp(-20, 20, diff);
        diffrotate = gsap.utils.clamp(-20, 20, diffrotate * 0.8);

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power1",
            top: diff,
            left: details.clientX,
            rotation: diffrotate,
            duration:0.5,

        });
    });

    elem.addEventListener("mouseleave", function(details) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power1"
        });
    });
});














