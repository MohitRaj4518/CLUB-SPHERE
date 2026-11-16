// Sample club and event information.
// Change these details to match your college's confirmed information.

const clubs = [
    {
        id: "techknow",
        name: "Techknow",
        category: "Technical Club",
        icon: "💻",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        description: "Coding, hackathons, programming and technical workshops."
    },
    {
        id: "sports",
        name: "Sports",
        category: "Sports Club",
        icon: "🏏",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
        description: "Cricket, football, badminton and other sports activities."
    },
    {
        id: "clutch",
        name: "Clutch",
        category: "Online Gaming Club",
        icon: "🎮",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
        description: "Gaming tournaments, esports and online competitions."
    },
    {
        id: "cacs",
        name: "CACS",
        category: "Cultural Club",
        icon: "🎭",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
        description: "Dance, singing, festivals and cultural activities."
    },
    {
        id: "neon",
        name: "NEON",
        category: "Cinematic Club",
        icon: "🎬",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
        description: "Photography, filmmaking and video editing."
    }
];

const events = [
    { name: "Coding Competition", club: "Techknow", location: "LT1", timing: "4:00 PM - 5:00 PM" },
    { name: "Football Tournament", club: "Sports", location: "Sports Ground", timing: "4:00 PM - 5:00 PM" },
    { name: "Gaming Competition", club: "Clutch", location: "LT1", timing: "4:00 PM - 5:00 PM" },
    { name: "Cultural Evening", club: "CACS", location: "LT1", timing: "4:00 PM - 5:00 PM" },
    { name: "Short Film Competition", club: "NEON", location: "LT1", timing: "4:00 PM - 5:00 PM" }
];

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[character]));
}

// Create the club cards on the homepage.
const clubContainer = document.getElementById("clubContainer");

if (clubContainer) {
    clubs.forEach(function (club) {
        const card = document.createElement("article");
        card.className = "club-card";

        card.innerHTML = `
            <img class="club-card-image" src="${escapeHTML(club.image)}" alt="${escapeHTML(club.name)} club activity" loading="lazy">
            <div class="club-icon">${escapeHTML(club.icon)}</div>
            <h3>${escapeHTML(club.name)}</h3>
            <div class="club-category">${escapeHTML(club.category)}</div>
            <p>${escapeHTML(club.description)}</p>
            <a class="button button-yellow" href="club.html?club=${encodeURIComponent(club.id)}">Explore club</a>
        `;

        clubContainer.appendChild(card);
    });
}

// Create event cards on the homepage.
const eventContainer = document.getElementById("eventContainer");

const clubIdMap = {
    "Techknow": "techknow",
    "Sports": "sports",
    "Clutch": "clutch",
    "CACS": "cacs",
    "NEON": "neon"
};

if (eventContainer) {
    events.forEach(function (event) {
        const card = document.createElement("article");
        card.className = "event-card";

        const clubId = clubIdMap[event.club] || "techknow";

        card.innerHTML = `
            <h3>${escapeHTML(event.name)}</h3>
            <p><strong>Club:</strong> ${escapeHTML(event.club)}</p>
            <p><strong>Location:</strong> ${escapeHTML(event.location)}</p>
            <p><strong>Timing:</strong> ${escapeHTML(event.timing)}</p>
            <a class="button button-yellow" href="club.html?club=${encodeURIComponent(clubId)}">View &amp; Register</a>
        `;

        eventContainer.appendChild(card);
    });
}

// Mobile navigation menu.
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
}