// Story Engine: Handles descent animation, discovery markers, and detailed story archive views

const activeDataset = (typeof moonEquipment !== 'undefined') ? moonEquipment : (typeof marsEquipment !== 'undefined' ? marsEquipment : {});

document.addEventListener('DOMContentLoaded', () => {
    // Fade out descent entry animation after 2.2s
    setTimeout(() => {
        const overlay = document.getElementById('descentOverlay');
        if (overlay) {
            overlay.classList.add('fade-out');
        }
    }, 2200);

    createExploreStars();
});

function createExploreStars() {
    const starContainer = document.getElementById('exploreStars');
    if (!starContainer) return;

    let starsHTML = '';
    for (let i = 0; i < 150; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 0.8;
        const opacity = Math.random() * 0.8 + 0.2;

        starsHTML += `<div style="
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background: #ffffff;
            border-radius: 50%;
            opacity: ${opacity};
        "></div>`;
    }
    starContainer.innerHTML = starsHTML;
}

let activeEquipmentKey = null;

function openInfoPanel(equipmentKey) {
    activeEquipmentKey = equipmentKey;
    const data = activeDataset[equipmentKey];
    if (!data) return;

    document.getElementById('panelTag').textContent = data.tag;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelDesc').textContent = data.purpose;
    document.getElementById('panelYear').textContent = data.year;
    document.getElementById('panelWeight').textContent = data.status;
    document.getElementById('panelIcon').innerHTML = `<i class="${data.icon}"></i>`;

    const modal = document.getElementById('infoPanel');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeInfoPanel() {
    const modal = document.getElementById('infoPanel');
    if (modal) {
        modal.classList.remove('active');
    }
}

function openDetailedStory() {
    closeInfoPanel();
    const data = activeDataset[activeEquipmentKey];
    if (!data) return;

    const storyModal = document.getElementById('storyModal');
    if (!storyModal) return;

    document.getElementById('storyTag').textContent = data.tag;
    document.getElementById('storyTitle').textContent = data.title;
    document.getElementById('storyMission').textContent = data.mission;
    document.getElementById('storyYear').textContent = data.year;
    document.getElementById('storyStatus').textContent = data.status;
    document.getElementById('storyPurpose').textContent = data.purpose;
    document.getElementById('storyBackground').textContent = data.background;
    document.getElementById('storyContributions').textContent = data.contributions;
    document.getElementById('storyFate').textContent = data.fate;
    document.getElementById('storyReason').textContent = data.reason;

    const photoEl = document.getElementById('storyPhoto');
    const captionEl = document.getElementById('storyCaption');
    if (photoEl) photoEl.src = data.photo;
    if (captionEl) captionEl.textContent = data.photoCaption;

    const nssdcLink = document.getElementById('storyNssdc');
    const nasaLink = document.getElementById('storyNasaRef');
    if (nssdcLink) nssdcLink.href = data.nssdcLink;
    if (nasaLink) nasaLink.href = data.nasaRef;

    storyModal.classList.add('active');
    fetchNASAImages(data);
}

async function fetchNASAImages(data) {
    const galleryContainer = document.getElementById('additionalImages');
    galleryContainer.innerHTML = '<p class="loading-msg">Querying NASA Image Archives...</p>';
    
    if (!data.searchTerm) {
        galleryContainer.innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(data.searchTerm)}&media_type=image`);
        const result = await response.json();
        const items = result.collection.items.slice(1, 7); // Skip first as it's the main image

        if (items.length === 0) {
            galleryContainer.innerHTML = '<p class="loading-msg">No additional archives found.</p>';
            return;
        }

        galleryContainer.innerHTML = '';
        items.forEach(item => {
            if (item.links && item.links[0]) {
                const img = document.createElement('img');
                img.src = item.links[0].href;
                img.className = 'nasa-gallery-img';
                img.alt = item.data[0].title;
                img.title = item.data[0].title;
                galleryContainer.appendChild(img);
            }
        });
    } catch (error) {
        galleryContainer.innerHTML = '<p class="loading-msg">Unable to reach NASA servers.</p>';
    }
}


function closeDetailedStory() {
    const storyModal = document.getElementById('storyModal');
    if (storyModal) {
        storyModal.classList.remove('active');
    }
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('infoPanel');
    const storyModal = document.getElementById('storyModal');
    if (e.target === modal) {
        closeInfoPanel();
    }
    if (e.target === storyModal) {
        closeDetailedStory();
    }
});
