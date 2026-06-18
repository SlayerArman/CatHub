const particles = [];
const particleContainer = document.getElementById('particle-container');
const particleCount = 60;

for (let i = 0; i < particleCount; i++) {
    createParticle(true);
}

function createParticle(isInitialLoad = false) {
    const particle = document.createElement('div');
    particle.classList.add('particle');


    const size = Math.random() * 8 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    

    const isWhite = Math.random() > 0.5;
    particle.style.backgroundColor = isWhite ? 'white' : 'yellow';
    particle.style.boxShadow = isWhite ? '0 0 10px white' : '0 0 10px yellow';
    
  
    const xPos = Math.random() * 100;
    particle.style.left = `${xPos}%`;
    const yPos = isInitialLoad ? Math.random() * 100 : 105;
    particle.style.top = `${yPos}vh`;

    particleContainer.appendChild(particle);

    particles.push({
        element: particle,
        y: yPos,
        speed: 0.1 + Math.random() * 0.15,
        parallaxSpeed: 0.05 + Math.random() * 0.15,
        opacity: isInitialLoad ? Math.random() : 0
    });
}

function animateParticles() {
    const scrollTop = window.scrollY;

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        
        p.y -= p.speed + (scrollTop * p.parallaxSpeed * 0.001);

     
        if (p.opacity < 1 && p.y > 15) p.opacity += 0.01;
        if (p.y < 15) p.opacity -= 0.01;

        
        p.element.style.top = `${p.y}vh`;
        p.element.style.opacity = p.opacity;

        // Recycle particle if it goes off-screen
        if (p.y < -5 || p.opacity <= 0) {
            p.element.remove();
            particles.splice(i, 1);
            createParticle(false);
        }
    }
    requestAnimationFrame(animateParticles);
}

animateParticles();