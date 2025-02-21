function firstpageanim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10', opacity: 0, ease: Expo.easeInOut, duration: 1.2
    })
        .to(".boundingelem", {
            y: 0, ease: Expo.easeInOut, duration: 1.5, stagger: .2
        })
        .from('#herofooter', {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1, ease: Expo.easeInOut
        })
        .from("#background-video", {
            opacity: 0,
            duration: 1,
            ease: Expo.easeInOut
        });
}

firstpageanim();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var difft = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        difft = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, difft * .8)
        });
    });
});

const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    dropdownMenu.classList.remove('active');
});



var timer;
function circleChaptaKaro() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timer);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;

        document.querySelector("#minicircle").style.transform =
            `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;

        timer = setTimeout(() => {
            document.querySelector("#minicircle").style.transform =
                `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        }, 100);
    });
}

circleChaptaKaro();


// Existing JavaScript remains unchanged

// Add smooth scroll to "Learn More" buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your desired functionality, e.g., redirecting to a service page
        alert('Redirecting to service details page...');
    });
});

// Optional: Add animations on scroll
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    observer.observe(card);
});