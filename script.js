// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// REVEAL SUAVE (tipo Apple)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

// pega posição do mouse
document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

// animação suave do follower
function animate() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    follower.style.left = posX + "px";
    follower.style.top = posY + "px";

    requestAnimationFrame(animate);
}

animate();

// INTERAÇÃO COM LINKS
document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
        follower.style.transform = "translate(-50%, -50%) scale(2)";
        follower.style.borderColor = "#fff";
    });

    el.addEventListener("mouseleave", () => {
        follower.style.transform = "translate(-50%, -50%) scale(1)";
        follower.style.borderColor = "#aaa";
    });
});