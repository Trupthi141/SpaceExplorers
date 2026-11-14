// Generate Procedural Starfield & Cosmic Dust
document.addEventListener('DOMContentLoaded', () => {
    createStarfield();
});

function createStarfield() {
    const starsContainer = document.getElementById('stars');
    const starsContainer2 = document.getElementById('stars2');
    const starsContainer3 = document.getElementById('stars3');

    if (starsContainer) starsContainer.innerHTML = generateStars(120, 1.5, 'star-small');
    if (starsContainer2) starsContainer2.innerHTML = generateStars(60, 2.5, 'star-medium');
    if (starsContainer3) starsContainer3.innerHTML = generateStars(25, 3.5, 'star-large twinkling');
}

function generateStars(count, maxSize, className) {
    let starsHTML = '';
    for (let i = 0; i < count; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * maxSize + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        const animationDelay = Math.random() * 5;

        starsHTML += `<div class="${className}" style="
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background: #ffffff;
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
            animation-delay: ${animationDelay}s;
        "></div>`;
    }
    return starsHTML;
}

// Modal Handling for Explore Buttons
function openExploreModal(planetName) {
    const modal = document.getElementById('exploreModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalIcon = document.getElementById('modalIcon');

    if (planetName === 'Moon') {
        modalTitle.textContent = 'Entering Lunar Orbit';
        modalDesc.textContent = 'You are about to access reconnaissance archives for Apollo descent stages, abandoned lunar rovers, and seismographic payloads resting in Mare Tranquillitatis. Full 3D interactive lunar mapping modules unlock in Stage 2.';
        modalIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
        modalIcon.style.color = '#e2e8f0';
        modalIcon.style.borderColor = 'rgba(226, 232, 240, 0.4)';
        modalIcon.style.background = 'rgba(226, 232, 240, 0.1)';
    } else {
        modalTitle.textContent = 'Entering Martian Atmosphere';
        modalDesc.textContent = 'You are about to access telemetry and artifact tracking for Viking landers, Spirit, Opportunity, and Curiosity rovers stranded across Gale Crater and Jezero. Full Martian surface exploration modules unlock in Stage 2.';
        modalIcon.innerHTML = '<i class="fa-solid fa-globe"></i>';
        modalIcon.style.color = '#f97316';
        modalIcon.style.borderColor = 'rgba(249, 115, 22, 0.4)';
        modalIcon.style.background = 'rgba(249, 115, 22, 0.1)';
    }

    modal.classList.add('active');
}

function closeExploreModal() {
    const modal = document.getElementById('exploreModal');
    modal.classList.remove('active');
}

// Close modal on clicking outside card
window.addEventListener('click', (e) => {
    const modal = document.getElementById('exploreModal');
    if (e.target === modal) {
        closeExploreModal();
    }
});
