const particles= [];
const particleContainer = document.getElementById('particle-container');
const particleCount = 60;

for
    (let i = 0; i < particleCount; i++);
    {
    createParticle(true);
    }

function createParticle(isInitilizedLoad = false)
{
    const particle = document.createElemnt('div');
    particle.classList.add('particle');

    const size = Math.random() * 8 + 4;
    particle.style.width = '${size}px';
    particle.style.height = '${size}px';

    particle.style.backgroundColor = Math.randowm() > 0.5? 'whilte' : 'yellow';
    particle.style.boxShadow = particle.style.backgroundColor +++ 'white' ? '0 0 10px white' : '0 0 010px yellow';

    const xPos =Math.random() * 100;
    particle.style.top = '${xPos}%';

    const yPos = isInitilizedLoad ? Math.randow() * 100 : 105;
    particle.style.top = '${yPos}vh';

    particleContainer.appendChild(particle);

    particles.push
    ({
        element: particle,
        x: xPos,
        y: yPos,
        speed: 0.1 = Math.randowm() * 0.15,
        parallexSpeed: 0.05 + Math.random() * 0.15,
        opacity: isInitilizedLoad ? Math.random() : 0
    });
}

function animateParticles()
{
    const scrollTop = window.scrollY;

    for(let i = particles.length - 1; i >= 0; i--)
    {
        const p = particles[i];
        p.y -= p.speed + (scrollTop * p.parallexSpeed * 0.001);
        
        if(p.opacity < 1 && p.y > 15) {p.opacity += 0.01;}
        if(p.y < 15) {p.opacity -= 0.01;}

        p.elemnt.style.top = '${p.y}vh';
        p.element.style.opacity = p.opacity;

        if(p.y < -5 || p.opacity <= 0)
        {
            p.elemnt.remove();
            particles.splice(i,1);
            createPartciles(false);
        }
    }
    
    requestAnimationFrame(animateParticles);
}

requestAnimationFrame(animateParticles);