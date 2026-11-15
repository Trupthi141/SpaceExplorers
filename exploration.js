// Exploration Page Logic: Descent Animation, Discovery Markers Database & Detailed Storytelling Archive

const equipmentData = {
    // ================= MOON EQUIPMENT =================
    apollo: {
        tag: "Lunar Archaeological Site",
        title: "Apollo Lunar Modules (Descent Stages)",
        mission: "Apollo Program (11, 12, 14, 15, 16, 17)",
        year: "1969 - 1972",
        status: "Deliberately Left Behind (Discarded)",
        purpose: "Transporting astronauts from lunar orbit to the Moon's surface and acting as the launch platform for the ascent stage to return astronauts to the Command/Service Module.",
        background: "Following the historic Apollo 11 landing in July 1969, six lunar modules successfully landed crews on the lunar highlands and mare basins. Upon mission completion, the upper ascent stage blasted off, leaving the massive descent stage permanently on the lunar landscape.",
        contributions: "Carried commemorative plaques, early scientific instruments, and established humanity's first permanent off-world footprints. They provided benchmark reference sites for modern lunar laser ranging.",
        fate: "Remaining intact in the vacuum of space, subjected to micrometeoroid impacts and extreme thermal fluctuations.",
        reason: "Deliberately left behind to minimize return mass and energy requirements for the ascent stage.",
        photo: "https://images.nasa.gov/details/as11-40-5874",
        photoCaption: "Buzz Aldrin standing near the Apollo 11 Lunar Module descent stage in Mare Tranquillitatis.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html",
        nasaRef: "https://www.nasa.gov/mission_pages/apollo/index.html",
        icon: "fa-solid fa-satellite-dish"
    },
    rover: {
        tag: "Lunar Mobility Archive",
        title: "Lunar Roving Vehicles (LRV)",
        mission: "Apollo 15, 16, and 17",
        year: "1971 - 1972",
        status: "Deliberately Left Behind (Discarded)",
        purpose: "Providing high-mobility transport for astronauts to traverse lunar terrain, collect diverse rock samples, and deploy scientific instruments far beyond the immediate landing zone.",
        background: "Stowed folded inside the Lunar Module descent stage quad compartments, the battery-powered electric rovers were deployed upon landing. Astronauts drove them up to 35 kilometers across Hadley Rille, Descartes, and Taurus-Littrow.",
        contributions: "Significantly expanded the geological return of the Apollo missions, allowing collection of deep-mantle samples like the Genesis Rock and orange soil.",
        fate: "Resting parked at their final traverse termination points on the Moon.",
        reason: "Left behind because the return vehicle capacity was entirely dedicated to hundreds of kilograms of irreplaceable lunar rock and soil samples.",
        photo: "https://images.nasa.gov/details/as15-88-11901",
        photoCaption: "The Apollo 15 Lunar Roving Vehicle parked near Hadley Rille.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-071A",
        nasaRef: "https://history.nasa.gov/SP-368/s2ch3.htm",
        icon: "fa-solid fa-car-tunnel"
    },
    alsep: {
        tag: "Scientific Deployment",
        title: "ALSEP Scientific Packages",
        mission: "Apollo 12, 14, 15, 16, and 17",
        year: "1969 - 1972",
        status: "Inactive (Powered down September 1977)",
        purpose: "Executing long-term geophysical and environmental measurements on the lunar surface, including seismology, heat flow, solar wind, and magnetometry.",
        background: "Astronauts deployed modular instruments connected by power cables to a central station powered by a Radioisotope Thermoelectric Generator (RTG) containing Plutonium-238.",
        contributions: "Recorded thousands of moonquakes, meteorite impacts, and measured the tenuous lunar atmosphere and solar wind interaction over years of continuous operation.",
        fate: "Stationed permanently on the lunar surface with transmitters turned off by NASA in September 1977 due to budget constraints.",
        reason: "Remained on the Moon because recovering nuclear-powered stationary stations was neither technologically feasible nor cost-effective.",
        photo: "https://images.nasa.gov/details/as12-46-6813",
        photoCaption: "ALSEP central station and antenna deployed during Apollo 12 in Oceanus Procellarum.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/planetary/lunar/alsep.html",
        nasaRef: "https://www.nasa.gov/mission_pages/apollo/alsj/alsep.html",
        icon: "fa-solid fa-flask"
    },
    surveyor: {
        tag: "Unmanned Robotic Pioneer",
        title: "Surveyor Landers",
        mission: "Surveyor Program",
        year: "1966 - 1968",
        status: "Inactive / Surveyor 2 Crashed",
        purpose: "Validating soft-landing techniques and analyzing lunar soil bearing strength and chemical composition prior to crewed Apollo touchdowns.",
        background: "NASA dispatched seven robotic spacecraft directly to the Moon. Five successfully soft-landed, transmitting over 87,000 television images back to Earth and proving the lunar surface could support human weight.",
        contributions: "Provided critical engineering data that eliminated fears of spacecraft sinking into bottomless dust layers.",
        fate: "Stationed across various lunar maria and highland targets (Surveyor 3 was later visited by Apollo 12 astronauts who retrieved camera parts).",
        reason: "Unmanned robotic probes designed for one-way missions without return propulsion stages.",
        photo: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/09/as12-48-7121_orig.jpg",
        photoCaption: "Surveyor 3 on the lunar surface, photographed by Apollo 12 astronaut Alan Bean on November 20, 1969. Credit: NASA/JSC.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html",
        nasaRef: "https://history.nasa.gov/SP-4210/contents.htm",
        icon: "fa-solid fa-radar"
    },

    // ================= MARS EQUIPMENT =================
    sojourner: {
        tag: "Martian Robotic Pioneer",
        title: "Sojourner Rover (Pathfinder)",
        mission: "Mars Pathfinder",
        year: "1997",
        status: "Inactive (Communications ceased September 1997)",
        purpose: "Demonstrating low-cost planetary surface mobility and deploying an Alpha Proton X-ray Spectrometer to determine elemental rock composition.",
        background: "Landing via airbags in Ares Vallis on July 4, 1997, Sojourner became the first wheeled vehicle to drive on an alien world, captivating global audiences over its active lifespan.",
        contributions: "Proved that mobile robotic exploration was viable on Mars and gathered detailed chemical analyses of Martian rocks like 'Barnacle Bill' and 'Yogi'.",
        fate: "Stationed permanently in Ares Vallis after the lander base station lost battery power.",
        reason: "Designed as a technology demonstration without long-term Martian winter survival heaters.",
        photo: "https://images.nasa.gov/details/PIA01122",
        photoCaption: "Sojourner rover analyzing a Martian rock named 'Yogi' in Ares Vallis.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-068A",
        nasaRef: "https://mars.nasa.gov/mars-exploration/missions/pathfinder/",
        icon: "fa-solid fa-robot"
    },
    spirit: {
        tag: "Long-Range Exploration Rover",
        title: "Spirit Rover (MER-A)",
        mission: "Mars Exploration Rover",
        year: "2004 - 2010",
        status: "Inactive (Sand trap entrapment / Communication loss)",
        purpose: "Geological exploration of Gusev Crater to search for past water activity and mineralogical evidence in Martian rocks and soils.",
        background: "Landing in January 2004, Spirit operated for over six years—far beyond its planned 90-day warranty. In 2009, its wheels broke through a crust layer into soft sulfate sand at 'Troy', trapping the rover.",
        contributions: "Discovered silica-rich deposits indicating ancient hydrothermal systems and hot springs, proving early Mars had environments capable of supporting microbial life.",
        fate: "Stationed permanently in Home Plate region of Gusev Crater.",
        reason: "Unable to tilt its solar panels toward the Sun to survive the harsh Martian winter after becoming immovably embedded in sand.",
        photo: "https://images.nasa.gov/details/PIA11831",
        photoCaption: "Spirit rover stranded in soft sand at the 'Troy' site in Gusev Crater.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-027A",
        nasaRef: "https://mars.nasa.gov/mer/mission/spacecraft/spirit/",
        icon: "fa-solid fa-car-side"
    },
    opportunity: {
        tag: "Endurance Record Holder",
        title: "Opportunity Rover (MER-B)",
        mission: "Mars Exploration Rover",
        year: "2004 - 2018",
        status: "Inactive (Global dust storm June 2018)",
        purpose: "Exploring Meridiani Planum to examine iron-bearing minerals ('blue blueberries') and investigate extensive ancient water evaporation basins.",
        background: "Twin to Spirit, Opportunity landed on the opposite side of Mars and embarked on a legendary marathon traverse, exploring Victoria Crater, Endeavour Crater, and endurance basins.",
        contributions: "Shattered planetary roving distance records (traveling over 45 km) and conclusively proved standing water once saturated Martian soils.",
        fate: "Stationed permanently in Perseverance Valley on the rim of Endeavour Crater.",
        reason: "A planet-wide dust storm blocked sunlight to its solar arrays in June 2018; low temperatures caused permanent battery failure.",
        photo: "https://images.nasa.gov/details/PIA19807",
        photoCaption: "Opportunity selfie captured in Endeavour Crater showcasing dusty solar panels.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A",
        nasaRef: "https://mars.nasa.gov/mer/mission/spacecraft/opportunity/",
        icon: "fa-solid fa-car-side"
    },
    viking: {
        tag: "Historic Astrobiology Landers",
        title: "Viking 1 and Viking 2 Landers",
        mission: "Viking Program",
        year: "1976 - 1982",
        status: "Inactive (Battery / Power degradation)",
        purpose: "Obtaining high-resolution surface imagery, analyzing Martian atmosphere and meteorology, and conducting pioneering biological experiments for organic life detection.",
        background: "Viking 1 and 2 successfully touched down at Chryse Planitia and Utopia Planitia in 1976. They transmitted the first breathtaking panoramic views of the red rocky Martian terrain.",
        contributions: "Provided foundational baseline data on Martian meteorology, soil chemistry, and atmospheric nitrogen/argon isotopes used in all subsequent Mars research.",
        fate: "Stationed permanently at their landing sites across Chryse Planitia and Utopia Planitia.",
        reason: "Stationary nuclear-and-battery-powered landers without mobility or self-cleaning solar mechanisms.",
        photo: "https://images.nasa.gov/details/PIA00393",
        photoCaption: "Viking 1 Lander deck and rocky landscape at Chryse Planitia.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/planetary/viking.html",
        nasaRef: "https://history.nasa.gov/SP-4212/contents.html",
        icon: "fa-solid fa-satellite-dish"
    },
    phoenix: {
        tag: "Polar Ice Explorer",
        title: "Phoenix Lander",
        mission: "Phoenix Mars Mission",
        year: "2008",
        status: "Inactive (Winter frost damage November 2008)",
        purpose: "Exploring the geology and aqueous history of Mars' arctic polar region, digging into subsurface permafrost to sample water ice.",
        background: "Landing successfully in Vastitas Borealis in May 2008, Phoenix used its robotic arm to scrape up white chunks of genuine Martian water ice, confirming polar subsurface reservoirs.",
        contributions: "Conclusively confirmed the presence of water ice on Mars and detected perchlorate salts in Martian soil.",
        fate: "Stationed permanently in the northern polar plains.",
        reason: "Solar arrays were crushed and short-circuited under accumulating layers of winter carbon dioxide frost (dry ice) and snow.",
        photo: "https://images.nasa.gov/details/PIA10967",
        photoCaption: "Phoenix lander resting in the arctic plains with exposed subsurface ice trenches.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2008-029A",
        nasaRef: "https://mars.nasa.gov/phoenix/",
        icon: "fa-solid fa-solar-panel"
    },
    insight: {
        tag: "Interior Geophysics Station",
        title: "InSight Lander",
        mission: "Discovery Program (Interior Exploration)",
        year: "2018 - 2022",
        status: "Inactive (Dust accumulation December 2022)",
        purpose: "Studying the deep interior of Mars by measuring seismic waves (marsquakes), heat flow through the crust, and precision radio tracking.",
        background: "Landing in Elysium Planitia, InSight deployed SEIS—a highly sensitive seismometer—and HP3 (the 'mole') thermal probe to measure the planet's heartbeat and internal structure.",
        contributions: "Detected over 1,300 marsquakes (including major impact events) and mapped the thickness of the Martian crust, mantle, and molten core.",
        fate: "Stationed permanently in Elysium Planitia.",
        reason: "Thick layers of red Martian dust gradually blanketed the solar panels, completely starving the spacecraft of electrical power.",
        photo: "https://images.nasa.gov/details/PIA22981",
        photoCaption: "InSight lander deck in Elysium Planitia with dust-covered solar panels.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-097A",
        nasaRef: "https://mars.nasa.gov/insight/",
        icon: "fa-solid fa-solar-panel"
    },
    ingenuity: {
        tag: "Extraterrestrial Aviation",
        title: "Ingenuity Helicopter",
        mission: "Mars 2020 (Perseverance companion)",
        year: "2021 - 2024",
        status: "Inactive (Rotor tip damage January 2024)",
        purpose: "Demonstrating powered, controlled flight in the extremely thin atmosphere of Mars (approx. 1% of Earth's air pressure) as a technology scout.",
        background: "Carried under the belly of the Perseverance rover, Ingenuity deployed to Wright Brothers Field in Jezero Crater in April 2021. Designed for 5 test flights, it wildly surpassed expectations by completing 72 flights.",
        contributions: "Pioneered aerial reconnaissance on another world, proving scout helicopters can map hazardous terrain and guide rover navigation.",
        fate: "Stationed permanently at Valinor Hills (Jezero Crater floor).",
        reason: "Sustained rotor blade tip damage during landing on its 72nd flight, ending mobility while retaining operational computer systems.",
        photo: "https://images.nasa.gov/details/PIA24632",
        photoCaption: "Ingenuity helicopter resting on the dusty floor of Jezero Crater.",
        nssdcLink: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-068A",
        nasaRef: "https://mars.nasa.gov/technology/helicopter/",
        icon: "fa-solid fa-helicopter"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Fade out descent animation after 2.4s
    setTimeout(() => {
        const overlay = document.getElementById('descentOverlay');
        if (overlay) {
            overlay.classList.add('fade-out');
        }
    }, 2400);

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
    const data = equipmentData[equipmentKey];
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
    const data = equipmentData[activeEquipmentKey];
    if (!data) return;

    const storyModal = document.getElementById('storyModal');
    if (!storyModal) return;

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
    if (nssdcLink) {
        nssdcLink.href = data.nssdcLink;
        nssdcLink.textContent = "NASA NSSDC Master Catalog Entry";
    }
    if (nasaLink) {
        nasaLink.href = data.nasaRef;
        nasaLink.textContent = "Official NASA Mission Resource";
    }

    storyModal.classList.add('active');
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
