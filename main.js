document.addEventListener('DOMContentLoaded', () => {
    // Terminal Animation
    const terminalLines = [
        '> whoami',
        'SEKKAT Mohamed Amin',
        '> status',
        'AI/ML Student @ ENSIA',
        '> passions',
        'Computer Vision, Deep Learning, Cybersecurity',
        '> stack',
        'Python, C++, PyTorch, TensorFlow, Docker',
        '> location',
        'Algiers, Algeria',
        '> contact',
        'mohamed.amin.sekkat@ensia.edu.dz'
    ];

    const terminalContainer = document.getElementById('terminal-content');
    let lineIdx = 0;

    function addTerminalLine() {
        if (lineIdx < terminalLines.length) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = `<span class="mono">${terminalLines[lineIdx]}</span>`;
            terminalContainer.appendChild(line);

            // Trigger animation
            setTimeout(() => {
                line.classList.add('active');
            }, 10);

            lineIdx++;
            setTimeout(addTerminalLine, 600);
        } else {
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            terminalContainer.appendChild(cursor);
        }
    }

    // Start terminal animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addTerminalLine();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.terminal'));

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple reveal animation for project cards
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        card.observer = cardObserver;
        cardObserver.observe(card);
    });
});
