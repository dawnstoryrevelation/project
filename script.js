// GSAP Fade-in Animations
gsap.from("nav", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
gsap.from(".hero-content h1", { duration: 1, x: -100, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".hero-content p", { duration: 1, x: 100, opacity: 0, ease: "power2.out", delay: 0.8 });

// Anime.js Hover Effects
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        anime({
            targets: link,
            scale: 1.2,
            duration: 200,
            easing: "easeInOutQuad"
        });
    });
    link.addEventListener("mouseleave", () => {
        anime({
            targets: link,
            scale: 1,
            duration: 200,
            easing: "easeInOutQuad"
        });
    });
});

// THREE.js 3D Rotating Water Bottle
let scene, camera, renderer, bottle;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("threejs-canvas").appendChild(renderer.domElement);

    // Water bottle (Cylinder)
    let geometry = new THREE.CylinderGeometry(1, 1, 4, 32);
    let material = new THREE.MeshStandardMaterial({ color: 0x00c896, transparent: true, opacity: 0.8 });
    bottle = new THREE.Mesh(geometry, material);
    scene.add(bottle);

    // Lights
    let light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Camera Position
    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    bottle.rotation.y += 0.01;
    renderer.render(scene, camera);
}

init();

// Parallax Effect
document.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    gsap.to(".hero-content", { y: scrollPos * 0.3, ease: "power2.out" });
});
