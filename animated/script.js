// locomotive scroll
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();


function navbarchangingcolor() {
    gsap.to(".navbar", {
        backgroundColor: "white",
        color: "black",
        scrollTrigger: {
            trigger: ".navbar",
            start: "top top",
            end: "bottom bottom",
            scrub: .01,
            // markers: true,

        }
    })
    gsap.to(".navbar", {
        backgroundColor: "black",
        color: "white",
        scrollTrigger: {
            trigger: ".craft",
            scrub: .01,
            start: "top 0%",
            end: "bottom bottom"

        }
    })
}

function navbaranim() {

    var tl = gsap.timeline()
    gsap.from("#textsigni", {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: .1
    })

    // nav bar ke niche wecraft para
    tl.from("#wecraft", {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: .3
    })

}

function videoanim() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            // scroller: "body",
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            scrub: 2,
            // pin: true,
        }
    })

    tl.to(".vdodiv ", {
        '--clip': "2%",
    }, 'a')
    tl.to(".slidesm", {
        scale: 1,
    }, 'a')
    tl.to(".vdodiv ", {
        opacity: 0
    },)

    tl.to(".lft", {
        xPercent: -10,
        stagger: .01,
        ease: Power4
    }, 'b')
    tl.to(".rgt", {
        xPercent: 10,
        stagger: .01,
        ease: Power4
    }, 'b')
}


function realpageanimation() {

    gsap.to(".slide", {
        transform: "translateX(-180%)",
        ease: Power1,
        scrollTrigger: {
            trigger: ".real",
            start: "top 0%",
            end: "bottom 0%",
            // markers: true,
            scrub: .5,
        }
    })
}

function teamanimation() {

    document.querySelectorAll(".listelem").forEach((e) => {
        e.addEventListener("mousemove", function (e) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                ease: Power4,
                duration: .5,
                x: gsap.utils.mapRange(0, window.innerWidth, -80, 400, e.clientX)
            })

        })
        e.addEventListener("mouseleave", function () {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: .5
            })
        })
    })
}


gsap.from(".meettheentireteam", {
    opacity: 0,
    y: -100,
    duration: 2,
    ease: Power4,
    stagger: 1,
    scrollTrigger: {
        // markers: true,
        trigger: ".meettheentireteam",
        start: "top 70%",
        end: "top 50%",
        scrub: 1
    }
})

function paraanimation() {

    var clutter = "";
    document.querySelector(".textpara").textContent.split("").forEach(function (e) {
        if (e === " ") clutter += '<span>&nbsp;</span>'
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".textpara").innerHTML = clutter;

    gsap.set(".textpara span", {
        opacity: .1
    })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".paragraph",
            // markers: true,
            scrub: 1,
            start: "top 80%",
            end: "top 20%",
        },
        opacity: 1,
        stagger: .3,
        ease: Power4,
    })
}



function capsuleanimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true,
            scrub: 4
        },
        y: 0,
    })
    gsap.to(".capsule:nth-child(1)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true,
            scrub: 4
        },
        y: 0,
    })
}



function bodycolorchange(){

    document.querySelectorAll(".section")
    .forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color);
                
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color);
                
            }
        })
    })
}


navbaranim()
videoanim()
realpageanimation()
teamanimation()
paraanimation()
// navbarchangingcolor()
capsuleanimation()
bodycolorchange()