/* Cursor Glow */
const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.2 });
reveals.forEach(el => observer.observe(el));

/* 3D Tilt */
document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((y / r.height) - 0.5) * 12;
        const ry = ((x / r.width) - 0.5) * -12;
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

/* Orb Parallax */
const orb = document.querySelector(".ai-orb");
window.addEventListener("mousemove", e => {
    if (!orb) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    orb.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

document.querySelectorAll(".cv-btn").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.96)";
    });
    btn.addEventListener("mouseup", () => {
        btn.style.transform = "";
    });
});
